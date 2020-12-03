import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <div className="ml-5 mt-3">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand ml-5" to="/">
                    <img src={`https://i.ibb.co/128TVnF/logo.png`} className="mr-3"
                        style={{width:'151px',height:' 47px'}}alt=""
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link mr-3" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  mr-3" to="#">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  mr-3 " to="#">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  mr-3" to="#">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  mr-3" to="/customer/order">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3" to="/admin/addService">Admin Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;