import React from "react";
// import { FcProcess } from "react-icons/fc";
import Layout from "../../components/layout/Layout";
import BillSummary from "./BillSummary";
import FullList from "./FullList";
import OpenMonth from "./OpenMonth";
import Position from "./Position";

export default function Dashboard() {
  return (
    <Layout>
      <div className="mb-5 grid md:grid-cols-3 place-items-stretch gap-3">
        <OpenMonth />
        <Position />
        <BillSummary />
      </div>
      <FullList />
    </Layout>
  );
}
