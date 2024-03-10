import { brands } from "@/configs/brand-configs/brand";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { InputFile } from "../ui/input-file";
import { Brand, CarModel } from "@/configs";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { PhoneInput } from "../ui/phone-input";
import { LangOptions } from "@/types";

interface InputFieldProp {
  name: string;
  inputType: string;
  data: any;
  placeholder?: string;
  setData: (data: object) => void;
  options?: LangOptions[];
}

function InputsField({ name, inputType, data, setData, placeholder, options }: InputFieldProp) {
  console.log(name);
  const renderMultimediaRadio = (name: string) => {
    switch (name) {
      case "select_brand":
        return <RadioMultiMedia name={name} data={data} setData={setData} options={brands} />;
      case "select_model":
        return <SelectModel name={name} data={data} setData={setData} brands={brands} />;
      default:
        return <></>;
    }
  };

  switch (inputType) {
    case "radio_multimedia":
      return renderMultimediaRadio(name);

    case "radio":
      // TODO: handle radio input
      // for now we only have one radio input
      // other wise e also need to pass options as props
      // pr handle it like radio_multimedia
      if (name === "select_varient") {
        const brandOptions = brands.find((brand) => data?.select_brand && brand.name === (data.select_brand as string));
        const thisOption = brandOptions?.models.find((model) => data?.select_model && model.name === (data.select_model as string));
        return thisOption ? (
          <AccordionAndRadio label="Select prefered variant" name={name} data={data} setData={setData} options={thisOption.variants} />
        ) : (
          <></>
        );
      }
      const thisOption = options?.map((option) => option.en);
      return <AccordionAndRadio label={"Select"} name={name} data={data} setData={setData} options={thisOption ?? []} />;

    case "file":
      console.log(data);
      return (
        <InputFile
          name={data[name]?.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(name);
            setData({ ...data, [name]: e.target?.files?.[0] });
          }}
          id={name}
          label="Press to Upload file here"
          description="Max Size: 50MB"
        />
      );

    case "date":
      const date = data[name];
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className={cn("py-6 w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              onSelect={(date) => {
                setData({ ...data, [name]: date });
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      );
    case "phone":
      return <PhoneInput value={data[name]} onChange={(phone) => (data[name] = phone)} defaultCountry="IN" placeholder="9876543210" />;
    default:
      return (
        <Input
          name={name}
          type={inputType}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [name]: e.target.value })}
        />
      );
  }
}

export default InputsField;

interface Option {
  name: string;
  logo?: string;
}
/**
 *
 * @interface RadioMultiMediaProps
 * @extends {Omit<InputFieldProp, "inputType">}
 *
 * @property {Option[]} options - array of options to be displayed
 * @property {string} [dependancy] - I introduced this field to auto select the default value of the radio group If the fiel is not dependant on any of the other field it will directly select the 1st value of the option as the default alue
 *
 */

interface RadioMultiMediaProps extends Omit<InputFieldProp, "inputType" | "options"> {
  options: Option[];
  dependancy?: string;
}

function RadioMultiMedia(props: RadioMultiMediaProps) {
  const { name, data, setData, options, dependancy } = props;
  useEffect(() => {
    if (dependancy) return;
    setData({ ...data, [name]: options[0].name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (val: string) => {
    setData({ ...data, [name]: val });
  };
  return (
    <RadioGroup value={data[name]} className="grid grid-cols-4 gap-4">
      {options.map((option) => {
        const isSelected = data[name] === option.name;
        return (
          <div key={option.name} onClick={() => handleChange(option.name)} className={cn("flex flex-col justify-end items-center ")}>
            <img
              src={option?.logo}
              alt={option.name}
              className={cn(
                "cursor-pointer w-full h-auto object-contain p-3 bg-foreground/5 rounded-lg aspect-square",
                isSelected && "border-2 border-primary"
              )}
            />
            <p className="text-xs text-foreground/70">{option.name}</p>
          </div>
        );
      })}
    </RadioGroup>
  );
}

interface RadioInput extends Omit<InputFieldProp, "inputType" | "options"> {
  options: string[];
  label: string;
}

function AccordionAndRadio(props: RadioInput) {
  const { name, data, setData, options, label } = props;
  // useEffect(() => {
  //   setData({ ...data, [inputName]: options[0] });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const handleChange = (val: string) => {
    setData({ ...data, [name]: val });
  };
  return (
    <RadioGroup value={data[name]}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border rounded-sm">
          <AccordionTrigger className="p-3">{data[name] ?? <span className=" opacity-30 "> {label}</span>}</AccordionTrigger>
          <AccordionContent>
            {options.map((option) => {
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

interface SelectModelProp extends Omit<InputFieldProp, "inputType"> {
  brands: Brand[];
}
function SelectModel(props: SelectModelProp) {
  const { name, data, setData, brands } = props;
  // console.log(props);
  const [options, setOptions] = useState<CarModel[]>([]);
  // console.log(options);

  useEffect(() => {
    const thisOption = brands.find((brand) => data?.select_brand && brand.name === (data.select_brand as string));
    setOptions(thisOption?.models ?? []);
  }, [brands, data?.select_brand]);
  return <RadioMultiMedia name={name} dependancy="select_brand" data={data} setData={setData} options={options} />;
}
