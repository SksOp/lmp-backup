import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BankConfig } from "@/configs";
import React from "react";

function GroupThree({
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
    console.log(data);
    setGroup(4);
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
              <Card>
                <Label>{field.label.en}</Label>
                <Input name={field.input_field_id} onChange={handleChange} />
              </Card>
            )
        )}

      <Button
        variant="default"
        className="w-full absolute bottom-2"
        onClick={() => handleOnClick()}
      >
        Submit
      </Button>
    </>
  );
}

export default GroupThree;
