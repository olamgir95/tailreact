import React from "react";
import { FaFacebookF,FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { data } from "./data";
function Footer(props) {
  return (
    <div className="text-center mt-8 font-roboto">
    <p>Connect with us</p>
    <ul className="flex justify-center gap-10 items-center mt-8">
      <li>
        
        <FaFacebookF/>
      </li>
      <li>
        
        <FaTwitter/>
      </li>
      
      <li>
        
        <FaInstagram/>
      </li>
      <li>
        
        <FaYoutube/>
      </li>
    </ul>
    <div className=" text-colorFoot">
{data.map((items)=>(
  <ul>
    <li className="font-bold text-white lg:text-base md:text-sm text-xs">{items.title}
    {items.child.map((links)=>(
      <li className=" font-normal text-white lg:text-sm md:text-xs sm:text-[10px] text-">{links.link}</li>
    ))}</li>
  </ul>
))}
    </div>
    </div>
  );
}

export default Footer;
