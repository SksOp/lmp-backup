import AuthLayout from "@/layout/auth";
import ResetPassword from "@/sections/auth/reset-password";
import React from "react";

function Page() {
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
}

export default Page;
