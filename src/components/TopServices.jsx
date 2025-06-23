import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AUthContext';
import Loading from './Loading';
import axios from 'axios';
import ServiceCard from './ServiceCard';

const TopServices = () => {
    const {loading}=use(AuthContext)
    const [data,setData]=useState([])
    const[seeLess,setSeeLess]=useState(true)
    useEffect(()=>{
        axios('https://assignment-11-server-fawn-seven.vercel.app/services?limit=6')
        .then(res=>{
            setData(res.data)
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    },[])
    if(loading){
        return <Loading></Loading>
    }
    const handleSeeAll=()=>{
     
            axios('https://assignment-11-server-fawn-seven.vercel.app/services')
        .then(res=>{
            setData(res.data)
            setSeeLess(!seeLess)
        })
        .catch(error=>{
            console.log(error);
            
        })
        
    }
    const handleSeeLess=()=>{
        axios('https://assignment-11-server-fawn-seven.vercel.app/services?limit=6')
        .then(res=>{
            setData(res.data)
            setSeeLess(!seeLess)
        setTimeout(() => {
        window.scrollBy({ top: -550, behavior: 'smooth' });
      }, 100); 
    })
        .catch(error=>{
            console.log(error);
            
        })
    }
    
    return (
        <div className='my-20'>
            <h1 className='text-center mb-20 font-bold text-3xl md:text-5xl'>Top Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {
                data.map((service,index)=><ServiceCard key={index} service={service}></ServiceCard>)
            }
            </div>
           <div className='flex justify-center my-10'>
             {
                seeLess?
                <button onClick={handleSeeAll} className='btn btn-error px-8 font-bold text-white'>See All</button>
            :<button onClick={handleSeeLess} className='btn btn-error px-8 font-bold text-white'>See Less</button> 
            }
           </div>
        </div>
    );
};

export default TopServices;