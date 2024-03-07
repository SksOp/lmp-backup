import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Otp from "../ui/otp";
import { GroupProps } from "./type";
import { set } from "react-hook-form";

function GroupOtp(props: GroupProps) {
  const { config, group, setGroup, setData, data, selectedBank, setRequestOtp, requestOtp } = props;
  //TODO get all the fields from the last group that requires otp verification
  // show the otp field from all the fields

  const handleBackClick = () => {
    setGroup(group - 1);
  };

  const [otp, setOtp] = React.useState<number>(0);

  const onOtpSubmit = async () => {
    setRequestOtp({ next: false, view: false });
  };

  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <Label className="text-lg">Enter OTP</Label>
        <div className="flex justify-center sm:gap-6 ">
          <Otp length={6} otp={otp} onOtpChange={(o: number) => setOtp(o)} className="h-16 rounded-lg" />
        </div>
      </div>
      <div className="flex absolute bottom-2 w-full gap-3 left-1/2 -translate-x-1/2 p-3 ">
        <Button variant="outline" className="flex-grow " onClick={() => handleBackClick()}>
          Back
        </Button>
        <Button variant="default" className="flex-grow" onClick={() => onOtpSubmit()}>
          Continue
        </Button>
      </div>
    </>
  );
}

export default GroupOtp;
