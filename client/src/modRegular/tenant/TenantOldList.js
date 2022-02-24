import React, { useState } from "react";
import { HashLoading } from "../../components/Loading";
import Error from "../../components/Error";
import Layout from "../../components/layout/Layout";
import { useGetData } from "../../hooks/dataApi";
import EditButton from "../../components/button/EditButton";
import LedgerButton from "../../components/button/LedgerButton";
import DeleteButton from "../../components/button/DeleteButton";
import { ListCol, ListHeader } from "../../components/ListCol";
import DashboardHeader from "../../components/DashboardHeader";
import SearchHeader from "../../components/SearchHeader";
import { format } from "date-fns";

const TenantOldList = () => {
  const [query, setQuery] = useState("");
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("tenantList", "/tenants/oldlist");

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
        <DashboardHeader title="সব ভাড়াটিয়ার তালিকা" />
        <SearchHeader action={setQuery} />
        <div className="list-wrapper">
          <div className="md:grid grid-cols-8 list-header">
            <ListHeader label="বিল্ডিং" />
            <ListHeader label="ফ্লাট / রুম" />
            <ListHeader label="নাম" />
            <ListHeader label="পিতার নাম" />
            <ListHeader label="মোবাইল নাম্বার" />
            <ListHeader label="বাড়িতে উঠার তারিখ" />
            <ListHeader label="চলে যাওয়ার তারিখ" />
            <ListHeader label="" />
          </div>
          {list.data
            .filter((item) => {
              if (query === "") {
                return item;
              } else if (
                item.flatName.toLowerCase().indexOf(query.toLowerCase()) !==
                  -1 ||
                item.tenantName.toLowerCase().indexOf(query.toLowerCase()) !==
                  -1 ||
                item.contactNumber
                  .toLowerCase()
                  .indexOf(query.toLowerCase()) !== -1
              ) {
                return item;
              } else return null;
            })
            .map((item) => (
              <div
                key={item.tenantId}
                className="grid grid-cols-1 md:grid-cols-8 list-body"
              >
                <ListCol label="বিল্ডিং : " value={item.buildingName} />
                <ListCol label="ফ্লাট / রুম : " value={item.flatName} />
                <ListCol label="নাম : " value={item.tenantName} />
                <ListCol label="পিতার নাম : " value={item.fatherName} />
                <ListCol label="মোবাইল নাম্বার : " value={item.contactNumber} />
                <ListCol
                  label="বাড়িতে উঠার তারিখ : "
                  value={format(new Date(item.rentStartDate), "dd/MMM/yyyy")}
                />
                <ListCol
                  label="চলে যাওয়ার তারিখ : "
                  value={
                    item.rentEndDate !== "0001-01-01T00:00:00" &&
                    format(new Date(item.rentEndDate), "dd/MMM/yyyy")
                  }
                />
                <div>
                  <div className="flex justify-start md:justify-center space-x-2">
                    <EditButton path={`/tenant/edit/${item.tenantId}`} />
                    <DeleteButton
                      action={refetch}
                      path={`/flatAllocations/delete/${item.tenantId}`}
                    />
                    <LedgerButton path={`/tenant/ledger/${item.tenantId}`} />
                  </div>
                </div>
              </div>
            ))}
          <div className="list-footer">
            <div className="flex justify-center">
              <span className="font-semibold">মোট : {list.data.length}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TenantOldList;
