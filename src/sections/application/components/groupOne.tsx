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
  
}: {
  config: BankConfig | null;
  group: number;
  setGroup: (group: number) => void;
}) {

  const handleOnClick = () => {
    setGroup(2);
  };

  return (
    <>
      {
        config && config.input_fields?.map((field) => field.group === group && (
              <Card>
                <Label>{field.label.en}</Label>
                <Input />
              </Card>
          )
        )
      }

      <Button variant="default" className="w-full absolute bottom-2" onClick={() => handleOnClick()}>Continue</Button>

    </>
  );
}

export default GroupOne;
