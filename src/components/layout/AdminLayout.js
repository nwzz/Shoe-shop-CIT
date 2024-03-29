import React from "react";
import Header from "../../modHome/landing/components/Header";

import Sidebar from "./sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen text-white overflow-hidden">
      <div className="grid xl:grid-cols-layout w-full h-screen max-w-screen-3xl mx-auto">
        <div className="hidden xl:block">
          <Sidebar />
        </div>
        <div className="grid grid-rows-layout h-screen overflow-hidden bg-light text-dark">
          {/* <Header/> */}
          <div className="overflow-y-auto">
            <div className="grid grid-cols-1 p-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
