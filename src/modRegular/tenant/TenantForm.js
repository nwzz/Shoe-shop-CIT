import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostData } from "../../hooks/dataApi";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import Input from "../../components/Input";
import SaveButton from "../../components/button/SaveButton";
import DatePicker from "../../components/DatePicker";
import moment from "moment";

const schema = yup.object({
  tenantId: yup.string().max(50),
  tenantName: yup.string().required("প্রয়োজন").max(50),
  fatherName: yup.string().required("প্রয়োজন").max(50),
  motherName: yup.string().required("প্রয়োজন").max(50),
  presentAddress: yup.string().required("প্রয়োজন").max(255),
  permanentAddress: yup.string().required("প্রয়োজন").max(255),
  nidNumber: yup.string().required("প্রয়োজন").max(50),
  dateOfBirth: yup.date().required("প্রয়োজন"),
  contactNumber: yup.string().required("প্রয়োজন").max(50),
  email: yup.string().email("ইমেল প্রদান করুন").required("প্রয়োজন").max(50),
  emergencyContactPerson: yup.string().required("প্রয়োজন").max(50),
  emergencyContactNumber: yup.string().required("প্রয়োজন").max(50),
  totalMember: yup
    .number()
    .min(0, "0 এর থেকে বড় বা সমান হতে হবে")
    .typeError("সংখ্যা প্রয়োজন"),
});

const TenantForm = ({ defaultValues, action, btnText, path, returnPath }) => {
  const navigate = useNavigate();
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const {
    tenantName,
    fatherName,
    motherName,
    presentAddress,
    permanentAddress,
    nidNumber,
    dateOfBirth,
    email,
    contactNumber,
    emergencyContactPerson,
    emergencyContactNumber,
    totalMember,
  } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    var data = new FormData();
    data.append("tenantId", formData.tenantId);
    data.append("tenantName", formData.tenantName);
    data.append("fatherName", formData.fatherName);
    data.append("motherName", formData.motherName);
    data.append("presentAddress", formData.presentAddress);
    data.append("permanentAddress", formData.permanentAddress);
    data.append("nidNumber", formData.nidNumber);
    data.append(
      "dateOfBirth",
      moment.utc(formData.dateOfBirth).local().format("YYYY-MM-DD")
    );
    data.append("email", formData.email);
    data.append("contactNumber", formData.contactNumber);
    data.append("emergencyContactPerson", formData.emergencyContactPerson);
    data.append("emergencyContactNumber", formData.emergencyContactNumber);
    data.append("totalMember", formData.totalMember);

    try {
      const { status } = await mutateAsync({
        path: path,
        formData: data,
      });
      if (status === 201) {
        toast.success("Saved successfully!");
        reset();
      }
      if (status === 204) {
        toast.success("Update successful!");
        navigate(returnPath);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      action();
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("tenantId")} />
      <div className="form-col">
        <Input
          name="tenantName"
          label="নাম"
          register={register}
          isAutoFocus={true}
          errorMessage={tenantName?.message}
        />
        <Input
          name="fatherName"
          label="পিতার নাম"
          register={register}
          errorMessage={fatherName?.message}
        />
        <Input
          name="motherName"
          label="মাতার নাম"
          register={register}
          errorMessage={motherName?.message}
        />
        <Input
          name="presentAddress"
          label="বর্তমান ঠিকানা"
          register={register}
          errorMessage={presentAddress?.message}
        />
        <Input
          name="permanentAddress"
          label="স্থায়ী ঠিকানা"
          register={register}
          errorMessage={permanentAddress?.message}
        />
        <Input
          name="nidNumber"
          label="এন আইডি নাম্বার"
          register={register}
          errorMessage={nidNumber?.message}
        />
        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field }) => (
            <DatePicker
              label="জন্ম তারিখ"
              field={field}
              errorMessage={dateOfBirth?.message}
              isRow={false}
            />
          )}
        />
        <Input
          name="contactNumber"
          label="মোবাইল নাম্বার"
          register={register}
          errorMessage={contactNumber?.message}
        />
        <Input
          name="email"
          label="ইমেইল"
          register={register}
          errorMessage={email?.message}
        />
        <Input
          name="emergencyContactPerson"
          label="অভিভাবকের নাম"
          register={register}
          errorMessage={emergencyContactPerson?.message}
        />

        <Input
          name="emergencyContactNumber"
          label="অভিভাবকের মোবাইল নং"
          register={register}
          errorMessage={emergencyContactNumber?.message}
        />
        <Input
          name="totalMember"
          label="পরিবারের সদস্য সংখ্যা"
          register={register}
          errorMessage={totalMember?.message}
        />

        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default TenantForm;
