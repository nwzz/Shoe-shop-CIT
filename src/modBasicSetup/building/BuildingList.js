import React from "react";
import { HashLoading } from "../../components/Loading";
import TopHeader from "../../components/TopHeader";
import Layout from "../../components/layout/Layout";
import Error from "../../components/Error";
import { useGetData } from "../../hooks/dataApi";
import EditButton from "../../components/button/EditButton";
import DeleteButton from "../../components/button/DeleteButton";
import { ListHeader, ListCol } from "../../components/ListCol";

const BuildingList = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("buildingsList", "/buildings/list");

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
          title="বাড়ি / বিল্ডিং তালিকা"
          btnSave={true}
          path="/setup/building/add"
        />
        <div className="list-wrapper">
          <div className="md:grid grid-cols-3 list-header">
            <ListHeader label="নাম" />
            <ListHeader label="ঠিকানা" />
            <ListHeader label="" />
          </div>
          {list.data.length > 0 &&
            list.data.map((item) => (
              <div
                key={item.buildingId}
                className="grid grid-cols-1 md:grid-cols-3 list-body"
              >
                <ListCol label="নাম:" value={item.buildingName} />
                <ListCol label="ঠিকানা:" value={item.address} />
                <div>
                  <span className="inline-block md:hidden font-semibold">
                    Action:
                  </span>
                  <div className="flex justify-start md:justify-center space-x-2">
                    <EditButton
                      path={`/setup/building/edit/${item.buildingId}`}
                    />
                    <DeleteButton
                      action={refetch}
                      path={`/buildings/delete/${item.buildingId}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          <div className="list-footer">
            <div className="col-span-10"></div>
            <div className="flex justify-center">
              <span className="font-semibold">মোট : {list.data.length}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuildingList;
