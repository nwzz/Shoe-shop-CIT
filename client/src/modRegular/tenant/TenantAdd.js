import React from "react";
import Layout from "../../components/layout/Layout";
import TopHeader from "../../components/TopHeader";
import TenantForm from "./TenantForm";

const TenantAdd = () => {
  const defaultValues = {
    tenantId: "",
    tenantName: "",
    fatherName: "",
    motherName: "",
    presentAddress: "",
    permanentAddress: "",
    nidNumber: "",
    contactNumber: "",
    email: "",
    emergencyContactPerson: "",
    emergencyContactNumber: "",
    totalMember: "",
  };
  return (
    <Layout>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="ভাড়াটিয়া" btnSave={false} path="/tenant/list" />
        <TenantForm
          defaultValues={defaultValues}
          action={() => {}}
          btnText="সেভ"
          path="/tenants/create"
          returnPath="/tenant/list"
        />
      </div>
    </Layout>
  );
};

export default TenantAdd;
