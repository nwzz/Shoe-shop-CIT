import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

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

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
  arrowsToShow: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
  ],
};
// afterChange: function (index) {
//   console.log(
//     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//   );
// },

const SwipeToSlide = () => {
  return (
    <div className="mt-10 mb-10 border-gray-200 border-b pb-5">
      <div className="mb-10 relative head-liner before:left-80 after:right-80 ">
        <h3 className="text-2xl font-mono font-bold uppercase text-center">
          Just Landed
        </h3>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <ProductCard item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SwipeToSlide;
