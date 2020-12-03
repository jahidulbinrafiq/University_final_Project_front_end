import React from 'react';
import {Carousel} from '3d-react-carousal';
import './OurProject.css'
const OurProject = () => {
    let slides = [
        <img  src="https://i.ibb.co/3f7bQPM/carousel-1.png" alt="1" />,
        <img  src="https://i.ibb.co/jTwFq2v/carousel-2.png" alt="2" />  ,
        <img  src="https://i.ibb.co/LQnYmLQ/carousel-3.png" alt="3" />  ,
        <img  src="https://i.ibb.co/kBM0SCp/carousel-4.png" alt="4" />  ,
        <img src="https://i.ibb.co/bK8VLDF/carousel-5.png" alt="5" />   ];
    return (
        <div className="ourProject text-center my-5">
            <h2 className="font-weight-bold text-center py-5 text-white">Here are some of <span style={{ color: '#7AB259' }}>our work</span></h2>
            <Carousel slides={slides} autoplay={true} interval={5000}/>
        </div>
    );
};

export default OurProject;