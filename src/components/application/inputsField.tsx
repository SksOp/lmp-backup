import { brands } from "@/configs/brand-configs/brand";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Honda, Jeep } from "@/configs/brand-configs/models";
import { cn } from "@/lib/utils";

interface InputFieldProp {
  inputName: string;
  inputType: string;
  data: any;
  setData: (data: object) => void;
}
interface Option {
  name:string;
  logo?:string;
}
interface RadioMultiMediaProp extends InputFieldProp {
  options: Option[]
}
function RadioMultiMedia(props: RadioMultiMediaProp) {
  const { inputName, inputType, data, setData, options } = props;
  const [thisData, setThisData] = useState(options[0].name);
  useEffect(() => {
    setData({ ...data, [inputName]: options[0].name });
  }, []);

  const handleChange = (val: string) => {
    // console.log({ thisData, data, val });
    setThisData(val);
    setData({ ...data, [inputName]: val });
  };
  inputName==="select_model"&&console.log(options)
  return (
    <>
      <RadioGroup value={thisData} defaultValue={thisData} className="grid grid-cols-4">
        {options.map((option) => {
          const isSelected = option.name === thisData;
          console.log(isSelected)
          return (
            <div
              key={option.name}
              onClick={() => handleChange(option.name)}
              className={cn("flex flex-col justify-end items-center ", isSelected && "scale-125")}
            >
              <div className={`flex items-center justify-center bg-primary/5`}>
                <img src={option?.logo} alt={option.name} className="cursor-pointer w-full" />
              </div>
              <p>{option.name}</p>
            </div>
          );
        })}
      </RadioGroup>
    </>
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
        const thisOption = brands.find((brand)=>(data?.select_brand&& brand.name===data.select_brand as string))
        return thisOption&&<RadioMultiMedia inputName={inputName} inputType="radio" data={data} setData={setData} options={thisOption.models} />;

      default:
        return <></>;
    }
  };

  return <>{inputType === "radio_multimedia" ? renderRadio() : <Input name={inputName} type={inputType} onChange={handleChange} />}</>;
}

export default InputsField;
