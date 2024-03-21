import React from "react";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import Otp from "../../../components/ui/otp";
import { GroupProps } from "./type";
import { set } from "react-hook-form";
import { CustomerDetailCard } from "./customer-detail-card";

function GroupOtp(props: GroupProps) {
  const { config, group, setGroup, setData, data, selectedBank, setRequestOtp, requestOtp } = props;
  //TODO get all the fields from the last group that requires otp verification
  // show the otp field from all the fields
  const [otp, setOtp] = React.useState<number[]>([]);
  if (!config) return null;

  const handleBackClick = () => {
    setGroup(group - 1);
    setRequestOtp({ next: false, view: false });
  };

  const onOtpSubmit = async () => {
    // TODO logic for OTP verification
    setRequestOtp({ next: false, view: false });
  };

  // get no of fields that requires otp verification
  const lastGroup = group - 1;
  const fields = config.input_fields.filter((field) => field.group === lastGroup && field.verificationRequired === true);

  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <CustomerDetailCard name={selectedBank.name} />
        <Label className="text-lg font-semibold py-3">Enter OTP</Label>
        {fields.map((field, index) => {
          return (
            <>
              <Label className="text-sm ">Enter {field.label.en} OTP</Label>
              <p className="text-[0.7rem] opacity-40 mb-2">
                We have sent a 4 digit OTP on {field.label.en} {data[field.input_field_id as keyof typeof data]}. Please enter the OTP to verify
              </p>
              <div className="flex justify-center sm:gap-6 gap-4 ">
                <Otp
                  length={4}
                  otp={otp[index]}
                  onOtpChange={(o: number) =>
                    setOtp((prev) => {
                      prev[index] = o;
                      return [...prev];
                    })
                  }
                  className="h-10 rounded-lg mb-5"
                />
              </div>
            </>
          );
        })}
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
