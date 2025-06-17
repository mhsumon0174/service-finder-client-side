import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    const [showPassword,setShowPassword]=useState(false)
    const handleShowPassword=()=>{
setShowPassword(!showPassword)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        const formData=new FormData(e.target)
        const data=Object.fromEntries(formData.entries());
        console.log(data);
        
    }
    return (
        <div className='my-20 h-full  flex justify-center items-center'>
          
            <div className="card border   w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin}  className="fieldset">
            <h1 className='text-center text-3xl font-bold'>Log In Now</h1>
          <label className="label">Email</label>
          <input type="email"  name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
         <div className='relative'>
         <input 
         type={showPassword? 'text':'password'}
          name='password' className="input" placeholder="Password" />
         <button onClick={handleShowPassword} className='btn btn-ghost btn-xs absolute top-2 right-5'>{showPassword? <FaEyeSlash/>:<FaEye/>} </button>
         </div>
          <div><a  className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          
                    <button className="btn btn-neutral " ><FcGoogle></FcGoogle> Sign In With Google</button>

        </form>
        <p>New to this site? Click here to <Link className='text-blue-900 underline' to='/signup'>SignUp</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Login;