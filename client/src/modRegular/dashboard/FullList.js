import React, { useState } from "react";
import { HashLoading } from "../../components/Loading";
import Error from "../../components/Error";
import DashboardHeader from "../../components/DashboardHeader";
import SearchHeader from "../../components/SearchHeader";
import { useGetData } from "../../hooks/dataApi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const FullList = () => {
  const [query, setQuery] = useState("");
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("dashboardFullList", "/dashboard/fullList");

  if (isLoading) return <HashLoading />;

  if (isError) return <Error message={error.message} />;

  return (
    <div className="card w-full max-w-screen-xl">
      <DashboardHeader title="যে ফ্ল্যাট/রুম গুলো ভাড়া হয়েছে" />
      <SearchHeader action={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {list.data
          .filter((item) => {
            if (query === "") {
              return item;
            } else if (
              item.flatName.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
              item.tenantName.toLowerCase().indexOf(query.toLowerCase()) !==
                -1 ||
              item.contactNumber.toLowerCase().indexOf(query.toLowerCase()) !==
                -1
            ) {
              return item;
            } else return null;
          })
          .map((item) => (
            <div
              key={item.flatId}
              className="bg-gray-600 text-white rounded-md shadow-md h-40 grid gap-1 place-content-center transform duration-500 hover:-translate-y-1"
            >
              <div className="text-sm text-center">{item.buildingName}</div>
              <div className="text-sm text-center">{item.flatName}</div>
              <a
                href={`tel:${item.contactNumber}`}
                className="text-sm text-center inline-flex items-center justify-center space-x-2"
              >
                <p className="break-all w-52 flex items-center justify-center space-x-2">
                  <FaPhoneAlt size={20} className="mr-2" /> {item.tenantName}
                </p>
              </a>
              <div className="flex space-x-1 items-center justify-center mt-2">
                <Link
                  to={`/bill/edit/${item.flatId}`}
                  className="text-sm text-center h-14 w-14 p-1 rounded-lg bg-pink-400 hover:bg-pink-700 text-white flex items-center justify-center"
                >
                  বিদ্যুৎ বিল
                </Link>

                <Link
                  to={`/voucher/increase/${item.flatId}`}
                  className="text-sm text-center h-14 w-14 p-1 rounded-lg bg-yellow-400 hover:bg-yellow-700 text-white flex items-center justify-center"
                >
                  পাওনা সমন্বয়
                </Link>
                <Link
                  to={`/voucher/decrease/${item.flatId}`}
                  className="text-sm text-center h-14 w-14 p-1 rounded-lg bg-purple-400 hover:bg-purple-700 text-white flex items-center justify-center"
                >
                  দেনা সমন্বয়
                </Link>
                <Link
                  to={`/voucher/collection/${item.flatId}`}
                  className="text-sm text-center h-14 w-14 p-1 rounded-lg bg-blue-400 hover:bg-blue-700 text-white flex items-center justify-center"
                >
                  পাওনা আদায়
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FullList;
