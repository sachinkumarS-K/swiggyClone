import React from 'react'
import { useSelector } from 'react-redux';
import AccordianCategoryCard from '../component/AccordianCategoryCard';
import { MdRemoveShoppingCart } from "react-icons/md";
  
const Cart = () => {
     const cart = useSelector((state) => state.cart);
  return (
    <div className="w-full min-h-full ">
      {cart.length > 0 ? (
        <div className="w-9/12 mx-auto pt-10">
          {cart.map((item, idx) => (
            <AccordianCategoryCard key={idx} itemCard={item} />
          ))}
        </div>
      ) : (
        <div className="flex mt-[17rem] w-full items-center justify-center">
          <div className="flex  gap-5 items-center">
            <h1 className="text-3xl font-bold">Cart is empty</h1>
            <MdRemoveShoppingCart className="text-3xl dark:text-white" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart
