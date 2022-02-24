import React from "react";
import { useGetData } from "../../hooks/dataApi";

export default function Position() {
  const { data: list, isLoading } = useGetData(
    "accountingPosition",
    "/accounting/position"
  );

  if (isLoading)
    return (
      <div className="mb-5 grid md:grid-cols-3 place-items-stretch h-40 gap-3 animate-pulse">
        <div className="bg-white rounded-lg p-3 shadow-lg grid grid-cols-1 gap-1">
          <div className="h-6 bg-gray-400 rounded"></div>
          <div className="h-8 bg-gray-400 rounded"></div>
          <div className="flex items-center justify-center space-x-2">
            <div className="rounded-lg shadow-lg bg-gray-400 h-10 w-16"></div>
            <div className="rounded-lg shadow-lg bg-gray-400 h-10 w-16"></div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-white rounded-lg p-1 shadow-lg grid grid-cols-1">
      <div className="flex justify-between px-2 rounded-t-lg bg-gray-200">
        <span className="font-semibold">ক্যাশের অবস্থা</span>
        <span className="font-semibold">টাকা</span>
      </div>
      <div className="flex justify-between px-2 text-yellow-700">
        <span className="font-normal">দিনের শুরুতে : </span>
        <span className="font-normal">{list.data.openningBalance}</span>
      </div>
      <div className="flex justify-between px-2  bg-gray-100 text-blue-700">
        <span className="font-normal">আজকের আদায় : </span>
        <span className="font-normal">{list.data.collections}</span>
      </div>
      <div className="flex justify-between px-2 text-purple-700">
        <span className="font-normal">আজকের খরচ : </span>
        <span className="font-normal">{list.data.expenses}</span>
      </div>
      <div className="flex justify-between px-2 bg-gray-100 text-green-700">
        <span className="font-normal">দিনের শেষে : </span>
        <span className="font-normal">{list.data.closingBalance}</span>
      </div>
      <div className="flex justify-between px-2 text-red-700">
        <span className="font-normal">অনাদায় বিল : </span>
        <span className="font-normal">{list.data.receivablesFromTenant}</span>
      </div>
    </div>
  );
}
