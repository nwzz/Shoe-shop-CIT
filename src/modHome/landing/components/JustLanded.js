import React from "react";
import Slider from "react-slick";
import { Error, HashLoading } from "../../../components/Loading";
import justLanded from "../../../data/justLanded";
import { useGetData } from "../../../hooks/dataApi";
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
  ],
};



const JustLanded = () => {
  // const {
  //   data: list,
  //   isLoading,
  //   isError,
  //   error,
  // } = useGetData("products", "/justlanded-list");

  // if (isLoading) return <HashLoading/>;

  // if (isError) return <Error message={error.message} />;

  return (
    <div className="mt-10 mb-10 border-gray-200 border-b pb-5">
      <div className="mb-10 relative head-liner before:left-80 after:right-80 ">
        <h3 className="text-2xl font-mono font-bold uppercase text-center">
          Just Landed
        </h3>
      </div>
      <Slider {...settings}>
        {/* {list.data.map((item, index) => ( */}
        {justLanded.map((item, index) => (
          <ProductCard item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default JustLanded;
