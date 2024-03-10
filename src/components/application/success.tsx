import { Icon } from "@iconify/react";
import React from "react";
import { SuccessIcon } from "../svgs/icon";

function Success() {
  return (
    <div className="w-full pt-32 flex flex-col justify-center items-center gap-4">
      <SuccessIcon />
      <h1 className="text-4xl font-bold">Success</h1>
      <p className="text-center text-sm opacity-50">You have successfully submitted your Application</p>
    </div>
  );
}

export default Success;
