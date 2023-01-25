import React from 'react';
import Booking from '../Booking';
import Brands from '../Brands';
import Qubit from '../QubitPage';

function Home(props) {
    return (
        <div>
           <Booking/>
           <Brands/>
           <Qubit/>
        </div>
    );
}

export default Home;