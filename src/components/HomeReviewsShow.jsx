import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const HomeReviewsShow = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = () => {
    axios.get('https://assignment-11-server-fawn-seven.vercel.app/reviews')
      .then(res => {
        setReviews(res.data);
      })
      .catch(error => {
        console.error("Error fetching reviews:", error);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="my-20 px-4 md:px-10 ">
      <h2 className="text-center mb-16 font-bold text-3xl md:text-5xl text-slate-800 dark:text-white">
         What Our Users Are Saying
      </h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-lg border border-blue-100 rounded-2xl p-6 shadow-xl transition-all hover:scale-[1.02]"
          >
            <FaQuoteLeft className="text-blue-500 text-3xl absolute -top-4 -left-4 bg-white p-2 rounded-full shadow" />
            <div className="flex items-center gap-4 mb-5">
              <img
                src={review.photo}
                alt={review.name}
                className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
                <p className="text-sm text-yellow-400 font-medium flex gap-4"><FaStar/> {review.rate} / 5</p>
              </div>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed">"{review.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeReviewsShow;
