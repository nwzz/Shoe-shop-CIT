import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Ladies Heels",
    img: "https://cdn.shopify.com/s/files/1/2287/9679/files/ladies-heel_642edca2-1345-4dfb-98a7-bdf2a0c0a8e2_800x800_crop_center.jpg?v=1630478528",
    details:
      "Specially Constructed Selection of Sensitive Feet Shoes by SCHOLL - JUST LANDED!!! Diabetes patients in Bangladesh have reached around 8.3 million countrywide, posing a big challenge to the health system, according to the data of...",
    category: "ladies",
  },
  {
    name: "Men's Formal",
    img: "https://cdn.shopify.com/s/files/1/2287/9679/files/men_s-formal_b6f7d850-567c-46fd-81a4-08ccf43d6ade_800x800_crop_center.jpg?v=1630478507",
    details:
      "Specially Constructed Selection of Sensitive Feet Shoes by SCHOLL - JUST LANDED!!! Diabetes patients in Bangladesh have reached around 8.3 million countrywide, posing a big challenge to the health system, according to the data of...",
    category: "men",
  },
  {
    name: "Ladies ladies Bag",
    img: "https://cdn.shopify.com/s/files/1/2287/9679/files/ladies-bag_f6c513a6-3949-4cdb-812c-bf6b13830616_800x800_crop_center.jpg?v=1630478548",
    details:
      "Specially Constructed Selection of Sensitive Feet Shoes by SCHOLL - JUST LANDED!!! Diabetes patients in Bangladesh have reached around 8.3 million countrywide, posing a big challenge to the health system, according to the data of...",
    category: "ladies",
  },
];

const FavouritePick = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="mb-10">
        <h3 className="text-2xl font-mono font-bold uppercase text-center">
          Our Hand Picked Collections for You
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7  place-items-center  mt-10 ">
        {data.map((item, index) => (
          <div key={index} className=" border-gray-200 relative group">
            <Link to={`/products/${item.category}`}>
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="relative transition delay-150 duration-300  group-hover:scale-110 hover:opacity-75"
                />
                <div className="absolute p-3 left-8 right-8  bottom-25 bg-gray-50 ">
                  <h3 className="text-xl text-center font-semibold font-mono ">
                    {item.name}
                  </h3>
                </div>
                <div className="lg:px-5">
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

export default FavouritePick;
