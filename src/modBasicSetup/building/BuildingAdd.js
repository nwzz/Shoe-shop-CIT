import React from "react";
import TopHeader from "../../components/TopHeader";
import Layout from "../../components/layout/Layout";
import BuildingForm from "./BuildingForm";

const BuildingAdd = () => {
  const defaultValues = {
    buildingId: "",
    buildingName: "",
    address: "",
  };

  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader
          title="বাড়ি / বিল্ডিং তৈরী করুন"
          btnSave={false}
          path="/setup/building/list"
        />
        <BuildingForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="সেভ"
          path="/buildings/create"
          returnPath="/setup/building/list"
        />
      </div>
    </Layout>
  );
};

export default BuildingAdd;
