import React from 'react';

const Partners = () => {
    const partners = [
  {
    name: 'AuthHawk',
    logo: 'https://i.ibb.co/756YVzp/aa.jpg',
    description: 'Backend integration and API support partner.',
  },
  {
    name: 'DesignHive Studio',
    logo: 'https://i.ibb.co/ksVWtnfz/d.png',
    description: 'UX/UI design guidance and accessibility improvements.',
  },
  {
    name: 'CloudFlex Hosting',
    logo: 'https://i.ibb.co/b5VwWXSC/c.png',
    description: '24/7 hosting support and cloud infrastructure.',
  },
  
];
    return (
          <div className="my-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-center mb-20 font-bold text-3xl md:text-5xl">Meet Our Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
            <img src={partner.logo} alt={partner.name} className="mx-auto mb-4 w-20 h-20 object-contain" />
            <h3 className="text-xl font-semibold">{partner.name}</h3>
            <p className="text-gray-600 mt-2">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Partners;