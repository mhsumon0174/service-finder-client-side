import React from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

const ServiceCard = ({ service }) => {
  const handleDetails=()=>{
    
  }
  const { _id, image, title, description, category, price } = service;
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <motion.div
  animate={{
          
          rotate:[-2,2,-2] 
        }}
        transition={{
          duration: 4,          
          repeat: Infinity,     
          repeatType: "loop",
        
        }}
  
  className="bg-white rounded-xl shadow-md hover:shadow-xl    flex flex-col"
>
        <img src={image} alt={title} className="w-full aspect-video rounded-2xl" />
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
            <p className="text-gray-600 mb-4">
              {description.length > 100
                ? description.slice(0, 100) + "..."
                : description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-lg font-semibold text-green-600">BDT {price}</span>
            <Link to={`/services/${_id}`}>
              <button onClick={()=>{handleDetails(),window.scrollTo(0,0)}} className="btn btn-error btn-sm text-white font-bold hover:scale-105 transition-transform">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full aspect-video" />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
          <p className="text-sm text-gray-500 mb-2">{category}</p>
          <p className="text-gray-600 mb-4">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-semibold text-green-600">${price}</span>
          <Link to={`/services/${_id}`}>
            <button className="btn btn-success btn-sm text-white font-semibold hover:scale-105 transition-transform">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
