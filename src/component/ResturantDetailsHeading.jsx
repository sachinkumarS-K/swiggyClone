import React from 'react'
import { IoStar } from "react-icons/io5";
import { MdTimelapse } from "react-icons/md";
import { mediaUrl } from '../utils/constants';
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { TbDiscount2 } from "react-icons/tb";
const ResturantDetailsHeading = ({ data, offers }) => {
     console.log(offers)
  return (
    <div className="w-6/12 mx-auto mt-20  ">
      <div className="w-full flex justify-between border-b border-gray-300  border-dashed pb-5">
        <div>
          <h1 className="text-lg font-bold"> {data.name} </h1>
          <p className="text-sm opacity-75">{data.cuisines.join(" , ")}</p>
          <div className="flex gap-2 text-sm opacity-75">
            <p> {data.areaName} ,</p>
            <p> {data.sla.lastMileTravelString} </p>
          </div>
        </div>
        <div className="shadow-lg rounded-md p-2">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <IoStar className="text-green-500" />
              <p> {data.avgRatingString} </p>
            </div>
            <div className="w-full border"></div>
            <p className="text-[10px]"> {data.totalRatingsString} </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10 mt-5">
        <div className="flex items-center gap-2">
          <MdTimelapse className="text-2xl" />
          <p className="font-bold"> {data.sla.slaString} </p>
        </div>
        <div className="flex items-center gap-2 ">
          <HiOutlineCurrencyRupee className="text-2xl" />
          <p className="font-bold"> {data.costForTwoMessage} </p>
        </div>
      </div>

      <div className="flex justify-evenly   mt-4">
        {offers.map((offer) => (
          <div key={offer.info.offerIds[0]} className="shadow-lg px-2 py-3 ">
            <div className="flex gap-2 items-center mb-1">
              <img
                src={mediaUrl + offer.info.offerLogo}
                alt=""
                className="w-5"
              />
              <p className="text-[12px]">{offer.info.header}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-[8px]">{offer.info.couponCode} |</p>
              <p className="text-[8px]"> {offer.info.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResturantDetailsHeading
