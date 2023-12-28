import React, { useRef, useState } from 'react'
import { mediaUrl } from '../utils/constants';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
const HomePageCarousel = ({ bannerData, itemData }) => {
  console.log(itemData)
  const settings = {
    infinite: true,
    className: "slider variable-width",
    speed: 450,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
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
      <div className="">
        <div className="font-bold flex items-center justify-between pb-3 lg:pr-8 mt-4 ">
          <h1 className="lg:text-2xl font-bold lg:pl-2 ">
            What's on your mind?
          </h1>
          <div
            className="flex lg:gap-5 h-full justify-end pr-3 lg:pr-8 lg:pt-3 hover:cursor-pointer
        "
          >
            <FaArrowLeft
              onClick={() => sliderRef.current.slickPrev()}
              className="lg:text-4xl text-2xl bg-gray-300  rounded-full p-2 text-slate-600 hover:text-white hover:bg-slate-600 transition-all duration-1000 ease-in-out"
            />

            {
              <FaArrowRight
                className="lg:text-4xl text-2xl bg-gray-300  rounded-full p-2 text-slate-600 hover:text-white hover:bg-slate-600 transition-all duration-1000 ease-in-out"
                onClick={() => sliderRef.current.slickNext()}
              />
            }
          </div>
        </div>

        <div className="bg-transparent">
          <Slider ref={sliderRef} {...settings}>
            {itemData &&
              itemData.map((data) => (
                <div
                  key={data.id}
                  onClick={() => getCategoryData(data.action.link)}
                >
                  <img
                    src={`${mediaUrl}${data.imageId}`}
                    className="pr-4 dark:pr-2 object-cover rounded-2xl overflow-hidden "
                    alt=""
                  />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel
