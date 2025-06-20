import React, { useState } from "react";
import { Link } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
const MyServicesCard = ({ service, index,setEditData }) => {
  
  const handleEdit=(_id)=>{
    
   
   axios(`http://localhost:3000/services/${_id}`)
   .then(res=>{
   
    setEditData(res.data)
   }).catch(error=>{console.log(error);
   })
document.getElementById('my_modal').showModal()
  }
  
  
  
  return (
    <>
    <tr className="border  hover:bg-gray-50 transition duration-200">
      <td className="py-4 border text-center px-4 text-sm text-gray-700 font-medium">{index}</td>
      <td className="py-4 text-center px-4 text-sm text-gray-800">{service.title}</td>
      <td className="py-4 text-center px-4 text-sm text-blue-600 font-semibold">{service.category}</td>
      <td className="py-4 text-center px-4 text-sm text-green-600 font-bold">BDT {service.price}</td>
      
        <td className="py-4 px-4 text-center">
          <div className="flex flex-col gap-2 my-2">
            <Link >
          <button onClick={()=>{
            handleEdit(service._id)
          }}  className="btn btn-sm btn-outline btn-info ">
            <FaEdit/>
          </button>
        </Link>
        <Link>
          <button  className="btn btn-sm btn-outline btn-info ">
           <MdDeleteForever />
          </button>
        </Link>
          </div>

        </td>
      
    </tr>
    


    </>
  );
};

export default MyServicesCard;
