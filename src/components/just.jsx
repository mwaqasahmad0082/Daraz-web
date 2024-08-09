import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { ImStarHalf } from "react-icons/im";
import Cart from "./cart";

const Just = () => {
  const data = [
    {
      img: "src/images/just2.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "Rs.166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/cat15.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.222",
      lastprice: "166",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
    {
      img: "src/images/just4.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/just5.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
    {
      img: "src/images/just6.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/just7.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166 ",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
  ];

  const data2 = [
    {
      img: "src/images/just8.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "Rs.166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/just9.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.222",
      lastprice: "166",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
    {
      img: "src/images/just10.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/cat4.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
    {
      img: "src/images/just12.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/cat3.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166 ",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
  ];
  // ////////////////////////row 3
  const data3 = [
    {
      img: "src/images/cat1.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "Rs.166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/cat13.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.222",
      lastprice: "166",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
    {
      img: "src/images/cat3.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/cat4.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
    {
      img: "src/images/cat5.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/cat14.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166 ",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
  ];
  ////////////////////row 4/////////

  const data4 = [
    {
      img: "src/images/cat7.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "Rs.166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/cat8.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.222",
      lastprice: "166",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
    {
      img: "src/images/cat9.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/cat10.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
    {
      img: "src/images/cat11.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166",
      rating: <RiStarSFill />,
    },
    {
      img: "src/images/cat12.jpg",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "Rs.133",
      lastprice: "166 ",
      rating: <RiStarSFill />,
      halfrating: <ImStarHalf />,
    },
  ];

  return (
    <div className="w-full mt-6 px-4 sm:px-6 lg:px-40">
      <div>
        <div className="text-2xl text-slate-500 mb-4">Just For You</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg hover:shadow-lg">
              <img
                src={item.img}
                alt=""
                className="w-full h-48 object-cover mb-2 rounded "
              />
              <p className="text-sm mb-2">{item.discription}</p>
              <h5 className="text-orange-500 font-bold mb-1">{item.price}</h5>
              <h6 className="text-gray-500 line-through">{item.lastprice}</h6>
              <div className="flex text-yellow-500 mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i}>
                    {i < (item.halfrating ? 5 : 4) ? (
                      <RiStarSFill />
                    ) : (
                      <ImStarHalf />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          {data2.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg hover:shadow-lg">
              <img
                src={item.img}
                alt=""
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <p className="text-sm mb-2">{item.discription}</p>
              <h5 className="text-orange-500 font-bold mb-1">{item.price}</h5>
              <h6 className="text-gray-500 line-through">{item.lastprice}</h6>
              <div className="flex text-yellow-500 mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i}>
                    {i < (item.halfrating ? 5 : 4) ? (
                      <RiStarSFill />
                    ) : (
                      <ImStarHalf />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          {data3.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg hover:shadow-lg">
              <img
                src={item.img}
                alt=""
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <p className="text-sm mb-2">{item.discription}</p>
              <h5 className="text-orange-500 font-bold mb-1">{item.price}</h5>
              <h6 className="text-gray-500 line-through">{item.lastprice}</h6>
              <div className="flex text-yellow-500 mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i}>
                    {i < (item.halfrating ? 5 : 4) ? (
                      <RiStarSFill />
                    ) : (
                      <ImStarHalf />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          {data4.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg hover:shadow-lg">
              <img
                src={item.img}
                alt=""
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <p className="text-sm mb-2">{item.discription}</p>
              <h5 className="text-orange-500 font-bold mb-1">{item.price}</h5>
              <h6 className="text-gray-500 line-through">{item.lastprice}</h6>
              <div className="flex text-yellow-500 mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i}>
                    {i < (item.halfrating ? 5 : 4) ? (
                      <RiStarSFill />
                    ) : (
                      <ImStarHalf />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Just;
