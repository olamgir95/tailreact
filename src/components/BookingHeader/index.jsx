import React from "react";
import booking2 from "../../assets/imgs/booking2.png";

function BookingHeader(props) {
  return (
    <div className="flex relative justify-between bg-pin md:bg-booking w-full  h-96 lg:h-screen md:h-96 bg-cover pt-16 md:pt-28 xl:bg-center bg-btnsm md:bg-btnmd lg:bg-btnlg lg:pt-40 pb-96 lg:pl-28 md:pl-20 pl-10  bg-no-repeat  bg-postion ">
      <div className=" md:w-1/2 w-3/4 h-80  z-10 ">
        <h6 className="font-roboto  text-sm">
          Driving growth with personalization.
        </h6>
        <h1 className="mt-4 font-roboto lg:text-5xl md:text-3xl sm:text-2xl text-lg font-bold w-full sh">
          Make ecommerce
        </h1>
        <h1 className=" font-roboto lg:text-5xl md:text-3xl sm:text-2xl text-lg font-bold text-purple">
          More personal.
        </h1>
        <p className=" font-roboto  xl:text-lg lg:text-base md:text-sm text-xs w-3/4 lg:pr-10 md:pr-3 mt-8 lg:leading-7  leading-5">
          Hundreds of brands use <strong>Qubit CommerceAI</strong> to power the
          next generation of product recommendations, badging and insights to
          build exceptional customer experiences.
        </p>
        <div className="h-10 flex mt-2 ">
          <input
            className="lg:w-60 md:w-52 w-28 lg:text-base md:text-xs text-[8px] text-sm  h-3/5 md:h-3/4 lg:h-full !pl-5 md:p-2 p-1 border border-solid rounded-l-full outline-none placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base border-purple placeholder:text-grey-500 placeholder:opacity-80"
            type="text"
            placeholder="Enter your email"
          />
          <button className=" md:w-32 w-20  bg-purple h-3/5  md:h-3/4 lg:h-full  md:p-2 p-1 lg:text-base md:text-xs text-[8px] hover:bg-white  hover:text-purple text-white rounded-r-full  hover:shadow-purple hover:shadow-md transition duration-500 ease-in-out  lg:w-40 font-roboto">
            Book a demo
          </button>
        </div>
      </div>
      <div className="md:hidden w-1/2 bg-cover ">
        <img
          className=" w-1/2 center cover absolute right-0 bottom-0 "
          src={booking2}
          alt=""
        />
      </div>
    </div>
  );
}

export default BookingHeader;
