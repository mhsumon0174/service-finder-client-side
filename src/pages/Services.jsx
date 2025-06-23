import React, { use, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router';
import ServiceCard from '../components/ServiceCard';
import { AuthContext } from '../provider/AUthContext';
import Loading from '../components/Loading';
import axios from 'axios';

const Services = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [query,setQuery]=useState([])
    const data=useLoaderData()
    const [services, setServices] = useState(data);
    
    const {loading}=use(AuthContext)
    
    const fetchServices=()=>{
axios.get('http://localhost:3000/services',{params:query},{
  
})
.then(res=>{
    setServices(res.data)
    
})
.catch(error=>{
    console.log(error);
    
})

    }
   
    const handleForm=(e)=>{
        e.preventDefault()
       const queryData={
        search:search,
        category:category
       }
       setQuery(queryData);
       
    }
    useEffect(()=>{
    fetchServices()
   },[query])
   if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='my-20'>
            <Helmet>
        <title>Services || ServFinder</title>
      </Helmet>
      <div>
        <h1 className='text-center mb-20 font-bold text-3xl md:text-5xl'>All Services</h1>
        <form onSubmit={handleForm}>
            <div className=" flex flex-col md:flex-row justify-around items-center gap-4 mb-6">
 
  <input
    type="text"
    placeholder="Search services..."
    className="input input-bordered w-full md:w-1/2"
    value={search}
 onChange={e => setSearch(e.target.value)}
  />

  
  <select
    className="select select-bordered w-full md:w-1/4"
 value={category}
        onChange={e => setCategory(e.target.value)}
  >
    <option value="">All Categories</option>
    <option value="Tech">Tech</option>
    <option value="Education">Education</option>
    <option value="Delivery">Delivery</option>
    <option value="Health">Health</option>
  </select>

 
  <button
    className="btn btn-primary w-full md:w-auto"
    
  >
    Search
  </button>
</div>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
{
    services.map((service,index)=><ServiceCard service={service} key={index}></ServiceCard>)
}
      </div>
      </div>
        </div>
    );
};

export default Services;