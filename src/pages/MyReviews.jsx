import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../provider/AUthContext';
import ReviewCard from '../components/ReviewCard';

const MyReviews = () => {
    const {user,loading}=use(AuthContext)
    const [data,setData]=useState([])
    const fetchReviews=()=>{
axios(`https://assignment-11-server-fawn-seven.vercel.app/myreviews?email=${user?.email}`,{
  withCredentials:true
})
      .then((res) => {
        setData(res.data)
        
      })
      .catch((error) => {
        console.log(error);
      });
    }
      useEffect(() => {
    if(user?.email){
      fetchReviews();
    }
  }, [user?.email]);
  
  
    return (
        <div>
            <Helmet>
        <title>My Reviews || ServFinder</title>
      </Helmet>
            <div className='my-30'>
                <h1 className='font-bold text-2xl md:text-4xl text-center mb-10 text-amber-400'>Summary Of My Reviews</h1>
                {
                    data.map((review,index)=>
                        <ReviewCard  fetchReviews={fetchReviews}   key={index} index={index} review={review}></ReviewCard>

                    )
                }
            </div>
        </div>
    );
};

export default MyReviews;