import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import logoFooter from "../../assets/imgs/logoFooter.png";
import { data } from "./data";
function Footer() {
  return (
    <div className="text-center mt-8 font-roboto">
      <p>Connect with us</p>
      <ul className="flex justify-center gap-10 items-center mt-8">
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaTwitter />
        </li>

        <li>
          <FaInstagram />
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
      <div className="mt-10 bg-colorFoot py-10">
      <div className=" h-fit grid-cols-2 grid sm:grid-cols-2 md:flex lg:flex-nowrap flex-wrap lg:gap-16 md:gap-10 gap-5  lg:px-20 md:px-16 px-10">
        {data.map((items, index) => (
          <div key={index} className=" w-fit text-left h-fit   text-white ">
            {" "}
            <p className="md:mb-8 mb-4 lg:text-base md:text-sm text-xs font-bold">
              {items.title}
            </p>
            <div className="footerItems md:grid flex flex-wrap flex-col max-fit ">
              {items.child.map((links, index) => (
                <p
                  key={index}
                  className=" text-left mt-3 w-fit  font-normal text-white lg:text-sm md:text-xs sm:text-[10px] text-[8px]"
                >
                  {links.link}
                </p>
              ))}
            </div>
          </div>
        ))}
        
      </div>
      <div className="mx-16 mt-8 text-white relative">
          <div className=" absolute left-0 top-6">
            <FaGlobe />
          </div>
          <div className=" items-center flex flex-col text-center w-full">
          <div>  <img className="xl:w-22 lg:w-20 md:w-16 w-14" src={logoFooter} alt="" /></div>
            <p className=" lg:text-xs md:text-[10px] mt-4 sm:text-[8px] text-[6px]">© 2021 Qubit. All rights reserved.</p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Footer;
