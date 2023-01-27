import React from "react";
import Carousel from "react-elastic-carousel";
import { data } from "./data";

function Carousell() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 640, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <div className="bg-gry md:mt-52 mt-20 mx-auto items-center text-center font-roboto px-28 pb-5 ">
      <h1 className="xl:text-4xl lg:3xl md:text-2xl sm:text-xl text-xs font-bold text-center py-20">
        Trusted by leading brands.
      </h1>
      <Carousel breakPoints={breakPoints} className="gap-5">
        {data.map((items,index) => (
          <div key={index} className="bg-white h-fit lg:w-5/6 md:w-4/5 sm:w-2/3 w-full">
            <img className="w-full" src={items.img} alt="" />
            <p className="text-center font-bold xl:text-xl lg:text-base md:text-sm sm:text-xs text-[10px] text- my-5 ">
              {items.title}
            </p>
            <p className="my-5 text-purple xl:text-base lg:text-sm md:text-[10px] sm:text-[8px] text-[6px] text-center w-2/3 mx-auto">
              {items.text}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousell;
