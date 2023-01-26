import React from 'react';
import Booking from '../Booking';
import Brands from '../Brands';
import Carousel from '../Carousell';
import QubitPage from '../QubitPage';


function Home(props) {
    return (
        <div>
           <Booking/>
           <Brands/>
           <QubitPage/>
           <Carousel/>
        </div>
    );
}

export default Home;