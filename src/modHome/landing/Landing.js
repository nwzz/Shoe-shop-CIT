import React from "react";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";

export default function Landing() {
  return (
    <div>
      <Layout>
        <Banner />
        <ProductList />
      </Layout>
    </div>
  );
}
