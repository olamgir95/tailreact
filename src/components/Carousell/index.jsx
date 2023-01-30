import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import { data } from './data';

function Carousell(props) {
    
const responsive = {
  LargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1568, min: 1024 },
    items: 3
  },
  Laptop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};
return (
    <div className="bg-gry md:mt-30 mt-20 mx-auto pt-20  items-center text-center font-roboto lg:px-28  sm:px-20 px-10  pb-5 ">
 <h1 className="xl:text-4xl lg:3xl md:text-2xl sm:text-xl text-base font-bold mb-10">
 Trusted by leading brands.
        </h1>
<Carousel responsive={responsive} >
{data.map((items,index) => (
          <div key={index} className="bg-white h-fit items-center flex flex-col m-6 ">
            <img className="w-full" src={items.img} alt="" />
            <p className="text-center font-bold xl:text-xl lg:text-base md:text-sm sm:text-xs text-[10px]  my-5 ">
              {items.title}
            </p>
            <p className="my-5 text-purple xl:text-base lg:text-sm text-[10px]   text-center w-2/3 mx-auto">
              {items.text}
            </p>
          </div>
          
        ))}
        
</Carousel>
</div>
        
    );
}

export default Carousell;