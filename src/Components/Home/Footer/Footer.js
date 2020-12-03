import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='row'>
            <div className="col-md-4 offset-2 pt-5 ">
                <h2 className='footer-text'>Let us handle your project, professionally.</h2>
                <p className='pt-2'>With well written codes, we build amazing apps for all  platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-5 offset-1">
              <input type="text"  placeholder="Your email address"/>
              <input type="text"  placeholder="Your Name /company's name"/>
              <textarea></textarea>
              <br/>
              <button className='btn-style text-center'>Submit</button>
            </div>          
        </div>
    );
};

export default Footer;