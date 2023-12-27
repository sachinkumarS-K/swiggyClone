import React, { useEffect, useState } from 'react'
import Shimmer from '../component/shimmer/Shimmer';
import { resturantData } from "../utils/resturantData"
import {resturantDataApi} from "../utils/constants.js"
import getData from '../hooks/useGetData';
import useOnlineStatus from '../hooks/useOnlineStatus';
import OfflinePage from './OfflinePage';
import ResturantCard from '../component/ResturantCard';
import axios from 'axios';
import HomePageCarousel from '../component/HomePageCarousel.jsx';
const Home = () => {
  const [data, setData] = useState(null);
  const [bannerData, setBannerData] = useState(null);
  const [itemData, setItemData] = useState(null);
  async function fetchData() {
    try {
      const res = await getData(resturantDataApi, "get");
      const res2 = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.565704&lng=85.08308040000001&collection=83649&tags=layout_CCS_Biryni&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      console.log(res.data);
      const resData = res.data.data.cards.filter(
        (c) => c.card?.card?.id === "restaurant_grid_listing"
      );

      const banData = res.data.data.cards.filter(
        (c) => c.card?.card?.id === "topical_banner"
      );
      const itemImg = res.data.data.cards.filter(
        (c) => c.card?.card?.id === "whats_on_your_mind"
      );

      setBannerData(banData[0]?.card.card.gridElements?.infoWithStyle.info);
      setItemData(itemImg[0]?.card.card.gridElements?.infoWithStyle.info);
     
        
      setData(resData[0]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      setData((pre) => [...pre, ...resturantData]);
    } catch (error) {
      alert(error.stack);
      console.log(error);
    }
  }
  
    bannerData &&  console.log(bannerData, itemData);
  const onlineStatus = useOnlineStatus();
  //console.log(onlineStatus)
  
  useEffect(() => {
    fetchData();
  }, [onlineStatus])
  
  if (data === null) {
    return <Shimmer />;
  }
  
  if (!onlineStatus) {
  return <OfflinePage />
  }
console.log(bannerData)
  return (
    <div className="w-[75%] mx-auto sm:w-[80%] lg:w-[85%] md:w-[95%] overflow-hidden ">
      {/* {itemData &&
        itemData.map((data) => {
          let part = data.action.link;
          part = part.split("=")[-1]
          console.log(part);
        })} */}
      <div className=" overflow-hidden">
        {(
          <HomePageCarousel bannerData={bannerData} itemData={itemData} />
        )}
      </div>
      <div className=" py-10 grid   lg:grid-cols-4 justify-items-center gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {data &&
          data.map((card, idx) => <ResturantCard key={idx} card={card} />)}
      </div>
    </div>
  );
}

export default Home
