import React, { useContext } from 'react';
import { AuthContext } from '../provider/AUthContext';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Partners from './Partners';
import { Helmet } from 'react-helmet';
import Loading from './Loading';
import TopServices from './TopServices';
import StatsSection from './StatsSection';
import Blogs from './Blogs';
import HomeReviewsShow from './HomeReviewsShow';
import ContactForm from './ContactForm';

const Home = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  const slides = [
    {
      image: "https://i.ibb.co/qYbrtWDD/2150041841.jpg",
      text: "Find Trusted Services Across Every Category",
    },
    {
      image: "https://i.ibb.co/PskJq6YR/71038.jpg",
      text: "Read Genuine Reviews Before You Decide",
    },
    {
      image: "https://i.ibb.co/yctHb25N/2147993333.jpg",
      text: "Share Your Experience & Help the Community",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Home || ServFinder</title>
      </Helmet>

      
      <div className='my-10'>
  <Carousel
  autoPlay
  infiniteLoop
  interval={7000}
  transitionTime={1000}
  stopOnHover={true}
  showThumbs={true}
  showStatus={false}
  showIndicators={true}
  thumbWidth={100}
  className='custom-carousel w-11/12 mx-auto rounded-lg overflow-hidden'
>
  {slides.map((slide, index) => (
    <div key={index} className="relative">
      <img
        src={slide.image}
        alt={`slide-${index}`}
        className="w-full h-[400px] md:h-[600px] object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 md:px-0">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg max-w-4xl leading-snug">
          {slide.text}
        </h2>
      </div>
    </div>
  ))}
</Carousel>

</div>



      
      
      <TopServices />
      <Partners />
      <Blogs />
      <HomeReviewsShow />
      <StatsSection />
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
