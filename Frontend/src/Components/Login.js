import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../Services/api'

export default function Login() {
    const[logdata,setLogdata]=useState({
        email:"",
        password:""
})
    const handleChange =(e)=>{
        setLogdata({...logdata,[e.target.name]:e.target.value})
    }
    const handleClick = async (event) => {
        event.preventDefault();
        try {
          await login(logdata);
          alert('Login successful'); 
        } catch (error) {
          console.error(error);
          alert('Login failed. Please check your credentials.');
        }
      };
    
  return (
    <div className='login template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
        <div className='form-container p-5 rounded bg-white' >
        <form action="">
            <h3 className='text-center'>Log In</h3>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id=""  className='form-control' onChange={handleChange}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" className='form-control' onChange={handleChange} />
            </div>
            {/* <div className='mb-2'>
                <input type="CheckBox" className='custom-control custom-checkbox ' />
                <label htmlFor="" className='custom-input-label ms-2'>
                    Remember Me
                </label>
            </div> */}
            <div className='d-grid'>
                <button className='btn btn-primary' onClick={handleClick}>Sign-in</button>
            </div>
            <p className='text-center mt-2'> Forget Password?
            <Link to="/signuup">Signup</Link>
            </p>
        </form>
        
        </div>
    </div>
  )
}
