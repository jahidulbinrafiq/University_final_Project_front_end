import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const MakeAdmin = () => {
    const [loggedInUser] = useContext(UserContext);
    
    const { handleSubmit, register, errors } = useForm();

    const emailInputStyle ={
        width:'350px',
        height:'40px',
        border:'0.666667px solid #C9C9C9',
        boxSizing: 'border-box',
        borderRadius: '3.33333px'
    }
    const emailLabelStyle ={
        width: '44px',
        height: '24px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#232323'
    }
    
    const onSubmit=data=>{
        fetch('https://limitless-headland-03212.herokuapp.com/addAdmin',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
        })

        .then(res=>{
            Swal.fire({
                title: 'Add New Admin ',
                text:'infrom your project manager',
                icon:'success'
              })
        })
        .catch(error =>{
            Swal.fire({
                title: 'Error ',
                text:'Kindly infrom the support team',
                icon:'error'
              })
        });
    }
    
    return (
        <div className='row mt-2 cotainer-fluid'>
            <div className="col-md-2">
                <SideBar />
            </div>
            <div className='col-md-10'>
                <nav className='navbar ml-3'>
                <p>Order</p>
                <p>{loggedInUser.displayName}</p>
                </nav>
                <div 
                    className=' body-container-style d-flex justify-content-center align-items-center'
                >
                    <form  className='addService-style'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label className='ml-3 mt-3' style={emailLabelStyle}>Email</label>
                        <br/>
                        <input 
                        type="email" 
                        placeholder="join@gmail.com" 
                        name='email' 
                        className="ml-3" style={emailInputStyle}
                        ref={register({ required: true })}
                        />
                        {errors.email && <small className="text-danger">This field is required</small>}
                        <button className=" btn bg-success text-white ml-4"
                                style={{height:'40px',width:'108px'}}
                        >
                         Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;