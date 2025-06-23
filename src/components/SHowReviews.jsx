import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Review from "./Review";


const SHowReviews = ({ _id,setCount,title }) => {
  const [data, setData] = useState([]);
console.log(typeof data);


  useEffect(() => {
    axios(`https://assignment-11-server-fawn-seven.vercel.app/reviews/${_id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, [_id]);
setCount(data.length)
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What People Are Saying
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => {
          const stars = [];
          for (let i = 0; i < Number(item.rate || 0); i++) {
            stars.push(<FaStar key={i} />);
          }

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 flex flex-col justify-between border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="Reviewer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {stars}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic text-sm line-clamp-4">
                "{item.review}"
              </p>
              <div className="mt-4 text-right text-xs text-gray-400">
                Posted {item.date || "Recently"}
              </div>
            </div>
          );
        })}
        
      </div>
      <Review _id={_id} data={data} setData={setData} title={title} ></Review>
    </div>
  );
};

export default SHowReviews;
