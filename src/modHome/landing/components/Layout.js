import React from "react";
import Header from "../../../components/layout/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen grid grid-cols-1 grid-rows-layout mx-auto 3xl:max-w-7xl">
      <Header/>
      <div className="grid grid-cols-1 overflow-hidden">
        <div className="overflow-y-auto">
          <div className="grid grid-cols-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
