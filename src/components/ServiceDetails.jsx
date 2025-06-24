import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

import SHowReviews from "./SHowReviews";

const ServiceDetails = () => {
  const data = useLoaderData();
  const [count,setCount]=useState()
  
  const {
    _id,image,title,company,website,description,category,price,email,addDate} = data;


  return (
  <div className="my-20">
<h2 className=" text-center text-3xl font-bold text-gray-800">{title}</h2>
    <h2 className="text-center font-bold text-2xl md:text-4xl my-10">This Service Has a Total Of <span className="text-amber-500 text-5xl">{count?count:0}</span> Reviews Yet</h2>
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded-2xl shadow-lg mt-10">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
        />

        <div className="flex-1 space-y-3">
          <h2 className=" text-gray-800 dark:text-white font-bold">Details:</h2>
          <p className="text-gray-600 dark:text-white">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-sm">
            <p><span className="font-semibold">Category:</span> {category}</p>
            <p><span className="font-semibold">Company:</span> {company}</p>
            <p>
              <span className="font-semibold">Website:</span>{" "}
              <a href={`https://${website}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                {website}
              </a>
            </p>
            <p><span className="font-semibold">Email:</span> {email}</p>
            <p><span className="font-semibold">Price:</span> BDT {price}</p>
            <p><span className="font-semibold">Added:</span> {addDate}</p>
          <Link to='/services'><button className="btn btn-accent text-white">Back To All Services</button></Link>
          </div>
        </div>
      </div>
    </div>
    <SHowReviews _id={_id} title={title} setCount={setCount}></SHowReviews>
   
  </div>
  
);
};

export default ServiceDetails;
