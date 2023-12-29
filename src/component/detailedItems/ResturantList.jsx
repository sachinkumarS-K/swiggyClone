import React from 'react'
import { mediaUrl } from '../../utils/constants';
import { IoStar } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const ResturantList = ({ resturant }) => {
     console.log(resturant)
     console.log(`${mediaUrl}resturant.card.card?.info?.cloudinaryImageId`)
  return (
    <div className="w-full rounded-xl mt-2 overflow-hidden ">
      <NavLink
        to={`/resturant/${resturant.card.card.info.id}`}
        className="w-full  overflow-hidden p-2 "
      >
        <img
          className=" w-full object-cover h-[200px] shadow-lg  rounded-xl "
          src={`${mediaUrl}${resturant.card.card.info?.cloudinaryImageId}`}
          alt=""
        />
      </NavLink>
      <div className="py-2 px-3">
        <h1 className="font-bold text-xl"> {resturant.card.card.info.name} </h1>
        <div className="flex  items-center">
          <IoStar className="text-green-500 text-xl" />
          <div className="flex gap-2 text-lg font-semibold items-center">
            {" "}
            <p>{resturant.card.card.info.availability.avgRatingString} </p>
            <p> {resturant.card.card.info.sla.slaString} </p>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p> {resturant.card.card.info.cuisines.join(" ")} </p>
          <p> {resturant.card.card.info.areaName} </p>
        </div>
      </div>
    </div>
  );
}

export default ResturantList
