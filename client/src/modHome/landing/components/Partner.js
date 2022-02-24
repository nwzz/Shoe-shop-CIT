import React from "react";
import Slider from "react-slick";
import { partners } from "../../../data/partners";

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
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

const Partner = () => {
  return (
    <div className="mt-10 mb-5 ">
      <Slider {...settings}>
        {partners.map((item, index) => (
          <div className="">
            <img className="h-12 gap-2" src={item.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
