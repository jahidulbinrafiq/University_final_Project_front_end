
import React, { useContext, useEffect, useState } from 'react';
import { Spinner,Button } from 'react-bootstrap';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import DisplayCustomerService from '../DisplayCustomerService/DisplayCustomerService';
import Swal from 'sweetalert2'
const CutomerServiceList = () => {

    const [loggedInUser] = useContext(UserContext);

    const [servicesInfo, setServicesInfo] = useState([]);
   
   
    useEffect(()=>{
        fetch('https://limitless-headland-03212.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setServicesInfo(data))
        .catch(error=>{
            Swal.fire({
                title: 'Error',
                text:'Our support team will fixed it soon',
                icon:'error'
              })
        })
    })

    return (
        <div>
            <div className='row mt-2 cotainer-fluid'>
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className='col-md-10'>
                        
                        <nav className='navbar ml-3'>
                            <p>Order</p>
                            <p>{loggedInUser.displayName}</p>
                        </nav>

                        <h1>Your Order List</h1>

                        <div className='row d-flex justify-content-center '>
                            
                            {
                            servicesInfo.length ? 
                                    servicesInfo.map((service,index) => 
                                            <DisplayCustomerService key={index} service={service} />
                                        )
                                    :   
                                        <div 
                                            className="col-md-12 d-flex justify-content-center"
                                        >
                                            <Button variant="primary" disabled>
                                                <Spinner as="span" animation="grow" size="sm"
                                                        role="status" aria-hidden="true"
                                                />
                                                Loading...
                                            </Button>
                                        </div>
                            }           
                        </div>
                    </div>        
            </div>
      </div>
    );
};

export default CutomerServiceList;