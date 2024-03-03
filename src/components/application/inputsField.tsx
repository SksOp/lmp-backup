import { brands } from "@/configs/brand-configs/brand";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Honda, Jeep } from "@/configs/brand-configs/models";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { InputFile } from "../ui/input-file";

interface InputFieldProp {
  inputName: string;
  inputType: string;
  data: any;
  setData: (data: object) => void;
}
interface Option {
  name: string;
  logo?: string;
}
interface MultiMediaRadio extends InputFieldProp {
  options: Option[];
}
function RadioMultiMedia(props: MultiMediaRadio) {
  const { inputName, inputType, data, setData, options } = props;
  useEffect(() => {
    setData({ ...data, [inputName]: options[0].name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (val: string) => {
    setData({ ...data, [inputName]: val });
  };
  inputName === "select_model" && console.log(options);
  return (
    <RadioGroup value={data[inputName]} className="grid grid-cols-4 gap-4">
      {options.map((option) => {
        const isSelected = data[inputName] === option.name;
        return (
          <div key={option.name} onClick={() => handleChange(option.name)} className={cn("flex flex-col justify-end items-center ")}>
            <img
              src={option?.logo}
              alt={option.name}
              className={cn(
                "cursor-pointer w-full h-auto object-contain p-6 bg-foreground/5 rounded-lg aspect-square",
                isSelected && "border-2 border-primary"
              )}
            />

            <p className=" text-foreground/70">{option.name}</p>
          </div>
        );
      })}
    </RadioGroup>
  );
}

interface RadioInput extends InputFieldProp {
  options: string[];
}
function AccordionAndRadio(props: RadioInput) {
  const { inputName, inputType, data, setData, options } = props;
  // useEffect(() => {
  //   setData({ ...data, [inputName]: options[0] });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const handleChange = (val: string) => {
    setData({ ...data, [inputName]: val });
  };
  return (
    <RadioGroup value={data[inputName]}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border rounded-sm">
          <AccordionTrigger className="p-3">{data[inputName] ?? <span className=" opacity-30 "> Select prefered variant</span>}</AccordionTrigger>
          <AccordionContent>
            {options.map((option) => {
              const isSelected = data[inputName] === option;
              return (
                <div onClick={() => handleChange(option)} className={cn("flex justify-left items-center gap-3 p-4 cursor-pointer")}>
                  <RadioGroupItem value={option} />
                  <p>{option}</p>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </RadioGroup>
  );
}
function InputsField({ inputName, inputType, data, setData }: InputFieldProp) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const renderRadio = () => {
    switch (inputName) {
      case "select_brand":
        return <RadioMultiMedia inputName={inputName} inputType="radio" data={data} setData={setData} options={brands} />;
      case "select_model":
        const thisOption = brands.find((brand) => data?.select_brand && brand.name === (data.select_brand as string));
        return thisOption && <RadioMultiMedia inputName={inputName} inputType="radio" data={data} setData={setData} options={thisOption.models} />;

      default:
        return <></>;
    }
  };

  // return <>{inputType === "radio_multimedia" && renderRadio()
  //  <Input name={inputName} type={inputType} onChange={handleChange} />}</>;
  switch (inputType) {
    case "radio_multimedia":
      return renderRadio() ?? <></>; // if renderRadio returns undefined, return an empty fragment
    case "radio":
      // TODO: handle radio input
      // for now we only have one radio input
      // other wise e also need to pass options as props
      // pr handle it like radio_multimedia
      const brandOptions = brands.find((brand) => data?.select_brand && brand.name === (data.select_brand as string));
      const thisOption = brandOptions?.models.find((model) => data?.select_model && model.name === (data.select_model as string));
      return thisOption ? (
        <AccordionAndRadio inputName={inputName} inputType="radio" data={data} setData={setData} options={thisOption.variants} />
      ) : (
        <></>
      );
    case "file":
      return <InputFile name={inputName} onChange={handleChange} label="Press to Upload file here" description="Max Size: 50MB" />;
    default:
      return <Input name={inputName} type={inputType} onChange={handleChange} />;
  }
}

export default InputsField;
