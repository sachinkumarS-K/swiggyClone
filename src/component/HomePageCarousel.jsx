import React, { useRef, useState } from 'react'
import { mediaUrl } from '../utils/constants';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomePageCarousel = ({ bannerData, itemData }) => {
  const bannerRef = useRef(null);
  const [active , setActive]= useState(false)
  function crouselHandler() {
    active ?  bannerRef.current.style.transform = "translateX(0)" :  bannerRef.current.style.transform = "translateX(-33%)";
    setActive(!active)
  }
  console.log(itemData)
  const settings = {
    infinite: true,
    className: "slider variable-width",
    speed: 450,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  
  return (
    <div className="mt-5  ">
      {bannerData && (
        <div>
          <div className="font-bold flex items-center justify-between pb-3 pr-8 ">
            <h1 className="lg:text-2xl text-xl font-bold lg:pl-2 lg:pb-4">
              Best offers for you
            </h1>
            <div
              className="flex gap-5 h-full justify-end pt-3 hover:cursor-pointer
        "
            >
              <FaArrowLeft
                onClick={crouselHandler}
                className={`text-3xl bg-gray-300  rounded-full p-2 ${
                  active ? "text-black" : "text-gray-400"
                }`}
              />

              {
                <FaArrowRight
                  className={`text-3xl bg-gray-300  rounded-full p-2 ${
                    active ? "text-gray-400" : "text-black"
                  }`}
                  onClick={crouselHandler}
                />
              }
            </div>
          </div>

          <div
            className="relative transition-all duration-1000 ease-in-out w-[150%]"
            ref={bannerRef}
          >
            <div className="flex absolute -left-15">
              {bannerData.map((data) => (
                <div
                  key={data.id}
                  className="lg:w-[100%] flex w-[13rem] .translate-x-20"
                >
                  <img
                    src={`${mediaUrl}${data.imageId}`}
                    className="pr-4 w-full h-auto"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="">
        <div className="font-bold flex items-center justify-between pb-3 lg:pr-8 mt-4 ">
          <h1 className="lg:text-2xl font-bold lg:pl-2 ">What's on your mind?</h1>
          <div
            className="flex lg:gap-5 h-full justify-end pr-3 lg:pr-14 lg:pt-3 hover:cursor-pointer
        "
          >
            <FaArrowLeft
              onClick={() => sliderRef.current.slickPrev()}
              className="lg:text-4xl text-2xl bg-gray-300  rounded-full p-2 text-black"
            />

            {
              <FaArrowRight
                className="lg:text-4xl text-2xl bg-gray-300  rounded-full p-2 text-black"
                onClick={() => sliderRef.current.slickNext()}
              />
            }
          </div>
        </div>

        <div className="bg-transparent">
          <Slider ref={sliderRef} {...settings}>
            {itemData &&
              itemData.map((data) => (
                <div key={data.id} >
                  <img
                    src={`${mediaUrl}${data.imageId}`}
                    className="pr-4 dark:pr-2 object-cover rounded-2xl overflow-hidden "
                    alt=""
                  />
                </div>
              ))}
          </Slider>
          {console.log(sliderRef.current)}
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel
