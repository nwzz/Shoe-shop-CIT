import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import { MdLocationPin } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import SignIn2 from "./user/SignIn2";
import MobileNavbar from "./mobileNavbar";

const Header = () => {
  return (
    <>
      <nav className="max-w-full px-2 sm:px-8 py-1 bg-gray-100">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-4 flex items-center ">
            <div className="hidden lg:flex gap-2 items-center ">
              <MdLocationPin size={32} />
              <h3 className="text-sm">
                FIND A STORE | CUSTOMER CARE: 09678772828
              </h3>
            </div>
          </div>
          <div className="grid lg:col-span-2 place-items-center border-gray-700 border-b-2 lg:border-b-0 relative ">
            <Link to="/" className="flex justify-center pb-2 ">
              <img className="h-10" src="/images/bata-logo.png" alt="logo" />
            </Link>
            <button className="absolute lg:hidden right-2 ">
              {/* <AiOutlineMenu size={32} /> */}
              <MobileNavbar/>
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="flex items-center justify-center gap-x-5 text-lg py-2">
              <div className="flex items-center gap-x-0">
                <Modal
                  title="Create Account"
                  buttonLabel="SIGN IN"
                  children={<SignIn2/>}
                />
                <AiOutlineDown size="16" />
              </div>
              <button className=" px-1 py-1 border-2 border-black  rounded-full text-sm delay-100 hover:bg-black hover:text-red-600 md:px-1.5 md:py-1.5">
                <AiOutlineHeart size={20} />
              </button>
              <button className=" px-1 py-1 border-2 border-black  rounded-full text-sm delay-100 hover:bg-black hover:text-green-600 md:px-1.5 md:py-1.5">
                <BsWhatsapp size={20} />
              </button>
              {/* <div className="">
                <AiOutlineShoppingCart size={36} />
              </div> */}
              <button className="relative px-1 py-1 border-2 border-black  rounded-full text-sm delay-100 hover:bg-black hover:text-gray-100 md:px-1.5 md:py-1.5">
                <AiOutlineShoppingCart size={20} />
                <span className="absolute -top-2 -right-4  bg-red-500 text-white font-medium rounded-full px-2.5 py-1">
                  2
                </span>
              </button>
              <div className=" hidden lg:flex border rounded overflow-hidden">
                <input
                  type="text"
                  className="px-4 py-2"
                  placeholder="Search..."
                />
                <button className="flex items-center justify-center px-4 border-l bg-white">
                  <div className="h-4 w-4 text-gray-700  ">
                    <AiOutlineSearch />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
