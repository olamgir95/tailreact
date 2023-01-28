import React from "react";
import logowinter from "../../assets/imgs/logowinter.png";

function BookingFooter(props) {
  return (
    <div>
    <div className="bg-bookfooter mt-5 w-full h-96 items-center flex flex-col pt-24">
      <h1 className="xl:text-4xl lg:3xl md:text-2xl tex-center sm:text-xl text-lg font-bold text-white ">
      Book a demo today.
        </h1>
  <div className="h-10 flex mt-8 tex-center">
          <input
            className="lg:w-72 md:w-60 sm:w-36 w-24 !pl-2 md:!pl-3 lg:!pl-5 xl:!pl-6 lg:text-base md:text-xs text-[6px]  h-3/5 md:h-3/4 lg:h-full  md:p-2 p-1 border border-solid rounded-l-full outline-none placeholder:text-[8px] md:placeholder:text-xs lg:placeholder:text-base border-purple placeholder:text-grey-500 placeholder:opacity-80"
            type="text"
            placeholder="Enter your email"
          />
          <button className=" md:w-40 sm:w-32 w-20   bg-purple h-3/5  md:h-3/4 lg:h-full  md:p-2 p-1 lg:text-base md:text-xs text-[8px] hover:bg-white  hover:text-purple text-white rounded-r-full  hover:shadow-purple hover:shadow-md transition duration-500 ease-in-out  lg:w-40 font-roboto">
            Book a demo
          </button>
        </div>
      </div>
        <div ><img className="text-center mx-auto" src={logowinter} alt="" /></div>
    </div>
  );
}

export default BookingFooter;
