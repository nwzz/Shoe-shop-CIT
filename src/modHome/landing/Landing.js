import React from "react";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import ProductCategory from "./components/ProductCategory";
import JustLandedProducts from "./components/JustLandedProducts";
import Footer from "./components/Footer";
import NavbarTwo from "./components/NavbarTwo";
import SwipeToSlide from "./components/SwipeToSlide";
import HandPickCollections from "./components/HandPickCollections";

export default function Landing() {
  return (
    <div>
      <Layout>
        <NavbarTwo />
        <Banner />
        <div className="layout-padding">
          <ProductCategory />
          {/* <JustLandedProducts /> */}
          <SwipeToSlide />
          {/* <ProductList /> */}
          <HandPickCollections />
        </div>

        <Footer />
      </Layout>
    </div>
  );
}
