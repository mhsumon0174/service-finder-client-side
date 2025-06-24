import React, { useState, useContext } from "react";
import { FaEdit, FaStar } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../provider/AUthContext";
import axios from "axios";
import Swal from "sweetalert2";

const ReviewCard = ({ review, index, fetchReviews }) => {
  const { user } = useContext(AuthContext);
  const [editData, setEditData] = useState(null);

  const stars = [];
  for (let i = 0; i < Number(review.rate || 0); i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />);
  }

  const handleEdit = (_id) => {
    console.log(_id);

    axios(`https://assignment-11-server-fawn-seven.vercel.app/editreviews/${_id}`, {})
      .then((res) => {
        setEditData(res.data[0]);

        document.getElementById(`my_modal_${index}`).showModal();
      })
      .catch((error) => console.log(error));
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
        fetch(`https://assignment-11-server-fawn-seven.vercel.app/reviews/${_id}`,  {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user?.email }),
          credentials: "include",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Post has been deleted.",
                icon: "success",
                timer: 1400,
              });
              fetchReviews();
            }
          });
      }
    });
  };

  const handleForm = (e, _id) => {
    e.preventDefault();

    const review = e.target.review.value;
    const rate = e.target.rate.value;
    const updatedDetails = {
      review,
      rate,
      email: user?.email,
    };
    axios
      .patch(`https://assignment-11-server-fawn-seven.vercel.app/editreviews/${_id}`, updatedDetails, {
        withCredentials: true,
      })
      .then((res) => {
        fetchReviews();
        Swal.fire({
          title: "Updated!",
          text: "Your Review Has Been Updated.",
          icon: "success",
          timer: 1400,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    document.getElementById(`my_modal_${index}`).close();
  };

  return (
    <div className="my-5">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-300 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          {review.serviceTitle}
        </h2>

        <p className="text-center text-fuchsia-800">{review.review}</p>

        <div className="flex justify-center">{stars}</div>

        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={() => handleEdit(review._id)}
            className="btn w-full btn-outline btn-info"
          >
            <FaEdit /> Edit & Update
          </button>
          <button
            onClick={() => handleDelete(review._id)}
            className="btn w-full btn-outline btn-error"
          >
            <MdDeleteForever /> Delete
          </button>
        </div>
      </div>

      <dialog
        id={`my_modal_${index}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-4">
            Update Your Review
          </h3>
          <form
            onSubmit={(e) => {
              handleForm(e, editData._id);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-white">
                Service Title
              </label>
              <input
                name="serviceTitle"
                type="text"
                defaultValue={editData?.serviceTitle}
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-white">
                Review
              </label>
              <input
                name="review"
                type="text"
                defaultValue={editData?.review}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-white">
                Rating
              </label>
              <input
                name="rate"
                type="number"
                max="5"
                min="1"
                defaultValue={editData?.rate}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-white">Email</label>
              <input
                name="email"
                type="email"
                value={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Submit Update
            </button>
          </form>
          <div className="mt-3">
            <button
              onClick={() =>
                document.getElementById(`my_modal_${index}`).close()
              }
              className="btn btn-error w-full"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ReviewCard;
