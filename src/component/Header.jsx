import React , {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom';
import Hamburger from "hamburger-react";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useRef } from 'react';

const Header = ({ changeModeHandler, mode }) => {
 

  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);
  function clickHandler(flag) {
    console.log(flag);

    !flag
      ? (navRef.current.style.display = "flex")
      : (navRef.current.style.display = "none");
  }

  return (
    <nav className=" w-full z-10 dark:bg-gradient-to-tr from-zinc-900 to-gray-700 transition-all duration-1000 ease-in-out sticky top-0 bg-[whitesmoke] ">
      <div className="flex justify-between w-10/12 mx-auto">
        <div className="text-2xl dark:text-green-500 drop-shadow-lg bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent font-extrabold tracking-wider py-3  transition-all duration-1000 ease-in-out  hover:text-red-800">
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
                className="text-2xl transition-all duration-700 ease-in-out hover:outline-2 hover:rounded-full hover:outline-blue-800 hover:scale-110 hover:outline-dashed hover:cursor-pointer  "
                onClick={changeModeHandler}
              />
            ) : (
              <FiSun
                className="text-3xl transition-all duration-700 ease-in-out hover:p-1 hover:scale-90 hover:outline-2 hover:rounded-full hover:outline-yellow-500 hover:outline-dotted hover:cursor-pointer"
                onClick={changeModeHandler}
              />
            )}
          </ul>
        </div>

        <div className="flex items-center gap-3 lg:hidden md:hidden">
          <div>
            {mode === "light" ? (
              <div className="hover:bg-green-500 ">
                {" "}
                <MdDarkMode
                  className="text-3xl hover:bg-green-300 hover:cursor-pointer "
                  onClick={changeModeHandler}
                />{" "}
              </div>
            ) : (
              <FiSun
                className="text-3xl cursor-pointer"
                onClick={changeModeHandler}
              />
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
                : "text-gray-700 " ;
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
      </ul>
    </nav>
  );
};

export default Header
