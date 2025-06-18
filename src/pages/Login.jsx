import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AUthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate=useNavigate()
    const {signIn,googleSignUp}=use(AuthContext)
    const [showPassword,setShowPassword]=useState(false)
    const handleShowPassword=(e)=>{
        e.preventDefault()
setShowPassword(!showPassword)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        signIn(email,password)
        .then(result=>{
          
          const user=result.user;
          if(user?.email){
            navigate('/')
          Swal.fire({
                    icon: 'success',
                    title: 'You have successfully logged in.',
                    text: 'Login Successful',
                  });
          }
                  

                    
                  
        })
        .catch(error => {
                
               Swal.fire({
                         icon: 'error',
                         title: 'Error',
                         text: error.message,
                       });
              });
    }
    const handleGoogleSignUp=(e)=>{
          e.preventDefault()
          googleSignUp()
          .then((data)=>{
       navigate('/')
      
    return Swal.fire({
            icon: "success",
            title: "Congratulations",
            text: "You have successfully registered and logged in",
          });
    
    }).catch((error)=>{
      return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
      
    })
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
          
                    <button onClick={handleGoogleSignUp} className="btn btn-neutral " ><FcGoogle></FcGoogle> Sign In With Google</button>

        </form>
        <p>New to this site? Click here to <Link className='text-blue-900 underline' to='/signup'>SignUp</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Login;