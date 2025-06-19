import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AUthContext';
import Lottie from 'lottie-react';
import registerLottie from '../assets/lotties/register.json'
const Register = () => {
  const navigate=useNavigate()
  const {user,setUser,createUser,googleSignUp,updateUser}=use(AuthContext)
    const [showPassword,setShowPassword]=useState(false)
     const handleShowPassword=()=>{
setShowPassword(!showPassword)
    }
    const handleSignUp=(e)=>{
e.preventDefault()
const form=e.target;

const name=form.name.value;
const photo=form.photoURL.value;
const email=form.email.value;
const password=form.password.value;
console.log(name,email,photo,password)
const upperCase=/[A-Z]/.test(password);
const lowerCase=/[a-z]/.test(password);
const length=password.length>=6;
if(!upperCase){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least one UPPERCASE letter.",
      });
    }
    if(!lowerCase){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least one LOWERCASE letter.",
      });
    }
    if(!length){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have at least six characters.",
      });
    }
    
else{
  createUser(email,password)
.then((data)=>{
  const user=data.user;
  if(user){
    updateUser({
      displayName:name,
      photoURL:photo
    })
    .then(data=>{
setUser({...user,displayName:name,
      photoURL:photo})
    })
  }
  updateUser()
  
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
        <div >
          
            <div className="my-10 flex-col-reverse md:flex-row
             flex justify-center gap-5  items-center">
        
        <div className="card border  w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp}  className="fieldset">
              <h1 className="text-center text-3xl font-bold">Sign Up</h1>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                required
                className="input"
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input"
                placeholder="Photo URL"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <div className='relative'>

                <input
                type={showPassword? 'text':'password'}
                name="password"
                required
                className="input"
                placeholder="Password"
                
              />
              <button onClick={handleShowPassword} className='btn btn-ghost btn-xs absolute top-2 right-5'>{showPassword? <FaEyeSlash/>:<FaEye/>} </button>
              </div>

              <button className="btn btn-outline btn-primary  my-4">SignUp</button>
              <button onClick={handleGoogleSignUp}
                className="btn btn-outline btn-accent"
                
              >
                <FcGoogle></FcGoogle> Sign Up With Google
              </button>
            </form>
            <p>
              Already Have an Account?{" "}
              <Link className="text-blue-900 underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
        <Lottie style={{width:'300px'}}  animationData={registerLottie} loop={true}></Lottie>
      </div>
      
        </div>
    );
};

export default Register;