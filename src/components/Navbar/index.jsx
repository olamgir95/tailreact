import React, { useState } from "react";
import logo from "../../assets/imgs/logo.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { Links } from "./details";
import { useNavigate } from "react-router";

function Navbar(props) {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={` lg:mx-5  mx-12 lg:text-center lg:items-center lg:justify-between mb-8 lg:flex mt-5 lg:mb-3  ${
        showInfo ? "h-80  duration-500" : ""
      }`}
    >
      <div className="mb-3">
        <img
          onClick={() => navigate("/home")}
          className="xl:w-22 lg:w-20 md:w-16 w-14 mt-3 "
          src={logo}
          alt=""
        />
      </div>
      <div>
        {showInfo ? (
          <FaTimes
            className="lg:hidden text-center absolute top-6 right-5 t-6 scale-125  "
            onClick={() => setShowInfo(!showInfo)}
          />
        ) : (
          <FaBars
            className="lg:hidden text-center absolute top-6 right-5  scale-125  "
            onClick={() => setShowInfo(!showInfo)}
          />
        )}
      </div>
      <ul className={showInfo ? "show" : "link"}>
        {Links.map((link) => (
          <li className="lg:hover:bg-gray-200 rounded-xl " key={link.name}>
            <a
              className="xl:px-5 2xl:px-6 px-4 duration-600  min-w-fit "
              href={link.links}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li className={showInfo ? "wrapperShow" : "wrapper"}>
          <button className={showInfo ? "btnShow" : "btnNavbar"}>
            Book a demo
          </button>
        </li>
        <li className="lg:hover:bg-gray-200 rounded-xl px-1">
          <a  href="/Login">Log In</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
