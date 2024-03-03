import { Bank, BankConfig } from "@/configs";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LeadLogo } from "../leadLogo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Icon } from "@iconify/react";
import InputsField from "./inputsField";
import { ClassValue } from "clsx";

const DetailViewer = ({ title, value, className }: { title: string; value: string; className?: ClassValue }) => {
  return (
    <div className="flex gap-5">
      <p className="text-md  opacity-50">{title}:</p>
      <p className="text-md  ">{value}</p>
    </div>
  );
};

function Group({
  config,
  group,
  setGroup,
  setData,
  data,
  selectedBank,
}: {
  config: BankConfig | null;
  group: number;
  setGroup: (group: number) => void;
  setData: (data: object) => void;
  data: object;
  selectedBank: Bank;
}) {
  const handleOnClick = () => {
    setGroup(group + 1);
  };
  const handleBackClick = () => {
    setGroup(group - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const groupFinder = config?.input_fields.find((field) => field.group === group);

  return (
    <>
      <div className="flex flex-col gap-4">
        {group >= 2 && (
          <Card>
            <CardHeader className="flex flex-row gap-2 py-3 pb-0">
              <LeadLogo imageName={"Camer Will"} />
              <CardTitle className="text-md">Camerson Williamson</CardTitle>
              <Icon icon="mage:verified-check-fill" className="w-6 h-6 text-primary" />
            </CardHeader>
            <CardContent className="py-3 flex flex-col gap-3">
              <DetailViewer title="Bank" value={selectedBank.name} />
              <DetailViewer title="Iqama Number" value="XXXXXXXXXXXX" />
              <DetailViewer title="Driving License" value="XXXXXXXXXXXX" />
            </CardContent>
          </Card>
        )}
        <h3 className="text-3xl font-bold pb-3 ">{groupFinder?.group_name.en}</h3>
      </div>

      {config &&
        config.input_fields?.map(
          (field) =>
            field.group === group && (
              <div className="w-full flex flex-col gap-1">
                <Label className="text-lg">{field.label.en}</Label>
                {/* {field.input_field_type !== "file" && <p className="text-md">{field.description.en}</p>} */}
                <InputsField
                  placeholder={field.description.en}
                  inputName={field.input_field_id}
                  inputType={field.input_field_type}
                  data={data}
                  setData={setData}
                />
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

export default Group;
