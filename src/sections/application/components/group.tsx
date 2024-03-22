import { Bank, BankConfig } from "@/configs";
import React, { useEffect } from "react";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { LeadLogo } from "../../../components/leadLogo";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { DetailViewer } from "../../../components/leadCard";
import { Icon } from "@iconify/react";
import InputsField from "./inputsField";
import { GroupProps } from "./type";
import { CustomerDetailCard } from "./customer-detail-card";
import { useToast } from "../../../components/ui/use-toast";

function Group(props: GroupProps) {
  const { config, group, setGroup, setData, data, selectedBank, setRequestOtp, requestOtp } = props;
  const { toast } = useToast();
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

  const handleNextClick = () => {
    // verifyall the non isOptional fields are filled
    const isOptional = config.input_fields.filter((field) => field.group === group && field.isOptional !== true);
    const isFilled = isOptional.every((field) => data[field.input_field_id as keyof typeof data]);

    if (!isFilled) {
      toast({
        title: "Error",
        description: "Please fill all the required fields",
        variant: "destructive",
      });
      return;
    }
    if (requestOtp.next) setRequestOtp({ next: false, view: true });
    setGroup(group + 1);
  };

  const handleBackClick = () => {
    setGroup(group - 1);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {group >= 2 && <CustomerDetailCard name={selectedBank.name} />}
        <h3 className="text-lg font-semibold py-1">{groupFinder?.group_name.en}</h3>
      </div>

      {config &&
        config.input_fields.map((field) => {
          if (field.group !== group) return null;

          //  TODO handle Bussiness logic for otp Verification

          return (
            <div key={field.input_field_id} className="w-full flex flex-col gap-1">
              <Label className="text-md ">{field.label.en}</Label>
              {/* {field.input_field_type !== "file" && <p className="text-md">{field.description.en}</p>} */}
              <InputsField
                placeholder={field.description.en}
                name={field.input_field_id}
                inputType={field.input_field_type}
                data={data}
                setData={setData}
                {...(field.input_field_type === "radio" && {
                  options: field.options,
                })}
              />
            </div>
          );
        })}
      <div className="flex absolute bottom-7 w-full gap-3 left-1/2 -translate-x-1/2 p-4 ">
        <Button variant="outline" className="w-1/2 h-[3rem]" onClick={() => handleBackClick()}>
          Back
        </Button>
        <Button variant="default" className="w-1/2 h-[3rem]" onClick={() => handleNextClick()}>
          Continue
        </Button>
      </div>
    </>
  );
}

export default Group;

const VehicleCard = ({ bank, vechicle, cost }: { bank: string; vechicle: string; cost: string }) => <Card></Card>;
