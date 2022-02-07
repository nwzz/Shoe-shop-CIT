import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { usePostData } from "../../hooks/dataApi";
import Input from "../../components/Input";
import SaveButton from "../../components/button/SaveButton";

const schema = yup.object({
  buildingId: yup.string().max(50),
  buildingName: yup.string().required("Required.").max(50),
  address: yup.string().required("Requied!").max(255),
});

const BuildingForm = ({ defaultValues, action, btnText, path, returnPath }) => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const { mutateAsync } = usePostData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const { buildingName, address } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: formData,
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
      <input type="hidden" {...register("buildingId")} />
      <div className="form-col">
        <Input
          name="buildingName"
          label="নাম"
          type="text"
          register={register}
          isAutoFocus={true}
          errorMessage={buildingName?.message}
        />
        <Input
          name="address"
          label="ঠিকানা"
          type="text"
          register={register}
          errorMessage={address?.message}
        />

        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default BuildingForm;
