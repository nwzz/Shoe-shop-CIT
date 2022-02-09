import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Men's Collection",
    img: "/images/category/men.jpg",
    category: "men",
  },
  {
    name: "WomenMen's Collection",
    img: "/images/category/women.jpg",
    category: "women",
  },
  {
    name: "Kid's Collection",
    img: "/images/category/kid.jpg",
    category: "kid",
  },
  {
    name: "Accesories's Collection",
    img: "/images/category/acc.jpg",
    category: "accessories",
  },
];

const ProductCategory = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center overflow-hidden mt-10">
        {data.map((item, index) => (
          <div key={index} className=" border-gray-200 relative group ">
            <Link to={`/products/${item.category}`}>
              <img
                src={item.img}
                alt=""
                className=" transition delay-150 duration-300 ease-in-out group-hover:scale-110 hover:opacity-75"
              />
            </Link>
          </div>
        ))}
      </div>
      <div className=" mt-10">
        <img className="h-10/12" src="/images/category/voucer.jpg" alt="" />
      </div>
    </>
  );
};

export default ProductCategory;
