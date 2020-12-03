import React, {useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListAlt,
         faHdd,faPlus,faUserPlus }from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';



const SideBar = () => {

    const [loggedInUser,setLoggedInUser,isAdmin,setIsAdmin] = useContext(UserContext);

    const location = useLocation();
   

    useEffect(() => {
        fetch('https://limitless-headland-03212.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            });
    }, [])
    

    return (     
        <div className="sidebar d-flex flex-column justify-content-between py-2 px-4">
        <ul className="list-unstyled">
            <li>
               <Link to='/'>
                    <img src={logo} alt=""  width="150" height='47'/>
               </Link>
            </li>

            {isAdmin?       
                <div>
                    <li className='mt-5'>
                        <Link to="/admin/UserDetails"
                            className={location.pathname === "/admin/UserDetails" ? "text-dark pl-2 active" : "text-muted pl-2"}
                        >
                            <FontAwesomeIcon icon={faHdd} /> <span>User Order Details</span>
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to="/admin/addService"
                                className={location.pathname === "/admin/addService" ? "text-dark pl-2 active" : "text-muted pl-2"}
                        >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li className='mt-2'>
                        <Link to="/admin/makeAdmin"
                                className={location.pathname === "/admin/makeAdmin" ? "text-dark pl-2 " : "text-muted pl-2"}
                        >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>
                :
                <div>
                    <li className='mt-5'>
                        <Link to="/customer/order"
                            className={location.pathname === "/customer/order" ? "text-dark pl-2 " : "text-muted pl-2"}
                        >
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                        </Link>
                    </li>
                    <li  className='mt-2'>
                    <Link to="/customer/service"
                        className={location.pathname === "/customer/service" ? "text-dark pl-2 active" : "text-muted pl-2"}
                    >
                        <FontAwesomeIcon icon={faHdd} /> <span>Service</span>
                    </Link>
                    </li>
                    <li  className='mt-2'>
                        <Link to="/customer/review"
                            className={location.pathname === "/customer/review" ? "text-dark pl-2 active" : "text-muted pl-2"}
                        >
                            <FontAwesomeIcon icon={faListAlt} /> <span>Review</span>
                        </Link>
                    </li>
                </div>
            }
        </ul>
    </div>
    );
};

export default SideBar;