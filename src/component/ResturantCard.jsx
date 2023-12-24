import React from 'react'
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GiStopwatch } from "react-icons/gi";
function ResturantCard({card}) {
  return (
    <div
      className="object-cover w-full dark:border dark:shadow-lg   flex flex-col shadow-lg  rounded-2xl overflow-hidden  items-center gap-9 justify-between "
    >
      <NavLink
        to={`resturant/${card.info.id}`}
        className="w-full h-[170px] hover:scale-110 transition-all duration-300 "
      >
        <img
          className="w-full h-[200px] hover:scale-100 transition-all duration-200"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${card.info.cloudinaryImageId}`}
          alt=""
        />
      </NavLink>
      <div className="w-full pb-3 lg:px-5 px-3 flex lg:min-h-[120px] max-h-[150px]  gap-2 flex-col justify-self-auto  py-2 tracking-wider">
        <p className="font-bold text-[1.2rem]">
        
          {card.info.name.slice(0, 25)}
        </p>
        <div className="flex gap-2 items-center font-semibold text-base">
          <FaStar className="text-green-400" /> <p> {card.info.avgRating} </p>{" "}
          <p className="flex items-center gap-2">
            {" "}
            <GiStopwatch className="text-green-200 text-xl" />{" "}
            {card.info.sla.slaString}{" "}
          </p>
          <p className="ml-3"> {card.info.sla.lastMileTravelString} </p>
        </div>
        <p className="text-gray-700 dark:opacity-100  dark:text-white opacity-75 text-sm lg:block md:block hidden">
          {" "}
          {card.info.cuisines.join(" , ")}{" "}
        </p>
      </div>
    </div>
  );
}

export default ResturantCard
