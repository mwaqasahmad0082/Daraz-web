import React from "react";

const Footer = () => {
  const data1 = [
    {
      img: "src/images/footer1.jpg",
      title: "Pakistan",
    },
    {
      img: "src/images/footer2.jpg",
      title: "Bangladesh",
    },
  ];
  const data2 = [
    {
      img: "src/images/footer3.jpg",
      title: "Sri Lanka",
    },
    {
      img: "src/images/footer4.jpg",
      title: "Myanmar",
    },
  ];
  const data3 = [
    {
      img: "src/images/footer5.jpg",
      title: "Nepal",
    },
  ];

  return (
    <div className="w-full mt-8 px-4 sm:px-6 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-full flex justify-center mb-8">
          <div className="flex flex-col text-red-800 text-xs md:text-sm lg:text-base font-medium border-2 border-red-800 p-2">
            <button>LOAD MORE</button>
          </div>
        </div>

        <div>
          <h2 className="text-red-800 text-xl font-medium mb-4">
            Customer Care
          </h2>
          <ul className="font-normal text-sm">
            <li>Help Center</li>
            <li>How to buy</li>
            <li>Corporate</li>
            <li>Return & Refunds</li>
            <li>Daraz Shop</li>
            <li>Contact Us</li>
            <li>Purchase Protection</li>
            <li>Daraz Pick Up Points</li>
          </ul>
          <h2 className="text-red-800 text-xl font-medium mt-8">
            Make Money With Us
          </h2>
          <ul className="font-normal text-sm">
            <li>Daraz University</li>
            <li>Sell on Daraz</li>
            <li>Join Daraz Affiliate Program</li>
          </ul>
        </div>

        <div>
          <h2 className="text-red-800 text-xl font-medium mb-4">Daraz</h2>
          <ul className="font-normal text-sm">
            <li>About us</li>
            <li>Digital Payments</li>
            <li>Daraz Donates</li>
            <li>Daraz Blog</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>NTN Number: 123456</li>
            <li>STRN Number: 5678789</li>
            <li>Online Shopping App</li>
            <li>Online Grocery Shopping</li>
            <li>Daraz Exclusive</li>
          </ul>
        </div>
{/* ////////////////////////////////////////////////////// */}
        <div>
          <h2 className="text-red-800 text-xl font-medium mb-4">
            Daraz International
          </h2>
          {/* {[data1, data2, data3].map((data, index) => (
            <div key={index} className="flex flex-col mb-4">
              {data.map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <img src={item.img} alt="" className="w-10 h-6 mr-2" />
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          ))} */}
          {/* {data1.map((items,index)=>{
            return(
              <div className="flex flex-col">  
                    <img src={items.img} alt="" className="w-4"/>
                    <p className="text-xs">{items.title}</p>
              </div>
            )
          })} */}
          <div className="flex gap-2">
            <img src="src/images/footer1.jpg" alt="" className="w-4 ml-1"/>
            <p className="text-sm">Pakistan</p>
            <img src="src/images/footer2.jpg" alt="" className="w-4 ml-1"/>
            <p className="text-sm">Bangladash</p>
          </div> 

          <div className="flex gap-2 mt-2">
            <img src="src/images/footer3.jpg" alt="" className="w-6"/>
            <p className="text-sm">Srilanka</p>
            <img src="src/images/footer4.jpg" alt="" className="w-6"/>
            <p className="text-sm">Myanmar</p>
          </div>

          <div className="flex gap-2 mt-2">
            <img src="src/images/footer5.jpg" alt="" className="w-6"/>
            <p className="text-sm">Nepal</p>
          </div>



{/* 
          {data2.map((items,index)=>{
            return(
              <div className="">  
                    <img src={items.img} alt="" className="w-6"/>
                    <p className="text-xs">{items.title}</p>
              </div>
            )
          })}
          {data3.map((items,index)=>{
            return(
              <div className="">  
                    <img src={items.img} alt="" className="w-8"/>
                    <p className="text-xs">{items.title}</p>
              </div>
            )
          })} */}

          <h2 className="text-red-800 text-xl font-medium mt-8">
            Payment Methods
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            <img src="src/images/cash1.jpg" alt="" className="w-14 h-10" />
            <img src="src/images/cash2.jpg" alt="" className="w-14 h-10" />
            <img src="src/images/cash3.jpg" alt="" className="w-14 h-10" />
            <img src="src/images/cash4.jpg" alt="" className="w-14 h-10" />
            <img src="src/images/cash5.jpg" alt="" className="w-14 h-10" />
            <img src="src/images/cash6.jpg" alt="" className="w-14 h-10" />
            <img src="src/images/cash7.jpg" alt="" className="w-14 h-10" />
            <img src="src/images/cash8.jpg" alt="" className="w-14 h-10" />
            <img src="src/images/cash9.jpg" alt="" className="w-14 h-10" />
          </div>

          <h2 className="text-red-800 text-xl font-medium mt-8">
            Verified Methods
          </h2>
          <div className="flex gap-2 mt-4">
            <img src="src/images/cash10.jpg" alt="" className="w-14 h-10" />
            <img src="src/images/cash11.jpg" alt="" className="w-14 h-10" />
          </div>
        </div>

        <div>
          <h2 className="text-red-800 text-xl font-medium mb-4">
            Exclusive Deals and Offers
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
            <div className="w-full lg:w-80 mb-4 lg:mb-0">
              <img src="src/images/app4.jpg" alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <img src="src/images/app1.jpg" alt="" className="w-32" />
              <img src="src/images/app2.jpg" alt="" className="w-32" />
              <img src="src/images/app3.jpg" alt="" className="w-32" />
            </div>
          </div>
          <div className="flex flex-wrap  gap-2">
            <img src="src/images/app13.jpg" alt="" className="h-14 w-20" />
            <img src="src/images/app6.jpg" alt="" className="h-14 w-60" />
          </div>
          <h2 className="text-red-800 text-xl font-medium mt-8">Follow Us</h2>
          <div className="flex justify-between gap-4 mt-6">
            <img src="src/images/app7.jpg" alt="" className="h-14 w-14" />
            <img src="src/images/app8.jpg" alt="" className="h-14 w-14" />
            <img src="src/images/app9.jpg" alt="" className="h-14 w-14" />
            <img src="src/images/app10.jpg" alt="" className="h-14 w-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
