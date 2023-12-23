import React, { useEffect, useState } from 'react'
import Shimmer from '../component/shimmer/Shimmer';
import {resturantData} from "../utils/resturantData"
import getData from '../hooks/useGetData';
import useOnlineStatus from '../hooks/useOnlineStatus';
import OfflinePage from './OfflinePage';
import ResturantCard from '../component/ResturantCard';

const Home = () => {
  const [data, setData] = useState(null);
 

  async function fetchData() {
    try {
        const res = await getData(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.565704&lng=85.08308040000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" , "get"
      );
     
      //  const res2 = await axios.get(
      //    "https://www.zomato.com/webroutes/getPage?page_url=/patna/pannalal-kankarbagh/order&location=&isMobile=0"
      //  );
      console.log(res.data);

        console.log(
          res.data.data.cards[5].card.card.gridElements.infoWithStyle
            .restaurants
        );
        setData(
          res.data.data.cards[5].card.card.gridElements.infoWithStyle
            .restaurants
      );
      setData((pre) => [...pre , ...resturantData]); 
    } catch (error) {
      console.log(error)
    }
}
  
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus)
  
  useEffect(() => {
    fetchData();
  }, [onlineStatus])
  
  if (data === null) {
    return <Shimmer/>
  }
  
  if (!onlineStatus) {
  return <OfflinePage />
  }

  return (
    // <div className=" py-10 flex w-[90%]  lg:w-[75%] md:w-[80%] gap-7 items-center lg:flex-row md:flex-row flex-col justify-between mx-auto flex-wrap ">
    <div className=" py-10 grid   lg:grid-cols-4 justify-items-center gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[60%] mx-auto sm:w-[70%] lg:w-[90%] md:w-[95%] ">
      {data &&
        data.map((card, idx) => (
        <ResturantCard key={idx} card={card}  />
        ))}
    </div>
  );
}

export default Home
