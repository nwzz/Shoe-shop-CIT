import React from "react";
import { Link } from "react-router-dom";

const shop = [
  {
    title: "Bata",
    to: "/product-category/living/sofa-collection/sofa-sets",
  },
  {
    title: "Power",
    to: "/product-category/living/sofa-collection/corner-sofa",
  },
  {
    title: "Hush Pupies",
    to: "/product-category/living/sofa-collection/chairs",
  },
  {
    title: "Bata Comfit",
    to: "/product-category/bed-room/bed-room-furniture/bed-room-set",
  },
  {
    title: "Marie Claire",
    to: "/product-category/dining",
  },
  {
    title: "North Star",
    to: "/product-category/deails",
  },
  {
    title: "Weibbener",
    to: "/product-category/bed-room/bed-room-furniture/beds-headboards",
  },
  {
    title: "New Arrivals",
    to: "/product-category/new-arrivals",
  },
  {
    title: "Best Seller",
    to: "/product-category/living/others/tv-units",
  },
];

const Footer = () => {
  return (
    <>
      <div className="px-10 py-16 bg-dark text-white">
        <div className="w-56">
          <Link to="/">
            <img src={"/images/bata-logo.png"} alt="Furniture" />
          </Link>
        </div>
        <div className="mt-5 grid gap-2 md:grid-cols-4 md:gap-5">
          <div>
            <a
              href="mailto:webstore@royalgroup.ae"
              className="my-2 block font-medium hover:underline md:text-sm lg:text-lg"
            >
              webstore@batabd.com
            </a>
            <a href="tel:+8801777203618" className="my-2 block font-medium">
              +88 013-07692
            </a>
            <p>
              Bata Store
              <br /> Tongi Industrial Area, Gazipur
            </p>
          </div>
          <div className="md:col-span-2 md:pt-2">
            <h5 className="block font-medium">SHOP</h5>
            <div className="mt-3 grid md:grid-cols-3">
              <ul>
                {shop.slice(0, 3).map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="pb-1 font-normal text-xs capitalize text-white hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                {shop.slice(3, 6).map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="pb-1 font-normal text-xs capitalize text-white hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                {shop.slice(6, 9).map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="pb-1 font-normal text-xs capitalize text-white hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2">
            <div>
              <img src="/images/truck.svg" alt="" />
              <p className="font-normal text-sm capitalize">
                FREE
                <br />
                SHIPPING
              </p>
            </div>
            <div>
              <img src="/images/returns.svg" alt="" />
              <p className="font-normal text-sm capitalize">
                FREE
                <br />
                RETURNS *T&C Apply
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-1 bg-gray-900">
        <p className="text-uppercase  font-weight-bold text-gray-200">
          ©{new Date().getFullYear()}
          <span className="ml-2">reserved by Bata BD</span>
        </p>
        <p className="text-uppercase text-gray-200">
          Developed By
          <a
            href="https://chimbukit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold ml-2"
          >
            <span className="text-green-500">Chimbuk IT</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
