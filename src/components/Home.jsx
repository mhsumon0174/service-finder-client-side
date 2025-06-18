import React, { use } from 'react';
import { AuthContext } from '../provider/AUthContext';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    const {user}=use(AuthContext)
    console.log(user);
    
    return (
        <div>
            <div className='my-10 '>
                <Carousel autoPlay infiniteLoop className='text-center w-11/12  mx-auto '>
                <img src="https://i.ibb.co/HDYsPTx1/354891912-2bd9809b-b7cd-4b36-a31c-5bd74aed264f.jpg" alt="" />
            <img src="https://i.ibb.co/gFWGKjcf/2150041862.jpg" alt="" />
            <img src="https://i.ibb.co/84D65Fy0/2148143135.jpg" alt="" />
            </Carousel>
            </div>
        </div>
    );
};

export default Home;