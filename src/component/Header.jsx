import React , {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom';
import Hamburger from "hamburger-react";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useRef } from 'react';
import { BsCart2 } from "react-icons/bs";
import { useSelector } from 'react-redux';
const Header = ({ changeModeHandler, mode }) => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);
  function clickHandler(flag) {
    console.log(flag);

    !flag
      ? (navRef.current.style.display = "flex")
      : (navRef.current.style.display = "none");
  }
  const cart = useSelector((state) => state.cart)
  return (
    <nav className=" w-full mb-[4rem] ">
      <div className="fixed top-0 z-10 w-full bg-[whitesmoke]  dark:bg-gradient-to-tr from-zinc-900 to-gray-700 transition-all duration-1000 ease-in-out   ">
        <div className="flex justify-between w-11/12 mx-auto">
          <div className="text-2xl dark:text-green-500 drop-shadow-lg bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent font-extrabold tracking-wider py-3  transition-all duration-1000 ease-in-out  hover:text-red-800">
            Sachin
          </div>
          <div className="lg:w-[48%] md:w-[66%]  w-[75%] py-3 align-middle my-auto">
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
              <NavLink to="/cart" className=" relative flex">
                <BsCart2 className="text-slate-700 text-3xl dark:text-white" />
                {cart.length > 0 && (
                  <p className="absolute top-[-8px] opacity-70 font-bold  right-[-7px] px-[7px]  bg-green-400 rounded-full">
                    {" "}
                    {cart.length}
                  </p>
                )}
              </NavLink>

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
                <div className=" flex items-center gap-4">
                  {" "}
                  <MdDarkMode
                    className="text-2xl hover:bg-green-500 transition-all duration-700 ease-in-out hover:outline-2 hover:rounded-full hover:outline-blue-800 hover:scale-110 hover:outline-dashed hover:cursor-pointer  "
                    onClick={changeModeHandler}
                  />
                  <NavLink to="/cart" className=" relative flex">
                    <BsCart2 className="text-slate-700 text-3xl dark:text-white" />
                    {cart.length > 0 && (
                      <p className="absolute top-[-8px] opacity-70 font-bold  right-[-7px] px-[7px]  bg-green-400 rounded-full">
                        {" "}
                        {cart.length}
                      </p>
                    )}
                  </NavLink>
                </div>
              ) : (
                <div className=" flex items-center gap-4">
                  <FiSun
                    className="text-3xl cursor-pointer"
                    onClick={changeModeHandler}
                  />
                  <NavLink to="/cart" className=" relative flex">
                    <BsCart2 className="text-slate-700 text-3xl dark:text-white" />
                    {cart.length > 0 && (
                      <p className="absolute top-[-8px] opacity-70 font-bold  right-[-7px] px-[7px]  bg-green-400 rounded-full">
                        {" "}
                        {cart.length}
                      </p>
                    )}
                  </NavLink>
                </div>
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
                  : "text-gray-700 ";
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
      </div>
    </nav>
  );
};

export default Header
