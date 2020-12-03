import React, { createContext, useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SideBar from './Components/Shared/SideBar/SideBar';
import CustomerOrder from './Components/Customer/CustomerOrder/CustomerOrder';
import CutomerServiceList from './Components/Customer/CutomerServiceList/CutomerServiceList';
import CustomerReview from './Components/Customer/CustomerReview/CustomerReview';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AllUserDetails from './Components/Admin/AllUserDetails/AllUserDetails';


export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser,isAdmin,setIsAdmin]}>
      <Router>
        <Switch>
            <Route  exact path={["/home", "/"]} component={Home}/>
            <Route  path="/login" component={Login}/>
            <PrivateRoute path="/customer/order" >
              <CustomerOrder/>
            </PrivateRoute>
            <PrivateRoute path="/customer/service" >
              <CutomerServiceList/>
            </PrivateRoute>
            <PrivateRoute path="/customer/review">
              <CustomerReview/>
            </PrivateRoute>
            <PrivateRoute path="/admin/makeAdmin">
               <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/admin/addService">
              <AddService/>
            </PrivateRoute>
            <Route path="/admin/UserDetails">
              <AllUserDetails />
            </Route>
            <Route path="/customer/order" component={SideBar}/>
            <Route path="*" component={NoMatch}/>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
