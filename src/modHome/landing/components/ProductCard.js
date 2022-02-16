import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="relative p-5 transform duration-300  cursor-pointer  hover:shadow-md group border-gray-300 rounded-md group hover:border lg:h-96">
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
  );
};

export default ProductCard;
