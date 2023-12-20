import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
        <div className='form-container p-5 rounded bg-white' >
        <form action="">
            <h3 className='text-center'>Log In</h3>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id=""  className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="Password">Password</label>
                <input type="text" name="" id="" className='form-control' />
            </div>
            <div className='mb-2'>
                <input type="CheckBox" className='custom-control custom-checkbox ' />
                <label htmlFor="" className='custom-input-label ms-2'>
                    Remember Me
                </label>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>Sign-in</button>
            </div>
            <p className='text-center mt-2'> Forget Password?
            <Link to="/signuup">Signup</Link>
            </p>
        </form>
        
        </div>
    </div>
  )
}
