import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Otp from "../ui/otp";

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

  const [otp, setOtp] = React.useState<number>(0);
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
        <Otp length={6} otp={otp} onOtpChange={(o: number) => setOtp(o)} className="h-16 rounded-lg" />
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
