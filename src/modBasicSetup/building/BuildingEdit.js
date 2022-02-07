import React from "react";
import { useParams } from "react-router";
import Error from "../../components/Error";
import { HashLoading } from "../../components/Loading";
import TopHeader from "../../components/TopHeader";
import { useGetData } from "../../hooks/dataApi";
import Layout from "../../components/layout/Layout";
import BuildingForm from "./BuildingForm";

const BuildingEdit = () => {
  const { id } = useParams();
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("buildingsDetails", `/buildings/details/${id}`);

  if (isLoading)
    return (
      <Layout>
        <HashLoading />
      </Layout>
    );

  if (isError)
    return (
      <Layout>
        <Error message={error.message} />
      </Layout>
    );

  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader
          title="বাড়ি / বিল্ডিং আপডেট করুন"
          btnSave={false}
          path="/setup/building/list"
        />
        <BuildingForm
          defaultValues={{
            buildingId: list.data.buildingId,
            instanceId: list.data.instanceId,
            buildingName: list.data.buildingName,
            email: list.data.email,
            contactNumber: list.data.contactNumber,
            webAddress: list.data.webAddress,
            address: list.data.address,
            currency: list.data.currency,
            weekOff1: list.data.weekOff1,
            weekOff2: list.data.weekOff2,
            nssfEmployerNumber: list.data.nssfEmployerNumber,
            nssfEmployee: list.data.nssfEmployee,
            nssfOwner: list.data.nssfOwner,
            // logo: null,
          }}
          action={refetch}
          btnText="আপডেট"
          path="/buildings/update"
          returnPath="/setup/building/list"
        />
      </div>
    </Layout>
  );
};

export default BuildingEdit;
