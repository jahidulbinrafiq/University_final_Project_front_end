import React , { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import google from '../../images/logos/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                setLoggedInUser(result.user);
                history.replace(from);
            }).catch(error => {
               alert(error)
            });
    }

    return (
        <div className="login">
            <div className="loginPart">
              <Link to="/">
                  <img src={logo} alt="" />
               </Link>
                <div className="loginForm">
                    <div className="google">
                        <h4>Login With</h4>
                        <button onClick={googleSignIn}>
                            <img src={google} alt="" />Continue with Google
                        </button>
                        <p>Dont't have an account?
                            <Link to='/login'>create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;