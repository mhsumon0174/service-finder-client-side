import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import axios from 'axios';

const StatsSection = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalServices: 0,
    totalReviews: 0,
  });

  useEffect(() => {
    axios.get('https://assignment-11-server-fawn-seven.vercel.app/stats')
      .then(res => {
        setStats(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
   <div className="my-16 text-center">
  <h2 className="text-center mb-2 font-bold text-3xl md:text-5xl">Platform Statistics</h2>
  <p className="text-gray-600 mb-10">Here’s how we are growing every day</p>

  <div className="stats-container flex flex-col md:flex-row justify-around bg-gray-100 p-10 rounded-lg gap-6">
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-2">Users</h3>
      <CountUp start={0} end={stats.totalUsers} duration={5} suffix="+" className="text-4xl font-bold text-blue-600" />
    </div>
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-2">Services</h3>
      <CountUp start={0} end={stats.totalServices} duration={5} suffix="+" className="text-4xl font-bold text-green-600" />
    </div>
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-2">Reviews</h3>
      <CountUp start={0} end={stats.totalReviews} duration={8} suffix="+" className="text-4xl font-bold text-purple-600" />
    </div>
  </div>
</div>



  );
};

export default StatsSection;
