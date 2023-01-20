import React from 'react';
import Jumbotron from '../components/cards/Jumbotron';
import { useAuth } from '../context/Auth';

const HomePage = () => {
    const [auth, setAuth ] = useAuth()
    return (
        <div className=''>
            <Jumbotron title="Home Page" />
            <pre>{JSON.stringify(auth , null, 4)}</pre>
        </div>
    );
};

export default HomePage;