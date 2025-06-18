import React, { use } from 'react';
import { AuthContext } from '../provider/AUthContext';

const Home = () => {
    const {user}=use(AuthContext)
    console.log(user);
    
    return (
        <div>
            
        </div>
    );
};

export default Home;