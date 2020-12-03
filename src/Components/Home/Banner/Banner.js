import React from 'react';
import bannerImage from '../../../images/logos/Frame.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="row">
           <div className="col-md-5 offset-md-1 mt-5">
                <h2 className='banner-header-style'>
                  Let’s Grow Your Brand To The Next Level
                </h2>
                <p className='paragraph-style-banner'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Purus commodo  ipsum  duis laoreet maecenas. Feugiat 
                </p>
                <button className='btn-banner'>Hire Us</button>
           </div>
            <div className="col-md-5">
               <img src={bannerImage} alt="" className='banner-image-style img-fluid'/>
            </div>
        </div>
    );
};

export default Banner;