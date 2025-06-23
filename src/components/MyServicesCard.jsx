import React, { use, useState } from "react";
import { Link } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AUthContext";
const MyServicesCard = ({ service, index, setEditData,fetchReviews }) => {
  const {user}=use(AuthContext)
  const handleEdit = (_id) => {
    axios(`https://assignment-11-server-fawn-seven.vercel.app/services/${_id}`,{
      
    })
      .then((res) => {
        setEditData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    document.getElementById("my_modal").showModal();
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-fawn-seven.vercel.app/services/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({email:user?.email}),
          credentials:"include"
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Post has been deleted.",
                icon: "success",
                draggable: true,
                timer: 1400,
              });
              fetchReviews()
            }
          });
      }
    });
  };

  return (
    <>
      <tr className="  hover:bg-gray-50 transition duration-200">
        <td className="py-4  text-center px-4 text-sm text-gray-700 font-medium">
          {index}
        </td>
        <td className="py-4 text-center px-4 text-sm text-gray-800">
          {service.title}
        </td>
        <td className="py-4 text-center px-4 text-sm text-blue-600 font-semibold">
          {service.category}
        </td>
        <td className="py-4 text-center px-4 text-sm text-green-600 font-bold">
          BDT {service.price}
        </td>

        <td className="py-4 px-4 text-center">
          <div className="flex flex-col gap-2 my-2">
            <Link>
              <button
                onClick={() => {
                  handleEdit(service._id);
                }}
                className="btn btn-sm btn-outline btn-info "
              >
                <FaEdit />
              </button>
            </Link>
            <Link>
              <button
                onClick={() => {
                  handleDelete(service._id);
                }}
                className="btn btn-sm btn-outline btn-info "
              >
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
