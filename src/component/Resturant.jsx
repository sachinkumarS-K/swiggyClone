import React, { useEffect, useState } from 'react'
import Loader from '../component/loader/Loader'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

import getData from '../hooks/useGetData';
import ResturantDetailsHeading from './ResturantDetailsHeading';
function Resturant() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  async function fetchData() {
    const res = await getData(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.565704&lng=85.08308040000001&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`,
      "get"
    );
    console.log(res)
    
    const category = res?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
    console.log(category)

    console.log(res.data.data.cards);
    setData(res.data.data.cards);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (data === null) {
    return <Loader/>
  }
      

  return (
    <div className="w-full min-h-screen">
      <ResturantDetailsHeading
        data={data[0].card.card.info}
        offers={data[1].card.card.gridElements.infoWithStyle.offers}
      />

      {/* <div className="">
        <h1 className="text-center dark:text-white font-bold text-3xl text-gray-700 py-3">
          {data[0].card.card.info.name} ,&nbsp; {data[0].card.card.info.city}
        </h1>
        <p className="text-center font-bold text-sm">
          {data[0].card.card.info.cuisines.join(" , ")} &nbsp; &nbsp;{" "}
          {data[0].card.card.info.costForTwoMessage}
        </p>
        <div className="w-full">
          <ul className="flex flex-wrap flex-col w-full px-5 pb-5 space-y-5 mt-12 lg:w-10/12 mx-auto">
            {itemCards.map(
              (card, idx) =>
                card.card.info.imageId && (
                  <div key={idx}>
                    <li className="flex lg:flex-row flex-col-reverse md:flex-row sm:flex-row  items-center gap-5 justify-around">
                      <div className="flex flex-col  justify-center w-[90%]  lg:w-[50%]">
                        <p className="text-lg font-semibold">
                          {card.card.info.name}
                        </p>
                        <p className="flex gap-1 text-lg font-bold items-center align-middle">
                          {" "}
                          <FaIndianRupeeSign />
                          {card.card.info.price / 100 + "..."}
                        </p>
                        <p className="text-gray-700 dark:text-slate-100 opacity-75 lg:block md:block hidden ">
                          {card.card.info.description}
                        </p>
                      </div>
                      <div className=" h-[135px] w-[200px] flex items-center">
                        <img
                          className="rounded-[15px] w-full h-full overflow-hidden"
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${card.card.info.imageId}`}
                          alt="Item image"
                          loading="lazy"
                        />
                      </div>
                    </li>

                    <div className="border border-gray-800 sm:block hidden md:block lg:block lg:w-[85%] mx-auto h-[1px] m-2"></div>
                  </div>
                )
            )}
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Resturant
