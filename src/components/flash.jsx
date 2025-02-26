import React from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/slices/cart";

const FlashSale = () => {
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      img: "src/images/flash1.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 122,
      lastPrice: "Rs.133 -64%",
    },
    {
      id: 2,
      img: "src/images/flash2.jpg",
      title: "M 10 & M 90 & i 12 black double wireless 2 Airpad...",
      price: 770,
      lastPrice: "Rs.799 -74%",
    },
    {
      id: 3,
      img: "src/images/flash3.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 123,
      lastPrice: "Rs.133 -64%",
    },
    {
      id: 4,
      img: "src/images/flash4.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 175,
      lastPrice: "Rs.256 -31%",
    },
    {
      id: 5,
      img: "src/images/flash5.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 333,
      lastPrice: "Rs.500 -33%",
    },
    {
      id: 6,
      img: "src/images/just9.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 155,
      lastPrice: "Rs.200 -23%",
    },
    {
      id: 7,
      img: "src/images/cat2.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 155,
      lastPrice: "Rs.200 -23%",
    },
    {
      id: 8,
      img: "src/images/cat1.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 155,
      lastPrice: "Rs.200 -23%",
    },
    {
      id: 9,
      img: "src/images/cat3.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 155,
      lastPrice: "Rs.200 -23%",
    },
    {
      id: 10,
      img: "src/images/cat4.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 155,
      lastPrice: "Rs.200 -23%",
    },
    {
      id: 11,
      img: "src/images/cat5.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 155,
      lastPrice: "Rs.200 -23%",
    },
    {
      id: 12,
      img: "src/images/cat6.jpg",
      title: "Lorem ipsum dolor, sit amet.",
      price: 155,
      lastPrice: "Rs.200 -23%",
    },
  ];

  return (
    <div className="w-full mt-6">
      <div className="mx-4 md:mx-10 lg:mx-40">
        <h1 className="text-2xl text-slate-500 mb-4">Flash Sale</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white border-2 border-slate-200 p-2 mb-6 items-center">
          <div className="text-red-800 text-sm col-span-1">On Sale Now</div>
          <div className="col-span-1">Ending In</div>
          <div className="col-span-2 flex justify-end">
            <button className="border-2 border-red-800 text-red-800 p-2 font-medium rounded-lg text-xs md:text-sm lg:text-base">
              SHOP MORE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white h-auto p-2 border border-slate-200 rounded-lg hover:shadow-lg"
            >
              <img
                src={item.img}
                alt={item.description}
                className="w-full h-40 object-cover mb-2"
              />
              <p className="text-sm text-gray-600 mb-1">{item.title}</p>
              <button
                onClick={() => dispatch(addCartItems(item))}
                className="bg-blue-800 p-2 rounded-lg text-sm hover:bg-blue-700 text-white"
              >
                ADD T0 CART
              </button>
              <h5 className="text-orange-500 font-bold">{item.price}</h5>
              <h6 className="text-gray-500">{item.lastPrice}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
