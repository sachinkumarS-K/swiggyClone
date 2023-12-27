import React, { useEffect, useState } from 'react'
import Loader from './loader/Loader'
import { CgUnavailable } from "react-icons/cg";
import { useParams } from 'react-router-dom';

import getData from '../hooks/useGetData';
import ResturantDetailsHeading from './ResturantMenuHeading';
import ResturantCardAccordian from './ResturantCardAccordian';
function ResturantMenu() {
  const [data, setData] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();
  const [categoryData , setCategoryData] = useState([])
  async function fetchData() {
    const res = await getData(
      `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D25.565704%26lng%3D85.08308040000001%26restaurantId%3D${id}%26catalog_qa%3Dundefined%26submitAction%3DENTER`,
      "get"
    );
    console.log(res)
    
    const category = res?.data?.data?.cards[res.data.data.cards.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => {
      
        
        const item =
          c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      

       return item; 
    });
    // const category = res.data.data.cards.map(
    //   (card) => {
    //    return card.groupedCard && card.groupedCard?.cardGroupMap?.REGULAR?.cards
    //   }
    // );
    //console.log(category);
    setCategoryData(category)

    //console.log(res.data.data.cards);
    setData(res.data.data.cards);
  }
  const resData =
    data &&
    data.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
  
    const resOffers =
      data &&
      data.filter(
        (c) =>  c.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle"
      );
  // console.log(resData);
  // console.log(resOffers)

  useEffect(() => {
    fetchData();
  }, []);

  if (data === null) {
    return <Loader/>
  }
      

  return (
    <div className="w-full min-h-screen">
      <ResturantDetailsHeading
        data={resData[0].card.card.info}
        offers={resOffers[0].card.card.gridElements.infoWithStyle.offers}
      />

      <div className="lg:w-[55%] w-[90%]  mx-auto mt-12 dark:bg-gradient-to-tr from-gray-300 to-slate-200 bg-gray-100 overflow-hidden rounded-lg">
        {categoryData.length !== 0 ? (
          categoryData.map((c, idx) => (
            <ResturantCardAccordian
              key={idx}
              card={c.card.card}
              showItem={idx === showIndex ? true : false}
              setShowIndex={(flag) => {
                flag ? setShowIndex(-1) : setShowIndex(idx);
              }}
            />
          ))
        ) : (
          <div className="flex items-center justify-center mt-[6rem] text-2xl gap-5 ">
            <CgUnavailable className="text-red-500 tex3xl" />
            <h1>No item available</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResturantMenu;
