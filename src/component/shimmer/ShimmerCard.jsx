import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
const ShimmerCard = () => {
  return (
    <div className="object-cover w-[280px] min-h-[17rem] bg-gray-200 dark:bg-slate-500 rounded-xl flex flex-col  items-center gap-2 justify-around ">
      <div className="flex items-center justify-center w-full">
        <IoFastFoodOutline className="text-5xl text-slate-500 dark:text-slate-700  " />
      </div>
      <div className="w-full  flex items-center flex-col gap-3">
        <div className="w-[90%] bg-[#bbb] h-[8px] rounded-md  "></div>
        <div className="w-[90%] bg-[#bbb] h-[8px] rounded-md  "></div>
        <div className="w-[90%] bg-[#bbb] h-[8px] rounded-md  "></div>
      </div>
    </div>
  );
}

export default ShimmerCard
