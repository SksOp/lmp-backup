import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BankConfig } from "@/configs";
import React from "react";

function GroupTwo({
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
    setGroup(3);
  };
  const handleBackClick = () => {
    setGroup(1);
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

export default GroupTwo;
