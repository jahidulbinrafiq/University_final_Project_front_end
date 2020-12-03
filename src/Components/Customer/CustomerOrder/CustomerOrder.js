import React, { useContext, useRef, useState} from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import './CustomerOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2'

const CustomerOrder = () => {
    const [loggedInUser] = useContext(UserContext);

    const [orderInfo,setOrderInfo] = useState({});

    const [projectImage, setProjectImage] = useState('');

    const [loading, setLoading] = useState(false)
    
    const currentform = useRef(null)

    const handleBlur = (e) => {
        const newOrderInfo = {...orderInfo }
        newOrderInfo[e.target.name] = e.target.value;
        setOrderInfo(newOrderInfo)
    }
  
    
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'uploadImages')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dcbdpbzd2/image/upload',
                {
                    method: 'POST',
                    body: data
                }
        )
        const file = await res.json()
        setProjectImage(file.secure_url)
        setLoading(false)
    }
    
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        const data={projectImage,...orderInfo}
        fetch('https://limitless-headland-03212.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>
            {    
                Swal.fire({
                    title:'Your order has been successfully add',
                    text: 'Our  team will contact you soon',
                    icon:'success'
                  })
                  currentform.current.reset()
                
            }
         )
        
        .catch(error =>{
            Swal.fire({
                title: 'Error ',
                text:'Our support team will fixed it soon',
                icon:'error'
              })
           
        });

    }

    return (
        <div className='row mt-2 cotainer-fluid'>
            <div className="col-md-2">
                <SideBar  />
            </div>
            <div className='col-md-10'>
                
                <nav className='navbar ml-3'>
                    <p>Order</p>
                    <p>{loggedInUser.displayName}</p>
                </nav>

                <div className='body-container-style d-flex justify-content-center align-items-center'>
                    <form  ref = {currentform} onSubmit={handleSubmit} >
                
                        <input type="text" name='customerName'  onBlur={handleBlur} 
                            placeholder="Your name / company's name"  className="input-field" 
                        />
                        <br />

                        <input type="text" name='customerEmail'  onBlur={handleBlur} 
                            placeholder="Your email address" className="input-field" 
                        />
                        <br />

                        <input type="text" placeholder="order Name" 
                            name='orderName'  onBlur={handleBlur} 
                        />
                        <br />

                        <input type="text" name='projectDetails'  onBlur={handleBlur} 
                                placeholder="Project Details"
                                style={{height:'100px'}}
                        /><br />

                        <input type="text" placeholder="Budget" 
                        name='budget'  onBlur={handleBlur} 
                        />

                        {loading?
                            (
                                <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                                </Spinner>
                            ):
                            (
                                <label className="fileContainer">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} className='pr-2' />
                                    Upload Project Sample Image
                                    <input type="file" onChange={uploadImage}/>                    
                                </label>
                            )
                        } 
                        <br/>

                        <button className="btn-style text-center">Send</button>
                    </form>
                </div>
            </div>
     </div>
    );
};

export default CustomerOrder;