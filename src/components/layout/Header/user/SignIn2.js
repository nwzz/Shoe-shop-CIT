import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSignInAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../../hooks/context';
import { usePostData } from '../../../../hooks/dataApi';
import PrimaryButton from '../../../button/PrimaryButton';
import Input from '../../../Input';

const SignIn2 = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
//   const { mutateAsync } = usePostData();
//   const value = useGlobalContext();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [submitting, setSubmitting] = useState(false);

  //let { from } = location.state || { from: { pathname: "/user/my-account" } };

  const onSubmit =  () => {
      console.log('clicked');
    // setSubmitting(true);
    // try {
    //   const { status, data } = await mutateAsync({
    //     // path: "/auth/signin",
    //     // formData: formData,
    //   });
    //   if (status === 200) {
    //     reset();
    //     // value.setUser(data.token);
    //     // navigate.push(from);
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     //toast.error("Response : " + error.response.data.message);
    //   } else if (error.request) {
    //     //toast.error("Request : " + error.message);
    //   } else {
    //     //toast.error("Error :", error.message);
    //   }
    // } finally {
    //   setSubmitting(false);
    // }
  };


  return (
    <div>
      <h3 className="font-medium text-md uppercase text-gray-800">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="my-7">
        <div className="form-col">
          <Input
            name="email"
            type="email"
            placeholder="Email address*"
            register={register}
            
          />
          <Input
            name="password"
            type="password"
            placeholder="Password*"
            register={register}
          />
          <PrimaryButton
            btnText="LOGIN"
            Icon={FaSignInAlt}
            type="submit"
            btnWidth="w-32"
            //disabled={submitting}
          />
        </div>
      </form>
    </div>
  );
}

export default SignIn2