import React from "react";
import insight from "../../assets/imgs/insight.png";
import personal from "../../assets/imgs/personal.png";
import effective from "../../assets/imgs/effective.png";
import recommend from "../../assets/imgs/recommend.png";
import commerce from "../../assets/imgs/commerce.png";
import badging from "../../assets/imgs/badging.png";
import content from "../../assets/imgs/content.png";
import platform from "../../assets/imgs/platform.png";
import allthpower from "../../assets/imgs/allthpower.png";
function QubitSection() {
  return (
    <div className="font-roboto">
      {/* section1 */}
      <div className="mt-24 items-center text-center font-roboto">
        <h1 className="xl:text-4xl lg:3xl md:text-2xl sm:text-xl text-lg font-bold ">
          Qubit CommerceAI.
        </h1>
        <p className="mt-5 lg:text-base text-sm">
          The new way to drive growth.
        </p>
        <div className="xl:mx-32 lg:mx-20 sm:mx-10 mx-5 items-center text-center grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-5 xl:gap-12 md:flex-nowrap flex-wrap">
          <div className="mt-10 items-center flex flex-col ">
            <img src={insight} alt="" />
            <p className="font-bold lg:text-lg md:text-base sm:text-sm text-xs mt-4">
              More insight
            </p>
            <p className=" mx-auto font-normal  md:text-xs text-[8px] mt-4 w-60 xl:w-72 ">
              Learn which products drive performance and which don't, through
              automated insights you can action.
            </p>
          </div>
          <div className="mt-10 items-center flex flex-col">
            <img src={personal} alt="" />
            <p className="font-bold lg:text-lg md:text-base sm:text-sm text-xs mt-4">
              More insight
            </p>
            <p className=" font-normal  md:text-xs text-[8px] mt-4 w-60 xl:w-72 ">
              Learn which products drive performance and which don't, through
              automated insights you can action.
            </p>
          </div>
          <div className="mt-10 items-center flex flex-col">
            <img src={effective} alt="" />
            <p className="font-bold lg:text-lg md:text-base sm:text-sm text-xs mt-4">
              More insight
            </p>
            <p className=" font-normal  md:text-xs text-[8px] mt-4 w-60 xl:w-72 ">
              Learn which products drive performance and which don't, through
              automated insights you can action.
            </p>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-gry max-w-full h-fit mt-24 flex flex-col items-center text-center py-4">
        <h1 className="xl:text-4xl lg:3xl md:text-2xl sm:text-xl text-lg font-bold md:pt-20 pt-12 ">
          All the power. Easy to use.
        </h1>
        <p className=" lg:text-base md:text-xs text-[8px] mt-7 w-3/4 text-center items-center">
          By collaborating with real ecommerce teams we've built the next-gen
          personalization tool. No code. No clunkiness.
        </p>
        <div className="items-center flex text-center justify-center sm:mt-10 mt-5 w-4/5 md:mt-20">
          <img className="" src={allthpower} alt="" />
        </div>
        <div className="md:py-16 my-5 ">
          <button className="btn mr-5">
            See products
          </button>
          <button className="md:w-36  w-24 bg-white h-3/5  md:h-3/4 lg:h-full  md:p-2 p-1 lg:text-base md:text-xs text-[8px] hover:bg-purple  hover:text-white text-purple rounded-full   hover:shadow-md transition duration-500 ease-in-out  lg:w-40 font-roboto">
            Book a demo
          </button>
        </div>
      </div>
      {/* section 3 */}
      <div className="mt-24 items-center text-center font-roboto">
        <h1 className="xl:text-4xl lg:3xl md:text-2xl sm:text-xl text-xs font-bold ">
          What you can do with Qubit.
        </h1>
        <div className="xl:mx-32 lg:mx-20 sm:mx-10 mx-5 items-center text-center grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-5 xl:gap-12 md:flex-nowrap flex-wrap">
          <div className="mt-10 items-center flex flex-col ">
            <img src={recommend} alt="" />
            <p className="font-bold lg:text-lg md:text-base sm:text-sm text-xs mt-4">
              More insight
            </p>
            <p className="qubitTeks">
              Learn which products drive performance and which don't, through
              automated insights you can action.
            </p>
          </div>
          <div className="mt-10 items-center flex flex-col">
            <img src={badging} alt="" />
            <p className="font-bold lg:text-lg md:text-base sm:text-sm text-xs mt-4">
              More insight
            </p>
            <p className="qubitTeks">
              Learn which products drive performance and which don't, through
              automated insights you can action.
            </p>
          </div>
          <div className="mt-10 items-center flex flex-col">
            <img src={content} alt="" />
            <p className="font-bold lg:text-lg md:text-base sm:text-sm text-xs mt-4">
              More insight
            </p>
            <p className="qubitTeks">
              Learn which products drive performance and which don't, through
              automated insights you can action.
            </p>
          </div>
          <div className="mt-10 items-center flex flex-col">
            <img src={insight} alt="" />
            <p className="font-bold lg:text-lg md:text-base sm:text-sm text-xs mt-4">
              {" "}
              Product insights
            </p>
            <p className="qubitTeks">
              A platform packed with insights helping you discover the hard
              hitting things you can do next.
            </p>
          </div>
          <div className="mt-10 items-center flex flex-col">
            <img src={commerce} alt="" />
            <p className="font-bold lg:text-lg md:text-base sm:text-sm text-xs mt-4">
              {" "}
              Product insights
            </p>
            <p className="qubitTeks">
              A platform packed with insights helping you discover the hard
              hitting things you can do next.
            </p>
          </div>
          <div className="mt-10 items-center flex flex-col">
            <img src={platform} alt="" />
            <p className="font-bold lg:text-lg md:text-base sm:text-sm text-xs mt-4">
              {" "}
              Product insights
            </p>
            <p className="qubitTeks">
              A platform packed with insights helping you discover the hard
              hitting things you can do next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QubitSection;
