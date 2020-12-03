import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import './AddService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2'


const AddService = () => {
    const [loggedInUser] = useContext(UserContext);
 
    const [servicesInfo, setServicesInfo] = useState({});
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false)

    const handleBlur = (e) => {
        const newInfo = {...servicesInfo }
        newInfo[e.target.name] = e.target.value;
        setServicesInfo(newInfo)
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
        setImage(file.secure_url)
        setLoading(false)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data={image,...servicesInfo}
        fetch('https://limitless-headland-03212.herokuapp.com/addService',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
        })
        .then(res=>{
            Swal.fire({
                title:'New Service Add',
                text: 'contact the project manager',
                icon:'success'
              })
        })
        .catch(error =>{
            Swal.fire({
                title: 'Error ',
                text:'Kindly infrom the support team',
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
            <p>AddService</p>
            <p>{loggedInUser.displayName}</p>
            </nav>
            <div 
                className=' body-container-style d-flex justify-content-center align-items-cente'
            >
                <form action="" className='addService-style'  onSubmit={handleSubmit}>
                    <label className='ml-3 mt-3'>Service Title</label>
                    <br/>
                    <input 
                    type="text" 
                    name='title' 
                    placeholder="Enter Title"
                    onBlur={handleBlur}  
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
                               Upload Image
                            <input 
                            type="file" 
                            onChange={uploadImage}
                            />                    
                            </label>
                        )
                    }
                    <br/>

                    <label  className='ml-3 mt-3'>Description</label>
                    <br/>
                    <input 
                    type="text"  
                    onBlur={handleBlur} 
                    name='description'
                    placeholder="Description"
                    style={{height:'100px'}}
                    />
                    <br />
                    <br/>
                    <button className=" btn bg-success text-white mt-3 ml-3">Send</button>
                </form>
        </div>
    </div>
 </div>
    );
};

export default AddService;