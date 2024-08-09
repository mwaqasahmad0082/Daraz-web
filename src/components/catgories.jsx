import React from "react";

const Categories = () => {
  const data = [
    { img: "src/images/cat1.jpg", title: "Refrigerator" },
    { img: "src/images/cat2.jpg", title: "Cooking" },
    { img: "src/images/cat3.jpg", title: "Toys & Games" },
    { img: "src/images/cat4.jpg", title: "Toys & Games" },
    { img: "src/images/cat5.jpg", title: "Video Games" },
    { img: "src/images/cat6.jpg", title: "Kitchen Equipment" },
    { img: "src/images/cat7.jpg", title: "Video Games" },
    { img: "src/images/cat8.jpg", title: "Smoking" },
  ];

  const click = [
    { img: "src/images/cat10.jpg", title: "Fashion" },
    { img: "src/images/cat11.jpg", title: "Gadgets" },
    { img: "src/images/cat12.jpg", title: "Electronics" },
    { img: "src/images/cat13.jpg", title: "Headphones" },
    { img: "src/images/cat14.jpg", title: "Stickers" },
    { img: "src/images/cat15.jpg", title: "Headphones" },
    { img: "src/images/cat16.jpg", title: "Gadgets" },
    { img: "src/images/cat3.jpg", title: "Toys & Games" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-40 py-6">
      <h1 className="text-2xl text-slate-500 mb-4">Categories</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6 bg-white border border-slate-200 p-4 rounded-lg">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-slate-200 p-2 rounded-lg hover:shadow-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-20 w-28 object-cover rounded-md mb-2"
            />
            
            <p className="text-sm text-center">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 bg-white border border-slate-200 p-4 rounded-lg">
        {click.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-slate-200 p-2 rounded-lg hover:shadow-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-20 w-28 object-cover rounded-md mb-2"
            />
            <p className="text-sm text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
