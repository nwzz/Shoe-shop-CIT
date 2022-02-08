import React from "react";
import Slider from "react-slick";

const data = [
  {
    name: "North Star",
    banner:
      "https://cdn.shopify.com/s/files/1/2287/9679/files/NS-web-banner2.jpg?v=1634180451",
    price: 45,
  },
  {
    name: "North Star",
    banner:
      "https://cdn.shopify.com/s/files/1/2287/9679/files/weinbrenner-web-banner.jpg?v=1634098552",
    price: 45,
  },
  {
    name: "North Star",
    banner:
      "https://cdn.shopify.com/s/files/1/2287/9679/files/MC-web-banner.jpg?v=1634127036",
    price: 45,
  },
  {
    name: "Power",
    banner:
      "https://cdn.shopify.com/s/files/1/2287/9679/files/HP-web-banner_617d82b6-318a-4d81-a302-84fa2cb935bd.jpg?v=1634098215",
    price: 50,
  },
];

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const Banner = () => {
  // const navigate = useNavigate();
  // const {
  //   data: list,
  //   error,
  //   isLoading,
  //   isError,
  // } = useGetData("products", "/banner-product-list");

  // if (isLoading) return <HashLoading />;

  // if (isError) return <Error message={error.message} />;

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className=" relative">
            <img
              src={item.banner}
              alt={item.name}
              className="w-full h-72 lg:h-100"
            />
            <div className="h-full absolute top-0 left-0 px-7 flex items-center">
              <div>
                <h2 className="font-bold text-5xl text-white w-80">
                  {item.name}
                </h2>
                <p className="text-white my-5">
                  Starting at
                  <span className="font-semibold text-3xl text-red-200 ml-2">
                    BDT {item.price}
                  </span>
                </p>
                <button type="button" className="btn btn-dark tracking-widest	">
                  SHOPPING NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
