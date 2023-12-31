import React from 'react'
import { useSelector } from 'react-redux';
import AccordianCategoryCard from '../component/AccordianCategoryCard';
import { MdRemoveShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
  
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()
  return (
    <div className="w-full min-h-full ">
      <h1 className='text-center mt-5 text-3xl py-5 pb-3
       font-bold tracking-wider '>Cart</h1>
      {cart.length > 0 ? (
        <div className="w-9/12 mx-auto pt-10">
          {cart.map((item, idx) => (
            <AccordianCategoryCard key={idx} itemCard={item} />
          ))}
        </div>
      ) : (
        <div className=" flex flex-col  gap-6 mt-[17rem] w-full items-center justify-center">
          <div className="flex  gap-5 items-center">
            <h1 className="text-3xl font-bold">Cart is empty</h1>
            <MdRemoveShoppingCart className="text-3xl dark:text-white" />
          </div>
          <button
            onClick={() => navigate("/")}
            className = "px-12 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            HOME
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart
