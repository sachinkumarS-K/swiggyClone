import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams  } from 'react-router-dom'
import ResturantList from '../component/detailedItems/ResturantList';
import Shimmer from ".././component/shimmer/Shimmer"
const ItemDetails = () => {
     const {name , id} = useParams();
     //console.log(name, id);
  const [itemCategory, setCategoryData] = useState([]);
  const [resList , setResList] = useState([])
     async function fetchData() {
          const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.565704&lng=85.08308040000001&collection=${id}&tags=layout_CCS_${name}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
          const res = await axios.get(url);
          console.log(res.data);
          let resData = res.data.data.cards;
       //console.log(resData)
        const resList = resData.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
       console.log(resList);
       setResList(resList)
          resData = resData.filter(
            (c) =>
              c.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead"
          );
          //console.log(resData);
       setCategoryData(resData[0].card.card);
      
     }
     itemCategory && console.log(itemCategory)
     useEffect(() => {
          fetchData();
     }, [])
  if (resList.length == 0) {
    return <Shimmer />
  }
  return (
    <div className=" mt-[8rem] w-full">
      <div className="w-10/12 mx-auto">
        <div className=" flex flex-col gap-4 ">
          <h1 className="text-4xl font-bold tracking-wide">
            {itemCategory.title}
          </h1>
          <p className="text-xl tracking-wide font-semibold text-slate-600">
            {" "}
            {itemCategory.description}{" "}
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-xl font-bold mb-8">Restaurants to explore</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  w-full '>
             {resList.map((res) => (
            <div
              key={res.card.card.info.id}
              
            >
              <ResturantList resturant={res} />
            </div>
          ))}
         </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails
