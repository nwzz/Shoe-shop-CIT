import React from "react";
import { useParams } from "react-router";
import Error from "../../components/Error";
import { HashLoading } from "../../components/Loading";
import TopHeader from "../../components/TopHeader";
import { useGetData } from "../../hooks/dataApi";
import Layout from "../../components/layout/Layout";
import TenantForm from "./TenantForm";

const TenantEdit = () => {
  const { id } = useParams();
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("tenantsDetails", `/tenants/details/${id}`);

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
          title="ভাড়াটিয়া আপডেট করুন"
          btnSave={false}
          path="/tenant/oldlist"
        />
        <TenantForm
          defaultValues={{
            tenantId: list.data.tenantId,
            tenantName: list.data.tenantName,
            fatherName: list.data.fatherName,
            motherName: list.data.motherName,
            presentAddress: list.data.presentAddress,
            permanentAddress: list.data.permanentAddress,
            nidNumber: list.data.nidNumber,
            dateOfBirth: new Date(Date.parse(list.data.dateOfBirth)),
            contactNumber: list.data.contactNumber,
            email: list.data.email,
            emergencyContactPerson: list.data.emergencyContactPerson,
            emergencyContactNumber: list.data.emergencyContactNumber,
            totalMember: list.data.totalMember,
          }}
          action={refetch}
          btnText="আপডেট"
          path={`/tenants/update/`}
          returnPath="/tenant/oldlist"
        />
      </div>
    </Layout>
  );
};

export default TenantEdit;
