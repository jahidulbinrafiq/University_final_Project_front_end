import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import DisplayUserDetails from '../DisplayUserDetails/DisplayUserDetails';

const AllUserDetails = () => {

    const [loggedInUser] = useContext(UserContext);

    const [userDetails,setUserDetails] = useState([])

    useEffect(() =>{
        fetch('https://limitless-headland-03212.herokuapp.com/allOrder')
        .then(response=>response.json())
        .then(data=>setUserDetails(data))
    },[])
    // console.log(userDetails)
    return (
        <div>
            <div>
                <div className='row mt-2 cotainer-fluid'>
                        <div className="col-md-2">
                            <SideBar />
                        </div>
                        <div className='col-md-10'>
                            <nav className='navbar ml-3'>
                                <p>User Order Details</p>
                                <p>{loggedInUser.displayName}</p>
                            </nav>
                            <div className='row d-flex justify-content-center'>
                                <table className="table table-hover table-Secondary">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email ID</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Project Details</th>
                                            <th scope="col">Budget</th>
                                            <th scope="col">Project Sample Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        userDetails.length ? 
                                            userDetails.map
                                                ((info,index) => 
                                                    <DisplayUserDetails 
                                                    key={index} info={info} />
                                                )
                                            :  
                                            <div className="col-md-12 d-flex justify-content-center">
                                                <Button variant="primary" disabled>
                                                        <Spinner as="span" animation="grow" size="sm"
                                                            role="status" aria-hidden="true"
                                                        />
                                                            Loading......
                                                </Button>
                                            </div>
                                        } 
                                    </tbody>
                                </table>
                            </div>
                        </div>        
                </div>

            </div>
        </div>
    );
};

export default AllUserDetails;