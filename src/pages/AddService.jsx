import React, { use } from "react";
import { AuthContext } from "../provider/AUthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";

const AddService = () => {
  const navigate=useNavigate()
  const { user } = use(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.addDate = new Date().toLocaleString();

    axios
      .post("http://localhost:3000/addservices", data,{
        withCredentials:true
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Congratulations",
          text: "Your Data Has Been Successfully Stored And Posted",
        draggable: true,
            timer: 1400,
        });
        e.target.reset();
        navigate('/services')
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-xl my-10">
      <Helmet>
        <title>Add Service || ServFinder</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Service</h2>
      <form onSubmit={handleForm} className="space-y-6">
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-1">Image Link</label>
    <input
      name="image"
      type="text"
      placeholder="Paste the service image URL here"
      className="input input-bordered w-full"
    />
  </div>
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-1">Service Name</label>
    <input
      name="title"
      type="text"
      placeholder="Enter the service title"
      className="input input-bordered w-full"
      required
    />
  </div>
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-1">Organization</label>
    <input
      name="company"
      type="text"
      placeholder="Company or provider name"
      className="input input-bordered w-full"
      required
    />
  </div>
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-1">Official Website</label>
    <input
      name="website"
      type="text"
      placeholder="https://example.com"
      className="input input-bordered w-full"
    />
  </div>
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-1">Detailed Info</label>
    <textarea
      name="description"
      placeholder="Write a few lines about the service"
      className="textarea textarea-bordered w-full"
      required
    ></textarea>
  </div>
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-1">Service Category</label>
    <input
      name="category"
      type="text"
      placeholder="E.g. Health, Education, Tech"
      className="input input-bordered w-full"
      required
    />
  </div>
  <div>
    <label className="block text-gray-700 text-sm font-semibold mb-1">Pricing</label>
    <input
      name="price"
      type="number"
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
    Submit Your Service
  </button>
</form>


    </div>
  );
};

export default AddService;
