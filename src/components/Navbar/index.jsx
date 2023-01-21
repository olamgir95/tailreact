import React, {  useState } from "react";
import rectangle from "../../assets/imgs/rectangle.png";

import { FaBars, FaTimes } from "react-icons/fa";

function Navbar(props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="mx-auto ">
      <ul className=" nav ">
        <span className="mt-5    ">
          <img className="2xl:w-22 w-20 md-13" src={rectangle} alt="" />
        </span>
        <li className={showInfo ? "show" : "link"}>
          <a className="xl:px-5 2xl:px-6 px-4  hover:scale-110 min-w-fit" href="#">
            Why Qubit?
          </a>
          <a className="xl:px-5 2xl:px-6 px-4  hover:scale-110" href="#">
            Products
          </a>
          <a className="xl:px-5 2xl:px-6 px-4  hover:scale-110" href="#">
            Solutions
          </a>
          <a className="xl:px-5 2xl:px-6 px-4  hover:scale-110" href="#">
            Customers
          </a>
          <a className="xl:px-5 2xl:px-6 px-4  hover:scale-110 min-w-fit" href="#">
            Case studies
          </a>
          <a className="xl:px-5 2xl:px-6 px-4  hover:scale-110" href="#">
            Resources
          </a>
          <a className="xl:px-5 2xl:px-6 px-4  hover:scale-110" href="#">
            More
          </a>
        </li>
        <li className={showInfo ? "wrapperShow" : "wrapper"}>
          <button className={showInfo ? "btnShow" : "btn"}>Book a demo</button>
          <a className={showInfo ? "logShow" : "login"} href="#">
            Log In
          </a>
        </li>
        <li>
          {showInfo ? (
            <FaTimes
              className="lg:hidden text-center mt-6 scale-125  "
              onClick={() => setShowInfo(!showInfo)}
            />
          ) : (
            <FaBars
              className="lg:hidden text-center mt-6 scale-125  "
              onClick={() => setShowInfo(!showInfo)}
            />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
