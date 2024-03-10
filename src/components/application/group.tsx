import { Bank, BankConfig } from "@/configs";
import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { LeadLogo } from "../leadLogo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DetailViewer } from "../leadCard";
import { Icon } from "@iconify/react";
import InputsField from "./inputsField";
import { GroupProps } from "./type";
import { CustomerDetailCard } from "./customer-detail-card";

function Group(props: GroupProps) {
  const { config, group, setGroup, setData, data, selectedBank, setRequestOtp, requestOtp } = props;

  const handleNextClick = () => {
    if (requestOtp.next) setRequestOtp({ next: false, view: true });
    setGroup(group + 1);
  };

  const handleBackClick = () => {
    setGroup(group - 1);
  };

  useEffect(() => {
    const isVerificationRequired = config?.input_fields.find((field) => field.group === group && field.verificationRequired === true);
    if (isVerificationRequired) {
      setRequestOtp({ next: true, view: false });
    } else {
      setRequestOtp({ next: false, view: false });
    }
  }, [config, group, setRequestOtp]);

  if (!config) return null;
  const groupFinder = config.input_fields.find((field) => field.group === group);

  return (
    <>
      <div className="flex flex-col gap-4">
        {group >= 2 && <CustomerDetailCard name={selectedBank.name} />}
        <h3 className="text-xl font-semibold py-3">{groupFinder?.group_name.en}</h3>
      </div>

      {config &&
        config.input_fields.map((field) => {
          if (field.group !== group) return null;

          //  TODO handle Bussiness logic for otp Verification
          return (
            <div className="w-full flex flex-col gap-1">
              <Label className="text-md font-bold">{field.label.en}</Label>
              {/* {field.input_field_type !== "file" && <p className="text-md">{field.description.en}</p>} */}
              <InputsField
                placeholder={field.description.en}
                name={field.input_field_id}
                inputType={field.input_field_type}
                data={data}
                setData={setData}
              />
            </div>
          );
        })}
      <div className="flex absolute bottom-0 w-full gap-3 left-1/2 -translate-x-1/2 p-3 ">
        <Button variant="outline" className="flex-grow" onClick={() => handleBackClick()}>
          Back
        </Button>
        <Button variant="default" className="flex-grow" onClick={() => handleNextClick()}>
          Continue
        </Button>
      </div>
    </>
  );
}

export default Group;

const VehicleCard = ({ bank, vechicle, cost }: { bank: string; vechicle: string; cost: string }) => <Card></Card>;
