import React from "react";

const NavbarTwo = () => {
  return (
    <div className="bg-gray-200 h-16 hidden lg:block ">
      <div className="flex justify-center gap-10 capitalize items-center">
        <div>
          <h3 className="text-sm font-semibold lg:py-5">MEN</h3>
        </div>
        <div>
          <h3 className="text-sm font-semibold ">WOMEN</h3>
        </div>
        <div>
          <h3 className="text-sm font-semibold ">CHILDREN</h3>
        </div>
        <div>
          <h3 className="text-sm font-semibold ">ACCESSORIES</h3>
        </div>
        <div>
          <h3 className="text-sm font-semibold ">SCHOOL BAG</h3>
        </div>
        <div>
          <h3 className="text-sm font-semibold ">BLOG</h3>
        </div>
      </div>
    </div>
  );
};

export default NavbarTwo;
