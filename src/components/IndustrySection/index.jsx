import React from "react";
import { data } from "./data";

function IndustrySection() {
  return (
    <div className="mt-24 font-roboto  text-center xl:mx-32 sm:mx-20 mx-10">
      <h1 className="xl:text-4xl lg:3xl md:text-2xl sm:text-xl text-lg font-bold text-center ">
        We specialize in your industry.
      </h1>
      <p className="mt-3 lg:text-base text-sm text-center">
        Learn how we are delivering personalization at scale across sectors.
      </p>
      <div className="grid md:grid-cols-2 mt-16 gap-8 grid-cols-1 justify-center">
        {data.map((items) => (
          <div className="bg-vio text-white p-8 rounded-lg">
            <div className="flex text-center items-center gap-8">
              <div className=" ">
                <img className="w-4/5" src={items.img} alt="" />
              </div>
              <div className="lg:text-lg md:text-base text-sm font-bold">
                {items.title}
              </div>
            </div>
            <p className="lg:text-base md:text-xs sm:text-[10px] text-[8px]  mt-8 mb-2 text-left">
              {items.text1}
            </p>
            <p className="lg:text-base md:text-xs sm:text-[10px] w-fit text-[8px] text-left">
              {items.text2}
              <hr className="mt-1 h-0.5" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustrySection;
