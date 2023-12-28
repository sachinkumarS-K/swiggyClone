import { FaStar } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addItems , removeItem } from "../redux/cartSlice";
import { useLocation } from "react-router-dom";

const AccordianCategoryCard = ({ itemCard }) => {
  const cart = useSelector((state) => state.cart);
  const location = useLocation();
  //console.log(location.pathname)
  //console.log(cart)
  const dispatch = useDispatch()
     return (
       <div className="flex lg:justify-between relative flow-row gap-4 place-items-start pt-2 mb-4 space-y-2 border-b pb-7">
         <div className="h-full w-full">
           <h1 className="w-11/12 text-left text-lg font-bold">
             {" "}
             {itemCard.card.info.name}{" "}
           </h1>
           <div className="flex items-center gap-2 ">
             <FaIndianRupeeSign />
             <p className="font-bold text-lg ">
               {itemCard.card.info.price
                 ? itemCard.card.info.price / 100
                 : itemCard.card.info.defaultPrice / 100}
             </p>
           </div>
           {itemCard.card.info.ratings.aggregatedRating.rating && (
             <div className="flex items-center gap-2 px-2">
               <FaStar
                 className={
                   parseInt(
                     itemCard.card.info.ratings.aggregatedRating.rating
                   ) >= 3
                     ? "text-green-500"
                     : "text-amber-800"
                 }
               />
               <p className="text-lg font-semibold">
                 {itemCard.card.info.ratings.aggregatedRating.rating} (
                 {itemCard.card.info.ratings.aggregatedRating.ratingCountV2})
               </p>
             </div>
           )}
           <div className="text-gray-400 w-12/12 dark:text-gray-300 px-1 text-justify">
             {itemCard.card.info.description && (
               <p className=" lg:w-6/12 w-full">
                 {itemCard.card.info.description.substring(0, 80)} ......{" "}
               </p>
             )}
           </div>
         </div>
         <div className="w-[90%] h-[160px]  relative md:w-[200px] lg:w-[300px] dark:outline-dotted dark:outline-blue-700 dark:outline-offset-4 dark:shadow-xl dark:shadow-gray-500  rounded-lg overflow-hidden">
           <img
             src={
               itemCard.card.info.imageId
                 ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${itemCard.card.info.imageId}`
                 : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/03cc8ccd152d6daae3afe33eab3450b4`
             }
             alt="Item image"
             className="w-full h-full object-cover "
             loading="lazy"
           />
           {location.pathname === "/cart" ? (
             <button
               onClick={() => dispatch(removeItem(itemCard.card.info.id))}
               className="absolute px-6 py-1 shadow-xl right-[30%] opacity-90 dark:text-black dark:font-semibold top-[75%] bg-green-50 rounded-xl"
             >
               {" "}
               Remove
             </button>
           ) : (
             <button
               onClick={() => dispatch(addItems(itemCard))}
               className="absolute px-6 py-1 shadow-xl right-[30%] opacity-90 dark:text-black dark:font-semibold top-[75%] bg-green-50 rounded-xl"
             >
               {" "}
               ADD
             </button>
           )}
         </div>
       </div>
     );
}

export default AccordianCategoryCard
