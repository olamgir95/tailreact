import React from "react";
import barbour from "../../assets/imgs/barbour.png";
import newyork from "../../assets/imgs/newyork.png";
import lvmh from "../../assets/imgs/lvmh.png";
import estee from "../../assets/imgs/estee.png";
import tjx from "../../assets/imgs/tjx.png";
import river from "../../assets/imgs/river.png";
import radisson from "../../assets/imgs/radisson.png";
import gstar from "../../assets/imgs/gstar.png";

function Brands(props) {
  const brands = [
    { name: barbour },
    { name: newyork },
    { name: lvmh },
    { name: estee },
    { name: tjx },
    { name: river },
    { name: radisson },
    { name: gstar },
  ];
  return (
    <div>
      <div className="mt-8 md:mx-10 mx-5 items-center flex flex-col">
        <p className=" text-blak text-base leading-7 font-roboto font-bold text-center">
          Trusted by world-class brands.
        </p>
        <ul className="flex mt-8 justify-between w-full items-center flex-wrap">
          {brands.map((br) => (
            <li className="xl:w-18 lg:w-16 md:w-12 w-8 cursor-pointer" key={br.name}>
              <img
                className={br.name === tjx ? "w-3/4" : "w-full"}
                src={br.name}
                alt=""
              />
            </li>
          ))}
        </ul>


        <p className=" border-b-2 font-bold border-solid border-b-purple text-blak mt-6 text-base leading-7 font-roboto text-center">
          Meet our customers
        </p>
      </div>
      <div className="mt-24 md:flex flex-wrap mb-10 font-roboto h-fit md:px-8 px-4 lg:px-16 ">
        <div className="bg-red flex-1   items-center lg:text-left text-center my-auto">
          <h1 className="lg:text-3xl text-base md:text-xl xl:text-5xl font-roboto font-bold">
            Grow 2.5x faster than <br /> your competitors.
          </h1>
          <div className="flex mt-16 items-center lg:justify-start justify-center text-center">
            <button className="md:w-32 text-center  w-24  bg-purple h-3/5  md:h-3/4 lg:h-full  md:p-2 p-1 lg:text-base md:text-xs text-[8px] hover:bg-white  hover:text-purple text-white rounded-full  hover:shadow-purple hover:shadow-md transition duration-500 ease-in-out  lg:w-40 font-roboto">
              Book a demo
            </button>
            <p className=" border-b-2 min-w-fit font-bold border-solid border-b-purple text-blak ml-5 md:text-base text-sm leading-7 font-roboto text-center">
              Meet our customers
            </p>
          </div>
          <p className=" mt-14 md:text-xs text-[8px] lg:text-base">
            *PwC audited methodology.
          </p>
          <p className="border-b-2 border-solid my-3 md:text-xs text-[8px] lg:text-base border-blak2 lg:mx-0 mx-auto w-fit">
            Read the report
          </p>
        </div>
        <div className="lg:flex-1 flex-initial text-center justify-center mx-auto md:flex md:my-0 my-3">
          <div className="md:border-l-2 md:text-left text-center md:items-start items-center justify-around mx-auto w-fit border-t-2 md:border-t-0 border-solid border-gray-300 h-full  md:flex-1 flex md:flex-col">
            <div className="px-2">
              <p className="lg:text-3xl text-base md:text-xl xl:text-4xl font-bold text-blak2">
                140%
              </p>{" "}
              <p className="md:text-xs text-[8px] lg:text-base py-2 text-blak2">
                Qubit's top customers <br />
                annual growth rate.
              </p>
            </div>
            <div className="px-2 md:my-28">
              <p className="lg:text-3xl text-base md:text-xl xl:text-4xl font-bold text-blak2">
                $20bn
              </p>{" "}
              <p className="md:text-xs text-[8px] lg:text-base py-2 text-blak2">
                Qubit's top customers <br />
                annual growth rate.
              </p>
            </div>
            <div className="px-2 ">
              <p className="lg:text-3xl text-base md:text-xl xl:text-4xl font-bold text-blak2">
                364
              </p>{" "}
              <p className="md:text-xs text-[8px] lg:text-base py-2 text-blak2">
                Qubit's top customers <br />
                annual growth rate.
              </p>
            </div>
          </div>
          <div className="md:border-l-2 md:text-left text-center md:items-start items-center justify-around mx-auto w-fit border-t-2  md:border-t-0 border-solid border-gray-300 h-full md:flex-1 flex md:flex-col">
            <div className="px-2">
              <p className="lg:text-3xl text-base md:text-xl xl:text-4xl font-bold text-blak2">
                9.5m
              </p>{" "}
              <p className="md:text-xs text-[8px] lg:text-base py-2 text-blak2">
                Qubit's top customers <br />
                annual growth rate.
              </p>
            </div>
            <div className="px-2 md:my-28">
              <p className="lg:text-3xl text-base md:text-xl xl:text-4xl font-bold text-blak2">
                4.4m
              </p>{" "}
              <p className="md:text-xs text-[8px] lg:text-base py-2 text-blak2">
                Qubit's top customers <br />
                annual growth rate.
              </p>
            </div>
            <div className="px-2">
              <p className="lg:text-3xl text-base md:text-xl xl:text-4xl font-bold text-blak2">
                $1.6bn
              </p>{" "}
              <p className="md:text-xs text-[8px] lg:text-base py-2 text-blak2">
                Incremental revenue generated <br />
                by our customers in 2020.*
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
