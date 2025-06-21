import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Why User Reviews Matter in Online Services",
      description:
        "User reviews are essential in building trust in an online service platform. They offer real-life insights from users who have already tried the service, which helps others decide whether the service is worth their time and money. A high number of positive reviews creates social proof, while constructive negative feedback allows providers to improve. In an age where most decisions are made online, reviews shape the reputation and future of businesses.",
      image: "https://i.ibb.co/Vc942J2c/9467796.jpg",
    },
    {
      id: 2,
      title: "Tips for Writing a Helpful Review",
      description:
        "To make your review valuable, be specific and honest. Mention what you liked or disliked, such as prompt response, pricing, or product quality. Instead of generic praise like 'Good service', explain what was good — Was it their communication? Was delivery on time? This helps other users and gives service providers actionable feedback. Avoid emotional language or sarcasm, and try to remain respectful, even during negative experiences.",
      image: "https://i.ibb.co/mVFQ2vsQ/9148013-4099582.jpg",
    },
    {
      id: 3,
      title: "How to Choose the Right Service Online",
      description:
        "Choosing a service online requires careful research. Always read multiple user reviews, compare pricing, and look at past work or credentials. Check whether the provider responds to reviews or questions — this shows accountability. Look for verified users, review ratings over time, and avoid one-off services without a digital footprint. A good service provider will always be transparent with terms, pricing, and timelines.",
      image: "https://i.ibb.co/0VJLdG5Z/2149595828.jpg",
    },
    {
      id: 4,
      title: "Meet Before You Pay: Ensuring Trust in Service Deals",
      description:
        "One of the biggest mistakes in online service transactions is paying before meeting or validating the provider. Always arrange a video call or in-person meeting before making any financial commitment. This helps verify their identity, understand their communication style, and clarify service details. Scammers often avoid live interaction — so if someone refuses to meet or delays unnecessarily, consider it a red flag. Building trust before money exchange is essential to avoid fraud and miscommunication.",
      image: "https://i.ibb.co/Jj4nhdhT/34915940-8245103.jpg",
    },
    {
      id: 5,
      title: "Red Flags to Watch for in Online Service Providers",
      description:
        "Be cautious if a service provider has no reviews, no proper contact information, or pushes you to make quick payments. Also, beware of copied portfolio items or unusually low prices — these are common traps. Trustworthy providers are transparent, have consistent branding, and communicate professionally. Don't ignore your gut feeling — if something feels off, explore other options.",
      image: "https://i.ibb.co/sJ9HbLjy/2149827747.jpg",
    },
    {
      id: 6,
      title: "Why Feedback Culture Improves Service Quality",
      description:
        "Encouraging users to leave feedback not only helps others but also helps businesses improve. When a platform supports feedback loops — where providers respond to reviews — it builds a healthy ecosystem. Services get refined based on real demand, and users feel valued. Creating a culture where both good and bad feedback is welcomed drives transparency and trust, which leads to higher satisfaction on both ends.",
      image: "https://i.ibb.co/KjxZH3NW/12704410-4968868.jpg",
    },
  ];

  return (
    <section className="my-20 px-4 md:px-10">
      <h2 className="text-center mb-20 font-bold text-3xl md:text-5xl"> Explore Our Blogs</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img src={blog.image} alt={blog.title} className="w-full aspect-video rounded-2xl " />
            <div className="p-7">
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">{blog.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
