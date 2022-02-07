import React from "react";
import { useParams } from "react-router";
import Error from "../../components/Error";
import { HashLoading } from "../../components/Loading";
import { useGetData } from "../../hooks/dataApi";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { ListCol, ListHeader } from "../../components/ListCol";
import { HiOutlineHome } from "react-icons/hi";
import { format } from "date-fns";

const TenantLedger = () => {
  const { id } = useParams();
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("tenantsLedger", `/tenants/ledger/${id}`);

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

  let sumDr = 0;
  let sumCr = 0;
  let balance = 0;

  if (list.data.length > 0) {
    sumDr = list.data.map((item) => item.dr).reduce((sum, val) => sum + val, 0);
    sumCr = list.data.map((item) => item.cr).reduce((sum, val) => sum + val, 0);
  }

  balance = sumDr - sumCr;

  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <div className="flex justify-between item-center align-middle px-0 mb-2">
          <Link
            to="/dashboard"
            className="text-2xl font-medium flex items-center space-x-2 transform duration-500 hover:-translate-y-1"
          >
            <HiOutlineHome size={30} />
            <span className="hidden md:block">ড্যাশবোর্ড</span>
          </Link>
          <div className="text-2xl font-medium flex items-center">
            ভাড়াটিয়ার বই
          </div>
        </div>
        <div className="list-wrapper">
          <div className="md:grid grid-cols-6 list-header">
            <ListHeader label="তারিখ" />
            <ListHeader label="নং" />
            <ListHeader label="বিবরণ" />
            <ListHeader label="দেনা" className="flex justify-end" />
            <ListHeader label="জমা" className="flex justify-end" />
            <ListHeader label="ব্যালান্স" className="flex justify-end" />
          </div>
          {list.data.map((item) => (
            <div
              key={item}
              className="grid grid-cols-1 md:grid-cols-6 list-body"
            >
              <ListCol
                label="তারিখ : "
                value={format(new Date(item.workDate), "dd/MMM/yyyy")}
              />
              <ListCol label="নং : " value={item.voucherNumber} />
              <ListCol label="বিবরণ :  " value={item.particulars} />
              <ListCol
                label="দেনা :  "
                value={item.dr}
                className="flex justify-start md:justify-end"
              />
              <ListCol
                label="জমা :  "
                value={item.cr}
                className="flex justify-start md:justify-end"
              />
            </div>
          ))}
          <div className="list-footer font-bold">
            <div className="grid grid-cols-1 md:grid-cols-6">
              <span className="col-span-3 hidden md:block pr-5 text-right">
                মোট
              </span>
              <ListCol
                label="মোট দেনা :  "
                value={sumDr}
                className="flex justify-start md:justify-end"
              />
              <ListCol
                label="মোট জমা :  "
                value={sumCr}
                className="flex justify-start md:justify-end"
              />
              <ListCol
                label="ব্যালান্স :  "
                value={balance >= 0 ? balance : "(" + balance * -1 + ")"}
                className="flex justify-start md:justify-end"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TenantLedger;
