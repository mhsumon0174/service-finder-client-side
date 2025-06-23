import React, { use, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { AuthContext } from "../provider/AUthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";


const Review = ({ _id, data, setData,title }) => {
  const { user } = use(AuthContext);
  const [rate, setRate] = useState(0);
  const currentDate = new Date().toLocaleDateString();
  const navigate=useNavigate()
  
  const handleForm = (e) => {

    e.preventDefault();
    if(!user?.email){
return navigate('/login')
    }
    const review = e.target.review.value;
    

    const reviewDetails = {
      review,
      rate,
      name: user?.displayName,
      email: user?.email,
      serviceId: _id,
      photo: user?.photoURL,
      date: currentDate,
      serviceTitle:title
    };
    axios
      .post("https://assignment-11-server-fawn-seven.vercel.app/addReviews", reviewDetails,{
        withCredentials:true
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Congratulations",
          text: "Your Data Has Been Successfully Stored And Posted",
        });
        setData([...data, reviewDetails]);
        e.target.reset();
        setRate(0);
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
    <form onSubmit={handleForm}>
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6 mt-10">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add Your Review
        </h2>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700">
            Write Review
          </label>
          <textarea
            name="review"
            placeholder="Write your thoughts here..."
            className="textarea textarea-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Rating
          </label>
          <Rating
            emptySymbol={<FaRegStar className="text-yellow-400 text-2xl" />}
            fullSymbol={<FaStar className="text-yellow-500 text-2xl" />}
            initialRating={rate}
            onChange={(value) => setRate(value)}
          />
        </div>

        <div className="text-sm text-gray-500">Review Date: {currentDate}</div>

        <button className="btn btn-primary w-full">Add Review</button>
      </div>
    </form>
  );
};

export default Review;
