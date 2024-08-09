import React from "react";
import {
  MdOutlineSportsBasketball,
  MdOutlineSportsEsports,
  MdSportsSoccer,
  MdMobileOff,
} from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FcSportsMode } from "react-icons/fc";
import { FaArrowCircleRight, FaRegUserCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Section = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="hidden md:block border border-inherit w-full md:w-3/12 rounded-2xl bg-white min-w-48">
          <ul className="flex flex-col gap-2 text-sm ml-4 mt-4 bg-white">
            <li className="flex gap-2 items-center text-slate-700">
              <MdOutlineSportsBasketball className="bg-slate-400 rounded-full" />
              Groceries & Pets
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <IoCarSportOutline className="bg-slate-400 rounded-full " />
              Health & Beauty
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <IoCarSportOutline className="bg-slate-400 rounded-full " />
              Men's Fashion
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <MdOutlineSportsEsports className="bg-slate-400 rounded-full" />
              Women's Fashion
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <FaArrowCircleRight className="bg-slate-400 rounded-full " />
              Mother & Baby
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <FaRegCircleUser className="bg-slate-400 rounded-full" />
              Home and Lifestyle
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <FaRegCircleUser className="bg-slate-400 rounded-full " />
              Electronic Devices
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <FaRegUserCircle className="bg-slate-400 rounded-full " />
              Electronic Accessories
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <FcSportsMode className="bg-slate-400 rounded-full" />
              TV & Home Appliances
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <MdSportsSoccer className="bg-slate-400 rounded-full " />
              Sports & Outdoors
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <MdMobileOff className="bg-slate-400 rounded-full " />
              Watches, Bags & Jewellery
            </li>
            <li className="flex gap-2 items-center text-slate-700">
              <IoCarSportOutline className="bg-slate-400 rounded-full" />
              Automobiles & Motorbikes
            </li>
          </ul>
        </div>

        <div className="w-full md:w-4/6 lg:w-9/12 cursor-default overflow-visible">
          <Slider {...settings}>
            <div>
              <img
                src="src/images/slider1.jpg"
                alt="Slider Image 1"
                className="w-full h-auto md:h-96 rounded-2xl"
              />
            </div>
            <div>
              <img
                src="src/images/slider2.jpg"
                alt="Slider Image 2"
                className="w-full h-auto md:h-96 rounded-2xl"
              />
            </div>
            <div>
              <img
                src="src/images/slider3.jpg"
                alt="Slider Image 3"
                className="w-full h-auto md:h-96 rounded-2xl"
              />
            </div>
            <div>
              <img
                src="src/images/slider4.jpg"
                alt="Slider Image 4"
                className="w-full h-auto md:h-96 rounded-2xl"
              />
            </div>
            <div>
              <img
                src="src/images/slider5.jpg"
                alt="Slider Image 5"
                className="w-full h-auto md:h-96 rounded-2xl"
              />
            </div>
            <div>
              <img
                src="src/images/slider6.jpg"
                alt="Slider Image 6"
                className="w-full h-auto md:h-96 rounded-2xl"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Section;
