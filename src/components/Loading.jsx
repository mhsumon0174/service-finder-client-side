import Lottie from 'lottie-react';
import React from 'react';
import loadingLottie from '../assets/lotties/loading.json'
const Loading = () => {
    return (
         <div className='min-h-screen flex justify-center items-center'>
            <Lottie style={{width:'300px'}}  animationData={loadingLottie} loop={true}></Lottie>
        </div>
    );
};

export default Loading;