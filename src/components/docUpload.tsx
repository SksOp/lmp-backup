import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import InputField from "./inputField";
import { LeadLogo } from "./leadLogo";
import { Icon } from "@iconify/react";
import { Link, Navigate, useParams } from "react-router-dom";
import { paths } from "@/router";
import LeadCard from "./leadCard";
import { MinimalLeads } from "@/constants/leads";
import { ClassValue } from "clsx";

const InputDoc = ({
  title,
  desc,
  size,
  className,
}: {
  title: string;
  desc: string;
  size: string;
  className?: ClassValue;
}) => {
  return (
    <div className="flex flex-col items-start justify-between my-2 gap-2">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="flex items-center justify-start gap-3 border-2 w-full">
        <Icon icon="ep:upload-filled" className="h-8 w-8" />
      <div className="flex flex-col items-center justify-start">
      <p className="text-lg ">{desc}</p>
      <p className="text-lg opacity-50">{size}</p>
      </div>
      </div>
    </div>
  );
};

function DocUpload() {
  const { id } = useParams();

  console.log( id);
  const leadExists = MinimalLeads.find((lead) => lead.application_id.application_id === id as string);
  if(!leadExists) {
    return <Navigate to="/404" replace />;
  }
  return (
    <Drawer>
      <DrawerTrigger>
        <p className="text-orange-500 underline">
          Document Verification Pending
        </p>
      </DrawerTrigger>
      <DrawerContent className="h-[90vh]">
        <DrawerHeader>
          <DrawerTitle className="text-bold">Upload Documents</DrawerTitle>
          <DrawerDescription>
          We require you to confirm the car availability
          </DrawerDescription>
          <LeadCard data={leadExists} className="p-4" />
          <InputDoc title="Driving Licence" desc="Press to Upload file here" size="Max Size: 50MB" />
          <InputDoc title="Driving Licence" desc="Press to Upload file here" size="Max Size: 50MB" />
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="default">Submit Documents</Button>
        </DrawerFooter>
      </DrawerContent>
      <DrawerClose />
    </Drawer>
  );
}

export default DocUpload;


