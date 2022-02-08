import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductList = () => {
  return (
    <div className="my-10 grid gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div
          key={index}
          className="h-72 flex flex-col items-center border-gray-200 relative group sm:border-r"
        >
          <Link to={`/product/productid`}>
            <img
              src="https://i.ibb.co/D1VvLpQ/com.jpg"
              alt=""
              className="w-56 h-48 transition delay-150 duration-300 ease-in-out group-hover:scale-125"
            />
          </Link>
          <div className="text-center">
            <Link
              to={`/product/productid`}
              className="text-md text-gray-800 font-medium capitalize"
            >
              Natural passages
            </Link>
            <div className="my-2 flex justify-center gap-x-1">
              <FaStar color="tomato" />
              <FaStar color="tomato" />
              <FaStar color="tomato" />
              <FaRegStar color="tomato" />
              <FaRegStar color="tomato" />
            </div>
            <p className="text-red-500 font-bold">BDT 25000</p>
          </div>
          <div className="absolute top-36 flex gap-x-2 opacity-0 group-hover:opacity-100"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
