import React from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Sent!",
      text: "Your message has been successfully sent to the administrator.",
      timer: 1500,
      
      timerProgressBar: true,
    });
    e.target.reset();
  };

  return (
    <section className="max-w-3xl mx-auto my-16 bg-white p-8 rounded-xl shadow-xl border border-gray-200">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
        Contact Us
      </h2>
      <form onSubmit={handleForm} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-700 font-semibold">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-700 font-semibold">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-700 font-semibold">
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
