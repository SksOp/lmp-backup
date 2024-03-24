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
        <Label className="text-xl font-bold py-3 mt-3 mx-1">Enter OTP</Label>
        {fields.map((field, index) => {
          return (
            <>
              <Label className="text-sm font-bold mt-2 mx-1">Enter {field.label.en} OTP</Label>
              <p className="text-[0.7rem] opacity-60  mx-1">
                We have sent a 4 digit OTP on {field.label.en} {data[field.input_field_id as keyof typeof data]}. Please enter the OTP to verify
              </p>
              <div className="flex justify-center sm:gap-6 gap-2 mx-1">
                <Otp
                  length={4}
                  otp={otp[index]}
                  onOtpChange={(o: number) =>
                    setOtp((prev) => {
                      prev[index] = o;
                      return [...prev];
                    })
                  }
                  className="h-[3.2rem]  rounded-lg mb-1"
                />
              </div>
            </>
          );
        })}
      </div>
      <div className="flex absolute bottom-7 w-full gap-3 left-1/2 -translate-x-1/2 p-4  ">
        <Button variant="outline" className="w-1/2 h-[3rem]" onClick={() => handleBackClick()}>
          Back
        </Button>
        <Button variant="default" className="w-1/2 h-[3rem]" onClick={() => onOtpSubmit()}>
          Continue
        </Button>
      </div>
    </>
  );
}

export default GroupOtp;
