import React from "react";
import Slider from "react-slick";
import { bestSellerProduct } from "../../../data/bestSellerProduct";
import ProductCard from "./ProductCard";

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
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BestSeller = () => {
  return (
    <div className="mt-10 mb-10 border-gray-200 border-b pb-5">
      <div className="mb-10 relative head-liner before:left-80 after:right-80">
        <h3 className="text-2xl font-mono font-bold uppercase text-center">
          Best seller ever
        </h3>
      </div>
      <Slider {...settings}>
        {bestSellerProduct.map((item, index) => (
          <ProductCard item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default BestSeller;
