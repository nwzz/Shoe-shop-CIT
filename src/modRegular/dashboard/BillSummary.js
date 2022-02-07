import React from "react";
import { useGetData } from "../../hooks/dataApi";

export default function BillSummary() {
  const { data: list, isLoading } = useGetData(
    "accountingBillSummary",
    "/accounting/billsummary"
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
      <div className="grid grid-cols-4 px-2 rounded-t-lg bg-gray-200">
        <span className="break-words col-span-2 text-sm text-left font-bold">
          খাত
        </span>
        <span className="break-words col-span-1 text-sm text-center font-bold">
          ভাড়াটিয়ার সংখ্যা
        </span>
        <span className="break-words col-span-1 text-sm text-center font-bold">
          মোট টাকা
        </span>
      </div>
      {list.data.length > 0 &&
        list.data.map((item) => (
          <div
            key={item.sl}
            className={`grid grid-cols-4 px-2 ${
              item.sl % 2 === 0 && "bg-gray-100"
            }`}
          >
            <span className="text-sm text-left col-span-2">
              {item.accountName}
            </span>
            <span className="text-right col-span-1">{item.totalTenant}</span>
            <span className="text-right col-span-1">{item.totalAmount}</span>
          </div>
        ))}
    </div>
  );
}
