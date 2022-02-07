import React from "react";
import { Link } from "react-router-dom";
import { useGetData } from "../../hooks/dataApi";

export default function OpenMonth() {
  const { data: list, isLoading } = useGetData(
    "monthBooksOpenMonth",
    "/monthbooks/openmonth"
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
    <>
      {!(
        list.data.monthBookId === "na" &&
        list.data.billYear === "na" &&
        list.data.billMonth === "na" &&
        list.data.complete === false
      ) ? (
        <div className="bg-white rounded-lg p-3 shadow-lg grid grid-cols-1 gap-1">
          <div className="text-xl font-semibold text-center">
            {list.data.billMonth}, {list.data.billYear}
          </div>
          <div className="text-md text-center">এর কার্যক্রম চলছে</div>

          <div className="flex items-center justify-center space-x-2">
            <Link
              className="btn-teal text-center"
              to={`/bill/due/${list.data.monthBookId}`}
            >
              কাজ শেষ
            </Link>
            <Link
              className="btn-orange text-center"
              to={`/bill/print/${list.data.monthBookId}`}
            >
              বিল প্রিন্ট
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
