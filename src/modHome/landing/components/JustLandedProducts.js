import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = [
  {
    name: "NORTH STAR",
    brandName: "NORTH START TURBO SNEAKERS",
    imgOne:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/36_300x.jpg?v=1641201671",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/18_300x.jpg?v=1641201671",
    oldPrice: "4000.00",
    currentPrice: "3000.00",
  },
  {
    name: "NORTH STAR",
    brandName: "NORTH START TURBO SNEAKERS",
    imgOne:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/36_300x.jpg?v=1641201671",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/18_300x.jpg?v=1641201671",
    oldPrice: "4000.00",
    currentPrice: "3000.00",
  },
  {
    name: "NORTH STAR",
    brandName: "NORTH START TURBO SNEAKERS",
    imgOne:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/36_300x.jpg?v=1641201671",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/18_300x.jpg?v=1641201671",
    oldPrice: "4000.00",
    currentPrice: "3000.00",
  },
  {
    name: "NORTH STAR",
    brandName: "NORTH START TURBO SNEAKERS",
    imgOne:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/36_300x.jpg?v=1641201671",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/18_300x.jpg?v=1641201671",
    oldPrice: "4000.00",
    currentPrice: "3000.00",
  },
  {
    name: "NORTH STAR",
    brandName: "NORTH START TURBO SNEAKERS",
    imgOne:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/36_300x.jpg?v=1641201671",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/2287/9679/products/18_300x.jpg?v=1641201671",
    oldPrice: "4000.00",
    currentPrice: "3000.00",
  },
];

const JustLandedProducts = () => {
  return (
    <div className="mt-10 mb-10">
      <div>
        <h3 className="text-2xl font-mono font-bold text-center">
          Just Landed
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  font-mono mt-10">
        {data.map((item, index) => (
          <div className="relative p-5 transform duration-300  cursor-pointer  hover:shadow-md group border-gray-300 rounded-md group hover:border-2">
            <div className="absolute top-4 z-10 right-4 hidden group-hover:block ">
              <AiOutlineHeart size={24} />
            </div>
            <div className="relative overflow-hidden">
              <img className="absolute" src={item.imgOne} alt="" />

              <img
                className="relative transform duration-500 group-hover:opacity-0"
                src={item.imgTwo}
                alt=""
              />
            </div>
            <div className="text-center ">
              <h3 className="font-semibold text-base pb-2">{item.name}</h3>
              <h3 className="font-thin text-xs pb-2 ">{item.brandName}</h3>

              <div className="my-2 flex justify-center gap-x-1 pb-2">
                <FaStar color="goldenRod" />
                <FaStar color="goldenRod" />
                <FaStar color="goldenRod" />
                <FaRegStar color="goldenRod" />
                <FaRegStar color="goldenRod" />
              </div>
              <h3 className="text-red-600 font-sans font-semibold">
                Tk {item.currentPrice}
              </h3>
            </div>

            <Link
              to="/"
              className="hidden rounded-sm bg-black text-white hover:bg-red-600 py-2 px-12 mt-3 group-hover:flex group-hover:justify-center"
            >
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustLandedProducts;
