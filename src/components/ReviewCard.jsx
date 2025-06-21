import React, { useState, useContext } from 'react';
import { FaEdit, FaStar } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { AuthContext } from '../provider/AUthContext';
import axios from 'axios';

const ReviewCard = ({ review,index }) => {
  const { user } = useContext(AuthContext);
  const [editData, setEditData] = useState(null);

 
  const stars = [];
  for (let i = 0; i < Number(review.rate || 0); i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />);
  }

  
  const handleEdit = (_id) => {
    console.log(_id);
    
    axios(`http://localhost:3000/editreviews/${_id}`)
      .then((res) => {
        setEditData(res.data[0]);
       console.log(res.data[0]);
       
      document.getElementById(`my_modal_${index}`).showModal();
   
      })
      .catch((error) => console.log(error));
  };

 
  const handleForm = (e) => {
    e.preventDefault();
   

    
    

    
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
          <button className="btn w-full btn-outline btn-error">
            <MdDeleteForever /> Delete
          </button>
        </div>
      </div>

      
      <dialog id={`my_modal_${index}`} className="modal modal-bottom sm:modal-middle">
         
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center mb-4">Update Your Review</h3>
            <form onSubmit={handleForm} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Service Title</label>
                <input
                  name="serviceTitle"
                  type="text"
                  defaultValue={editData?.serviceTitle}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Review</label>
                <input
                  name="review"
                  type="text"
                  value={editData?.review || 'edfsf' }
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Rating</label>
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
                <label className="text-sm font-medium text-gray-700">Email</label>
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
                onClick={() => document.getElementById(`my_modal_${index}`).close()}
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
