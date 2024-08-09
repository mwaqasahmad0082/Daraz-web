import React from "react";
import { FaCarSide } from "react-icons/fa";

const Collect = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-pink-200 hover:bg-pink-300 h-auto rounded-2xl">
        <ul className="flex flex-col md:flex-row justify-between items-center p-4">
          {[
            { src: "src/images/section1.jpg", text: "Safe Payments" },
            { src: "src/images/section2.jpg", text: "Nationwide Delivery" },
            { src: "src/images/section3.jpg", text: "Free & Easy Return" },
            { src: "src/images/section4.jpg", text: "Best Price Guaranteed" },
            { src: "src/images/section5.jpg", text: "100% Authentic Products" },
            { src: "src/images/section6.jpg", text: "Daraz Verified" },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <li className="flex items-center font-semibold space-x-2 mb-2 md:mb-0">
                <img
                  src={item.src}
                  alt={item.text}
                  className="w-12 h-12 sm:w-6 sm:h-6 object-cover rounded-full"
                />
                <span>{item.text}</span>
              </li>
              {index < 5 && (
                <div className="hidden md:block sm:font-thin  mx-2 text-xl text-gray-500">
                  |
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div className="w-full mt-8 ">
        <div className="flex flex-col md:flex-row h-auto rounded-2xl border-blue-500 border-4 bg-white overflow-hidden">
          <div className="w-full md:w-1/5 flex flex-col items-center justify-between p-4 md:p-6">
            <h1 className="bg-blue-500 text-white text-2xl font-bold p-2 rounded-br-full text-center w-full">
              Limited Usage
            </h1>
            <div className="text-4xl text-blue-500 rounded-full border border-blue-500 p-4 mt-4">
              <FaCarSide />
            </div>
            <div className="font-bold text-center mt-4">
              Selected <br /> Sellers
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col justify-between p-4 md:p-6">
            <h1 className="font-bold text-2xl md:text-4xl text-blue-500">
              Free Shipping
            </h1>
            <h2 className="font-medium text-xl md:text-2xl">
              Min. Spend Rs. 399 <br />
              Capped at Rs. 200
            </h2>
            <h3 className="font-medium text-lg md:text-xl">
              Valid till 31 July 2024
            </h3>
          </div>
          <div className="w-full md:w-1/5 flex flex-col items-center justify-between p-4 md:p-6">
            <h1 className="bg-slate-200 text-blue-500 text-xl font-bold rounded-full w-28 h-16 flex items-center justify-center">
              T&C
            </h1>
            <button className="bg-blue-500 w-full md:w-48 p-3 rounded-2xl text-2xl font-bold text-white mt-4">
              Collect NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collect;
