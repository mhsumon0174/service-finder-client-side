import axios from "axios";
import React, {  useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AUthContext";
import MyServicesCard from "../components/MyServicesCard";
import Swal from "sweetalert2";

const MyServices = () => {
   const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [editData,setEditData]=useState({})
  const handleForm = (e) => {
    e.preventDefault();
    document.getElementById("my_modal").close();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());
 
    fetch(`http://localhost:3000/services/${editData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        if (data.modifiedCount) {
          Swal.fire({
            title: "Data Updated Successfully!",
            icon: "success",
            draggable: true,
            timer: 1400,
          });

        }
      });
      setEditData(null)
    }
const handleModalClose=()=>{
document.getElementById("my_modal").close();
 setEditData(null)
}
  useEffect(() => {
    axios(`http://localhost:3000/services?email=${user?.email}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email,editData]);

  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <Helmet>
        <title>My Services || ServFinder</title>
      </Helmet>

      <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center text-gray-800">
        My Added Services
      </h2>

      <div className=" bg-white rounded-xl shadow-md">
        <table className="w-full text-left border">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
            <tr>
              <th className="py-4 px-4 border  text-center">No</th>
              <th className="py-4 px-4 text-center">Title</th>
              <th className="py-4 px-4 text-center">Category</th>
              <th className="py-4 px-4 text-center">Price</th>
              <th className="py-4 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((service, index) => (
              <MyServicesCard
                key={service._id}
                setEditData={setEditData}
                service={service}
                index={index + 1}
                data={data}
                setData={setData}
              />
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
        {editData&& (
          <div className="modal-box">
          <p className="text-center font-bold text-lg md:text-2xl text-gray-700 underline my-2 mb-5">
            Update Your Service Data
          </p>
          <form onSubmit={handleForm} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Image Link
              </label>
              <input
                name="image"
                type="text"
                defaultValue={editData?.image || ''}
                placeholder="Paste the service image URL here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Service Name
              </label>
              <input
                name="title"
                type="text"
                defaultValue={editData?.title || ''}
                placeholder="Enter the service title"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Organization
              </label>
              <input
                name="company"
                type="text"
                defaultValue={editData?.company || ''}
                placeholder="Company or provider name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Official Website
              </label>
              <input
                name="website"
                type="text"
                defaultValue={editData?.website || ''}
                placeholder="https://example.com"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Detailed Info
              </label>
              <textarea
                name="description"
                defaultValue={editData?.description || ''}
                placeholder="Write a few lines about the service"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Service Category
              </label>
              <input
                name="category"
                type="text"
                defaultValue={editData?.category || ''}
                placeholder="E.g. Health, Education, Tech"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Pricing
              </label>
              <input
                name="price"
                type="number"
                defaultValue={editData?.price || ''}
                placeholder="How much does it cost?"
                className="input input-bordered w-full"
                required
              />
            </div>
<div>
    <label className="block text-gray-700 text-sm font-semibold mb-1">Contact Email</label>
    <input
      name="email"
      value={user?.email}
      type="email"
      readOnly
      placeholder="Logged-in user email"
      className="input input-bordered w-full"
    />
  </div>
            <button type="submit" className="btn btn-accent w-full">
              Update
            </button>
          </form>
          <div  className=" mt-3">
            <button onClick={handleModalClose} className="btn btn-error w-full">Close</button>
          </div>
        </div>
        )}
      </dialog>
    </div>
  );
};

export default MyServices;
