import React from 'react';
import { ImSad2 } from 'react-icons/im';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='p-10 min-h-screen  flex items-center justify-center'>
            <div className='bg-gray-900 shadow-xl rounded-2xl px-10 py-16 text-center w-full max-w-3xl'>
                <div className='text-red-500 text-8xl mb-4 flex justify-center'>
                    <ImSad2 />
                </div>
                <h1 className='text-6xl font-bold mb-4 text-white'>404</h1>
                <p className='text-2xl md:text-3xl mb-6 text-white'>Oops! The page you're looking for doesn't exist.</p>
                <p className='text-md md:text-lg mb-8 text-gray-400'>It might have been moved or deleted.</p>
                <Link to='/'>
                    <button className='btn btn-success btn-wide text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform'>
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
