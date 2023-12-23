import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';
import Hamburger from "hamburger-react";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useRef } from 'react';
const Header = ({ changeModeHandler  , mode}) => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);
  function clickHandler(flag) {
    console.log(flag);

    !flag
      ? (navRef.current.style.display = "flex")
      : (navRef.current.style.display = "none");
  }

  return (
    <nav className=" w-full z-10 dark:bg-[#0d0d0d] transition-all duration-1000 ease-in-out sticky top-0 bg-[whitesmoke] ">
      <div className="flex justify-between w-10/12 mx-auto">
        <div className="text-2xl  font-bold dark:text-green-500 text-gray-500 tracking-wider py-3  transition-all duration-1000 ease-in-out  hover:text-red-800">
          Sachin
        </div>
        <div className="lg:w-[47%] md:w-[66%]  w-[75%] py-3 align-middle my-auto">
          <ul className="lg:flex md:flex hidden  justify-between items-center">
            <li className="font-bold text-xl">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "text-orange-700 dark:text-red-600 border-b-2 pb-1 "
                    : "text-gray-700 dark:text-white";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="font-bold text-xl">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => {
                  return isActive
                    ? "text-orange-700 border-b-2 pb-1"
                    : "text-gray-700 dark:text-white";
                }}
              >
                DashBoard
              </NavLink>
            </li>
            <li className="font-bold text-xl">
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "text-orange-700 border-b-2 pb-1"
                    : "text-gray-700 dark:text-white";
                }}
              >
                About Us
              </NavLink>
            </li>
            <li className="font-bold text-xl">
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive
                    ? "text-orange-700 border-b-2 pb-1"
                    : "text-gray-700 dark:text-white";
                }}
              >
                Contact
              </NavLink>
            </li>
            {mode === "light" ? (
              <MdDarkMode
                className="text-2xl hover:bg-black hover:text-white transition-all duration-700 ease-in-out hover:rounded-full  "
                onClick={changeModeHandler}
              />
            ) : (
              <FiSun className="text-3xl" onClick={changeModeHandler} />
            )}
          </ul>
        </div>

        <div className="flex items-center gap-3 lg:hidden md:hidden">
          <div>
            {mode === "light" ? (
              <div className="hover:bg-green-500 bg-gray-600">
                {" "}
                <MdDarkMode
                  className="text-3xl hover:bg-green-300 "
                  onClick={changeModeHandler}
                />{" "}
              </div>
            ) : (
              <FiSun className="text-3xl" onClick={changeModeHandler} />
            )}
          </div>

          <div
            onClick={() => clickHandler(isOpen)}
            className=" gap-3 flex items-center "
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>

      <ul
        ref={navRef}
        className="hidden gap-6 flex-col dark:text-white py-7 mt-5 items-center  justify-around "
      >
        <li className="font-bold text-xl">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "text-orange-700 border-b-2 pb-1 "
                : "text-gray-700";
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="font-bold text-xl">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => {
              return isActive
                ? "text-orange-700 border-b-2 pb-1"
                : "text-gray-700";
            }}
          >
            DashBoard
          </NavLink>
        </li>
        <li className="font-bold text-xl">
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive
                ? "text-orange-700 border-b-2 pb-1"
                : "text-gray-700";
            }}
          >
            About Us
          </NavLink>
        </li>
        <li className="font-bold text-xl">
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive
                ? "text-orange-700 border-b-2 pb-1"
                : "text-gray-700";
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header
