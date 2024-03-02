import { Icon } from "@iconify/react";
import React from "react";

function Success() {
  return (
    <div className="w-screen pt-32 flex flex-col justify-center items-center gap-4">
      <Icon icon="ep:success-filled" className="w-20 h-20 text-[#76B456]" />
      <h1 className="text-4xl font-bold">Success</h1>
      <p>You have successfully submitted your Application</p>
    </div>
  );
}

export default Success;
