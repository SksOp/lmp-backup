import { Icon } from "@iconify/react";
import React from "react";
import { BankConfig, banks } from "@/configs/index";
import { Card } from "@/components/ui/card";
import { View } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { set } from "react-hook-form";
import GroupTwo from "./groupTwo";

function GroupOne({
  config,
  group,
  setGroup,
  setData,
  data,
}: {
  config: BankConfig | null;
  group: number;
  setGroup: (group: number) => void;
  setData: (data: object) => void;
  data: object;
}) {
  const handleOnClick = () => {
    setGroup(2);
  };
  const handleBackClick = () => {
    setGroup(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      {config &&
        config.input_fields?.map(
          (field) =>
            field.group === group && (
              <div className="w-full">
                <Label>{field.label.en}</Label>
                <Input name={field.input_field_id} onChange={handleChange} />
              </div>
            )
        )}
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

export default GroupOne;
