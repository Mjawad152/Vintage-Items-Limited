import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signup } from '../Services/api';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
// import { useGoogleLogin } from '@react-oauth/google';
export default function Signp() {

    const [formdata,setformdata] = useState({
        name:"",
        email : "",
        password : "",
});

    const handleChange = (e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value});
        console.log(formdata);
    }
   


    const handleClick =(event) =>{
        event.preventDefault();
        if(!formdata.name || !formdata.email || !formdata.password){
            alert("fill out all fields")
            return;
        }
        signup(formdata);
    };



    
  return (
    <>
  
    <div className='Sign up template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
       
        <div className='form-container p-5 rounded bg-white' >
        <form action="">
            <h3 className='text-center'>sign up</h3>
            <div className='mb-2'>
                <label htmlFor="number">Name</label>
                <input type="text" name="name" id=""  className='form-control' onChange={handleChange} value={formdata.name}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id=""  className='form-control' onChange={handleChange} value={formdata.email}/>
            </div>
           
            <div className='mb-2'>
                <label htmlFor="Password">Password</label>
                <input type="password" name="password" id="" className='form-control' onChange={handleChange} value={formdata.password} />
            </div>
           
            <div className='d-grid'>
                <button className='btn btn-primary' type='submit' onClick={handleClick}>Sign-in</button>
            </div>
            
            <p className='text-center mt-2'> Forget Password?
            <Link to="/login" >Login</Link>
            <div>
            {/* <button className='btn btn-light mt-3 border border-black'  onClick={()=>login() }> <span><FcGoogle  style={{fontSize:"2em"}}/></span> Sign-Up with Google</button> */}
            <GoogleLogin 
            
            onSuccess={(credentialResponse) =>{
                const decodedToken = jwtDecode(credentialResponse.credential);
               
                console.log('Decoded Token:', decodedToken);
            }}
    onError={()=>{
        console.log("login failed")
    }}/>
            </div>
            </p>
        </form>
        
        </div>
    </div>
    </>
  )
}
