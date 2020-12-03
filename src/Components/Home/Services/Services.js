import React from 'react';
import './Services.css';

const Services = ({service}) => {
    const {image,description,title}=service;

    return (
        
        <div className="col-md-4 my-5">
            <div className="service-desgin p-3 h-100 ">
                <div className="m-3 text-center">
                    <img className="rounded-circle" src={image} alt="" width="74px"  height="74px" />
                </div>
                <div className="m-3 text-center">
                    <h6 className="my-2">{title}</h6>
                    <p className="text-secondary p-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Services;