import React from 'react';
import eco from "../../assets/imgs/eco.png";

function EcoSystem(props) {
    return (
        <div className='bg-gry flex pt-12 lg:px-16  mt-24 px-10 lg:gap-x-24 md:gap-x-20 sm:gap-x-16 gap-x-10'>
            <div className=' align-middle   flex-nowrap my-auto  '>
            <h1 className="xl:text-4xl lg:2xl md:text-xl sm:text-lg text-base font-bold text-left mb-10 w-fit ">
            A connected ecosystem.
        </h1>
        <p className='lg:leading-10 w-fit md:leading-6 leading-5 lg:text-xs sm:text-[10px] text-[8px] '>The Qubit personalization platform is designed with enterprise and high-growth businesses in mind.</p>
        <p className='lg:leading-7  md:leading-5 leading-4 lg:text-xs  sm:text-[10px] text-[8px]'>Our open ecosystem approach means you can connect any data source and deliver personalization across any channel.</p>
        <div className='text-left lg:mt-16 md:mt-12 mt-8'><button className=" lg:!w-44 lg:!text-sm btn ">
        See our integrations
          </button></div>
            </div>
            <div className=' items-center flex  '><img src={eco} alt="" /></div>
        </div>
    );
}

export default EcoSystem;