import React, { useContext, useRef,useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2'

const CustomerReview = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [loading, setLoading] = useState(false)

    const [review,setReview] = useState({});

    const [userImage, setUserImage] = useState('');
 
    const currentform = useRef(null)

    const handleBlur = (e) => {

        const newReviewInfo = {...review }

        newReviewInfo[e.target.name] = e.target.value;

        setReview(newReviewInfo)
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
        setUserImage(file.secure_url)
        setLoading(false)
    }
    
    const handleSubmit=e=>{
        e.preventDefault()

        const data={userImage,review}

        fetch('https://limitless-headland-03212.herokuapp.com/addFeedback',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })

        .then(res=>{
      
            Swal.fire({
                title:'Thanks for your feedback',
                icon:'success'
              })
              currentform.current.reset()
        })
        .catch(error =>{
            Swal.fire({
                title:'Error',
                text: 'Sorry We fixed it soon!! ',
                icon:'error'
              })
      
        });
    }

    
    return (

        <div className='row mt-2 cotainer-fluid'>

            <div className="col-md-2">
                <SideBar />
            </div>

            <div className='col-md-10'>

                <nav className='navbar ml-3'>
                    <p>Customer Review</p>
                    <p>{loggedInUser.displayName}</p>
                </nav>

                <div className='body-container-style d-flex justify-content-center align-items-center'>

                    <form onSubmit={handleSubmit} ref = {currentform}>

                        <input type="text" name='name' onBlur={handleBlur} 
                            placeholder="Your name"  className="input-field" 
                        /><br />

                        <input type="text" name='companyName'   onBlur={handleBlur} 
                            placeholder="Company Name" 
                        />
                        <br />

                        <input type="text"  name='position'  onBlur={handleBlur} 
                            placeholder="Designation" />
                        <br />

                        <input type="text" name='description' onBlur={handleBlur} 
                            placeholder="Description/Reveiw"
                            style={{height:'100px'}}
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
                                    Upload Your Image
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

export default CustomerReview;