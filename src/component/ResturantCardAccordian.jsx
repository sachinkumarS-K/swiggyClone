import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

import AccordianCategoryCard from './AccordianCategoryCard';
const ResturantCardAccordian = ({ card }) => {
     const [isOpen , setIsOpen] = useState(true)
  console.log(card)
  
  return (
    <div className="bg-white  dark:bg-gray-700 px-3 py-3 mb-3 rounded-lg">
      <div
        className={`flex justify-between items-center mb-5 ${
          isOpen ? "font-bold" : " text-gray-500"
        } `}
      >
        <h1 className="dark:text-gray-300">
          <p className="lg:text-xl text-[20px] tracking-wide font-bold flex items-center ">
            {card.title}({card.itemCards.length})
          </p>
        </h1>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaMinus className="text-2xl" />
          ) : (
            <TiPlus className="text-2xl" />
          )}
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        {card.itemCards.map((itemCard) => (
          <AccordianCategoryCard
            key={itemCard.card.info.id}
            itemCard={itemCard}
          />
        ))}
      </div>
      {/* <div className="w-full mx-auto py-2 bg-gray-200 -mt-2 rounded-lg"></div> */}
    </div>
  );
}

export default ResturantCardAccordian
