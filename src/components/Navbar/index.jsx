import React, { useState } from "react";
import rectangle from "../../assets/imgs/rectangle.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const [showInfo, setShowInfo] = useState(false);
  let Links = [
    { name: " Why Qubit?", links: "/" },
    { name: " Products", links: "/" },
    { name: " Solutions", links: "/" },
    { name: " Case studie", links: "/" },
    { name: " Customers", links: "/" },
    { name: " Resources", links: "/" },
    { name: " More", links: "/" },
  ];
  return (
    <div
      className={` lg:mx-5  mx-12 lg:text-center lg:items-center lg:justify-between mb-8 lg:flex mt-5 lg:mb-3  ${
        showInfo ? "h-80  duration-500" : ""
      }`}
    >
      <div className="mb-3">
        <img className="2xl:w-22 w-20 mt-3 " src={rectangle} alt="" />
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
          <button className={showInfo ? "btnShow" : "btn"}>Book a demo</button>
        </li>
        <li className="lg:hover:bg-gray-200 rounded-xl px-1">
          <a href="/">Log In</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
