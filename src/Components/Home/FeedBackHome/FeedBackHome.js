import React, { useEffect, useState } from 'react';
import FeedBack from '../FeedBack/FeedBack';
import Swal from 'sweetalert2'

const FeedBackHome = () => {
    const[userFeedback,setUserFeedback] =useState([])
    
    useEffect(()=>{

           fetch('https://limitless-headland-03212.herokuapp.com/feedbackUser')
           .then(response =>response.json())
           .then(data=>setUserFeedback(data))
           .catch(error =>{
                Swal.fire({
                    title:'Error',
                    text: 'Sorry We fixed it soon!! ',
                    icon:'error'
                })
           })
    },[])
   
    return (

        <div>
            <h1 className='text-center mt-5 mb-5'>
                Clients <span style={{ color:'#7AB259'}}>Feedback</span>
            </h1>
            <div className="row d-flex justify-content-center py-5 mt-5">
                {userFeedback.map((feedback, index) =>
                    <FeedBack feedback={feedback} key={index}/>)
                }
            </div>
        </div>
    );
};

export default FeedBackHome;