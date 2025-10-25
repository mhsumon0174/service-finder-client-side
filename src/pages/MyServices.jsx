import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AUthContext";
import MyServicesCard from "../components/MyServicesCard";
import ReviewCard from "../components/ReviewCard";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const MyServices = () => {
  const { user, loading } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("services");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchServices = () => {
    axios(
      `https://assignment-11-server-fawn-seven.vercel.app/myservices?email=${user?.email}`,
      { withCredentials: true }
    )
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  };

  const fetchReviews = () => {
    axios(
      `https://assignment-11-server-fawn-seven.vercel.app/myreviews?email=${user?.email}`,
      { withCredentials: true }
    )
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  };

  const handleForm = (e) => {
    e.preventDefault();
    document.getElementById("my_modal").close();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(
      `https://assignment-11-server-fawn-seven.vercel.app/services/${editData._id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedData),
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Data Updated Successfully!",
            icon: "success",
            timer: 1400,
          });
          fetchServices();
        }
      });
    setEditData(null);
  };

  const handleModalClose = () => {
    document.getElementById("my_modal").close();
    setEditData(null);
  };

  useEffect(() => {
    if (user?.email) {
      fetchServices();
      fetchReviews();
    }
  }, [user?.email]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Helmet>
        <title>Dashboard | My Services</title>
      </Helmet>

      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md p-5 border-r">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <ul className="space-y-3 text-gray-700">
          <li
            onClick={() => setActiveTab("services")}
            className={`cursor-pointer font-semibold ${
              activeTab === "services"
                ? "text-accent "
                : "hover:text-accent"
            }`}
          >
            My Services
          </li>
          <li
            onClick={() => setActiveTab("reviews")}
            className={`cursor-pointer font-semibold ${
              activeTab === "reviews"
                ? "text-accent "
                : "hover:text-accent"
            }`}
          >
            My Reviews
          </li>
          <li
            onClick={() => setActiveTab("profile")}
            className={`cursor-pointer font-semibold ${
              activeTab === "profile"
                ? "text-accent "
                : "hover:text-accent"
            }`}
          >
            Profile
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-x-auto">
        {/* --- My Services --- */}
        {activeTab === "services" && (
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              My Added Services
            </h2>
            <div className="bg-white rounded-lg shadow overflow-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                  <tr>
                    <th className="py-3 px-4 text-center">No</th>
                    <th className="py-3 px-4 text-center">Title</th>
                    <th className="py-3 px-4 text-center">Category</th>
                    <th className="py-3 px-4 text-center">Price</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.length > 0 ? (
                    services.map((service, index) => (
                      <MyServicesCard
                        key={service._id}
                        service={service}
                        index={index + 1}
                        setEditData={setEditData}
                        fetchReviews={fetchServices}
                      />
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center py-6 text-gray-500 font-medium"
                      >
                        No services added yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* --- My Reviews --- */}
        {activeTab === "reviews" && (
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              My Reviews
            </h2>
            {reviews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                  <ReviewCard
                    key={index}
                    index={index + 1}
                    review={review}
                    fetchReviews={fetchReviews}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 font-medium">
                You haven’t added any reviews yet.
              </p>
            )}
          </section>
        )}

        {/* --- Profile --- */}
        {activeTab === "profile" && (
          <section className="flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                My Profile
              </h2>
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://i.ibb.co/MkLCp5dc/user.png"
                }
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-accent"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {user?.displayName || "User Name Not Set"}
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Email:</strong> {user?.email}
              </p>
              
              <button className="btn btn-accent w-full">
                Edit Profile (Coming Soon)
              </button>
            </div>
          </section>
        )}

        {/* --- Edit Service Modal --- */}
        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
          {editData && (
            <div className="modal-box">
              <p className="text-center font-bold text-lg md:text-2xl underline mb-4">
                Update Your Service Data
              </p>
              <form onSubmit={handleForm} className="space-y-5">
                <input
                  name="image"
                  type="text"
                  defaultValue={editData?.image}
                  placeholder="Service image URL"
                  className="input input-bordered w-full"
                />
                <input
                  name="title"
                  type="text"
                  defaultValue={editData?.title}
                  placeholder="Service title"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  name="company"
                  type="text"
                  defaultValue={editData?.company}
                  placeholder="Company name"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  name="website"
                  type="text"
                  defaultValue={editData?.website}
                  placeholder="Website link"
                  className="input input-bordered w-full"
                />
                <textarea
                  name="description"
                  defaultValue={editData?.description}
                  placeholder="Service description"
                  className="textarea textarea-bordered w-full"
                  required
                />
                <input
                  name="category"
                  type="text"
                  defaultValue={editData?.category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  name="price"
                  type="number"
                  defaultValue={editData?.price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  name="email"
                  value={user?.email}
                  readOnly
                  type="email"
                  className="input input-bordered w-full"
                />

                <button type="submit" className="btn btn-accent w-full">
                  Update
                </button>
              </form>
              <div className="mt-3">
                <button
                  onClick={handleModalClose}
                  className="btn btn-error w-full"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </dialog>
      </main>
    </div>
  );
};

export default MyServices;
