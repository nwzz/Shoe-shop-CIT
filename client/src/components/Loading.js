import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { BarLoader, HashLoader } from "react-spinners";

export const FallbackLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-primary h-screen">
      <img className="h-10 mb-2" src="/images/bata-logo.png" alt="logo" />
      <BarLoader height={4} width={100} color="#FF2800" />
    </div>
  );
};

export const HashLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-primary h-screen">
      <HashLoader height={50} width={50} color="#FF2800" />
    </div>
  );
};

export const PulseLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-primary h-screen">
      <PulseLoading height={50} width={50} color="#FF2800" />
    </div>
  );
};

export const HashLoadingSmall = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-primary">
      <HashLoader height={36} width={50} color="#FF2800" />
    </div>
  );
};

export function Error({ message }) {
  return (
    <div className="flex items-center justify-center text-3xl text-red-500 h-full">
      <FaExclamationCircle size={36} />! {message} !
    </div>
  );
}