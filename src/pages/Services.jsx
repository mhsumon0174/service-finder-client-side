import React, { use } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router';
import ServiceCard from '../components/ServiceCard';
import { AuthContext } from '../provider/AUthContext';
import Loading from '../components/Loading';

const Services = () => {
    const data=useLoaderData()
    
    const {loading}=use(AuthContext)
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
{
    data.map((service,index)=><ServiceCard service={service} key={index}></ServiceCard>)
}
      </div>
      </div>
        </div>
    );
};

export default Services;