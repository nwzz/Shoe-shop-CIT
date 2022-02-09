import React from "react";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import ProductCategory from "./components/ProductCategory";
import JustLandedProducts from "./components/JustLandedProducts";
import Footer from "./components/Footer";

export default function Landing() {
  return (
    <div>
      <Layout>
        <Banner />

        <ProductCategory />
        <JustLandedProducts />
        {/* <ProductList /> */}
        <Footer />
      </Layout>
    </div>
  );
}
