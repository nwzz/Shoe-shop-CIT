import React from "react";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
//import ProductList from "./components/ProductList";
import ProductCategory from "./components/ProductCategory";
//import JustLandedProducts from "./components/JustLandedProducts";
import Footer from "./components/Footer";
//import NavbarTwo from "./components/NavbarTwo";
import HandPickCollections from "./components/HandPickCollections";
import FavouritePick from "./components/FavouritePick";
import FeaturedProducts from "./components/FeaturedProducts";
import Partner from "./components/Partner";

import Voucher from "./components/Voucher";
import BestSeller from "./components/BestSeller";
import DesktopNavbar from "../../components/layout/Header/desktopNavabar/DesktopNavbar";
import JustLanded from "./components/JustLanded";
//import NavbarThree from "./components/NavbarThree";

export default function Landing() {
  return (
    <div>
      <Layout>
        {/* <NavbarTwo /> */}
        {/* <NavbarThree /> */}
        <DesktopNavbar/>
        <Banner />
        <div className="layout-padding">
         
          <ProductCategory />
          <JustLanded />
          <Voucher />
          <BestSeller />
          <HandPickCollections />
          <FeaturedProducts />
          <FavouritePick />
          <Partner />
        </div>

        <Footer />
      </Layout>
    </div>
  );
}
