import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import CompanyNames from '../CompanyNames/CompanyNames';
import Header from '../Header/Header';
import Services from '../Services/Services';
import OurProject from '../OurProject/OurProject';
import FeedBackHome from '../FeedBackHome/FeedBackHome';
import Footer from '../Footer/Footer';


const Home = () => {
    
    const [servicesProvide,SetservicesProvide] =useState([])

    useEffect(() =>{
        fetch("https://limitless-headland-03212.herokuapp.com/services")
        .then(res=>res.json())
        .then(data=>SetservicesProvide(data))
        .catch(error=>console.log(error.message))
    },[])
 
    return (
        <div className='container-fluid'>
           <div className='background-clip-path'>
               <Header />
               <Banner />
           </div>
           <div style={{background: '#E5E5E5'}} className='mt-3'>
                
                <div>
                  <CompanyNames />
                </div>             
                <h3 className='services-heading-style text-center'>
                   CompanyProvide awesome
                   <span className='service-word'> services</span>
                </h3>
                <div className='row d-flex justify-content-center'>
                    {
                      servicesProvide.map(service =><Services key={service.id} service={service} />)
                    }
                </div>
                <div>
                   <OurProject/>
                </div>
                <div>
                    <FeedBackHome />
                </div>
           </div>
           <div style={{background:'#FBD062'}} className='pt-5'>
               <Footer />
           </div>
        </div>
    );
};

export default Home;