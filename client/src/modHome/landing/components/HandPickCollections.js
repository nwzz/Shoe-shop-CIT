import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    name: "New Styles for cool comfort",
    img: "/images/category/snewker-fest.jpg",
    details:
      "With new style for cool comfort, Slide into the new year because Sneakers comfort is here. ",
    category: "sneakers",
  },
  {
    name: "New Styles for cool comfort",
    img: "/images/category/ladies-shoes.jpg",
    details:
      "With new style for cool comfort, Slide into the new year because Sneakers comfort is here. ",
    category: "ladies-shoes",
  },
  {
    name: "New Styles for cool comfort",
    img: "/images/category/diabetic.jpg",
    details:
      "With new style for cool comfort, Slide into the new year because Sneakers comfort is here. ",
    category: "others",
  },
];

const HandPickCollections = () => {
  return (
    <div className="mt-20 mb-10 border-gray-200 border-b pb-5">
      <div className="mb-10 ">
        <h3 className="text-2xl font-mono font-bold uppercase text-center relative head-liner before:left-40 after:right-40 ">
          Our Hand Picked Collections for You
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7  place-items-center  mt-10 ">
        {data.map((item, index) => (
          <div key={index} className=" border-gray-200 relative group">
            <Link to={`/products/${item.category}`}>
              <div className="overflow-hidden ">
                <img
                  src={item.img}
                  alt=""
                  className="mx-auto transition delay-150 duration-300  group-hover:scale-110 hover:opacity-75  "
                />
                <div className="absolute p-3 left-8 right-8  bottom-25 bg-gray-50 ">
                  <h3 className="text-xl text-center font-semibold font-mono ">
                    {item.name}
                  </h3>
                </div>
                <div>
                  <h3 className="text-xs font-normal mt-24 text-center ">
                    {item.details}
                  </h3>
                </div>
                <div className="mt-3 flex justify-center font-mono font-semibold">
                  <Link to={`/products/${item.category}`} className=" ">
                    Shop Now
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HandPickCollections;
