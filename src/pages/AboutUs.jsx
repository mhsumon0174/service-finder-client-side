import React from 'react';

const AboutUs = () => {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-4xl text-center font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-primary">ServiceFinder</span>, your trusted partner in connecting you with the best service providers in the industry.  
          Our mission is to simplify your search and ensure top-quality services are just a click away.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Founded in 2023, we have rapidly grown to become a platform where users can find reliable, vetted professionals for all their needs — from home repairs to event planning and more.  
          Our dedicated team works tirelessly to maintain high standards and customer satisfaction.
        </p>
        <div className="flex items-center space-x-6 mt-10">
          <img
            src="https://i.ibb.co.com/RpnWQnvQ/2817.jpg"
            alt="Team working"
            className="w-36 h-36 rounded-full object-cover shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Team
            </h3>
            <p className="text-gray-600 mt-2 max-w-md">
              A passionate group of professionals dedicated to delivering excellent service and continuous innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
