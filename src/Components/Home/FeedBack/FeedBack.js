import React from 'react';
import './FeedBack.css';
import logo from '../../../images/logos/download.jpg'

const FeedBack = ({feedback}) => {
     const{userImage}=feedback;
     const{name,position,description,companyName}=feedback.review
     
    return (
        <div className="col-md-6 col-lg-4 ">
            <div className="card mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-body ">
                    <div className="d-flex align-items-center mb-2">
                        <img className="rounded-circle mr-3" src={userImage|| logo} alt="" width="50px" height="50px" />
                        <h5 className="card-title font-weight-bold">{name} <br />   <small>{position},</small> 
                        <small> {companyName}</small>
                        </h5>
                        <img src="" alt="" />
                    </div>
                    <p className="card-text"><small>{description}</small> </p>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;