import React from "react";
import { Label } from "../ui/label";
import { OtpView } from "@/sections/auth/reset-password";
import { Button } from "../ui/button";

function GroupOtp({
  group,
  setGroup,
  setData,
  data,
}: {
  group: number;
  setGroup: (group: number) => void;
  setData: (data: object) => void;
  data: object;
}) {
  const handleOnClick = () => {
    setGroup(group + 1);
  };
  const handleBackClick = () => {
    setGroup(group - 1);
  };

  const [otp, setOtp] = React.useState("");
  const onOtpSubmit = async () => {
    console.log(otp);
    //const success = await validateOtp(otp, "phone");
    // if (!success) {
    //   // TODO: Handle error gracefully
    //   return;
    // }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <Label className="text-lg">Enter OTP</Label>
        <OtpView otp={otp} setOtp={setOtp} onOtpSubmit={onOtpSubmit} />
      </div>
      <div className="flex absolute bottom-2 w-full gap-3 left-1/2 -translate-x-1/2 p-3 ">
        <Button variant="outline" className="flex-grow " onClick={() => handleBackClick()}>
          Back
        </Button>
        <Button variant="default" className="flex-grow" onClick={() => handleOnClick()}>
          Continue
        </Button>
      </div>
    </>
  );
}

export default GroupOtp;
