import React, { useEffect, useState } from "react";
import logo from "../../assets/imgs/logo.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { Links } from "./details";
import { useNavigate, Outlet, NavLink } from "react-router-dom";

function Navbar(props) {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log((showInfo && windowWidth < 1024) ? "show" : "link");
  console.log('windowWidth: ',windowWidth);
  return (
    <>
      <div
        className={` lg:mx-5  mx-12 lg:text-center lg:items-center lg:justify-between mb-8 lg:flex mt-5 lg:mb-3  ${
          (showInfo && windowWidth < 1024) ? "h-80  duration-500" : ""
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
        <ul
          className={(showInfo && windowWidth < 1024) ? "show" : "link"}
        >
          {Links.map((link) => (
            <li className="lg:hover:bg-gray-200 rounded-xl " key={link.name}>
              <NavLink
                className="xl:px-5 2xl:px-6 px-4 duration-600  min-w-fit "
                to={link.links}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className={(showInfo && windowWidth < 1024) ? "wrapperShow" : "wrapper"}>
            <button className={(showInfo && windowWidth < 1024) ? "btnShow" : "btnNavbar"}>
              Book a demo
            </button>
          </li>
          <li className="lg:hover:bg-gray-200 rounded-xl px-1">
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
