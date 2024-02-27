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
}: {
  config: BankConfig | null;
  group: number;
  setGroup: (group: number) => void;
}) {
  const handleOnClick = () => {
    setGroup(3);
  };

  return (
    <>
      {config &&
        config.input_fields?.map(
          (field) =>
            field.group === group && (
              <Card>
                <Label>{field.label.en}</Label>
                <Input />
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
