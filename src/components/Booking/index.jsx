import React from "react";
import booking2 from "../../assets/imgs/booking.png"

function Booking(props) {
  return (
    <div className="flex justify-between bg-pin md:bg-booking w-full   lg:h-screen h-96 bg-cover pt-20 xl:bg-center bg-btnsm md:bg-btnmd lg:bg-btnlg lg:pt-36 pb-96 lg:pl-28 md:pl-20 pl-10  bg-no-repeat  bg-postion ">
      <div className=" md:w-1/2  h-80  z-10 ">
        <h6 className="font-roboto  text-sm">Driving growth with personalization.</h6>
        <h1 className="mt-4 font-roboto lg:text-5xl md:text-3xl text-2xl font-bold w-full sh">Make ecommerce</h1>
        <h1 className=" font-roboto lg:text-5xl md:text-3xl text-2xl font-bold text-purple">More personal.</h1>
        <p className=" font-roboto  xl:text-lg lg:text-base text-sm w-1/2 md:w-3/4 lg:pr-10 md:pr-3 mt-8 lg:leading-7  leading-5">
          Hundreds of brands use <strong>Qubit CommerceAI</strong> to power the next generation
          of product recommendations, badging and insights to build exceptional
          customer experiences.
        </p>
        <div className="h-10 flex mt-2 ">
            <input className="lg:w-60 md:w-52 w-36 lg:text-base md:text-sm text-sm  h-full pl-5 p-1 border border-solid rounded-l-full outline-none placeholder:text-sm lg:placeholder:text-base border-purple placeholder:text-grey-500 placeholder:opacity-80" type="text" placeholder="Enter your email"/>
            <button className=" w-32  bg-purple h-full  p-1 lg:text-base md:text-sm text-xs hover:bg-white  hover:text-purple text-white rounded-r-full  hover:shadow-purple hover:shadow-md transition duration-500 ease-in-out  lg:w-40 font-roboto">Book a demo</button>
        </div>
      </div>
        <div className="md:hidden w-1/2 bg-cover">
          <img className="w-full center cover absolute right-0 bottom-16" src={booking2} alt="" />
        </div>
    </div>
  );
}

export default Booking;
