import React from "react";
// import booking from "../../assets/imgs/booking.png"

function Booking(props) {
  return (
    <div className="bg-booking w-full h-screen bg-cover pt-40 pb-96 pl-28">
      <div className=" w-1/2 h-80  bg-yellow-400">
        <h6 p>Driving growth with personalization.</h6>
        <h1 className="mt-4 font-roboto text-5xl  font-bold w-full">Make ecommerce</h1>
        <h1 className=" font-roboto text-5xl font-bold text-purple">More personal.</h1>
        <p className=" font-roboto text-base">
          Hundreds of brands use Qubit CommerceAI to power the next generation
          of product recommendations, badging and insights to build exceptional
          customer experiences.
        </p>
        <div>
            <input type="text" placeholder="Enter your email"/>
            <button>Book a demo</button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
