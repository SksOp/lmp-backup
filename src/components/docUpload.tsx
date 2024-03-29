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
import { Icon } from "@iconify/react";
import { Navigate, useParams } from "react-router-dom";
import LeadCard from "./leadCard";
import { MinimalLeads } from "@/constants/leads";
import { ClassValue } from "clsx";
import { NonGenericAction } from "@/types";
import { InputFile } from "./ui/input-file";
import { Label } from "./ui/label";
import { ChangeEvent, useState } from "react";

function DocUpload({ action }: { action: NonGenericAction[] }) {
  const { id } = useParams();
  const [fileName, setFileName] = useState<string>("");
  const leadExists = MinimalLeads.find((lead) => lead.application_id.application_id === (id as string));
  if (!leadExists) {
    // return <Navigate to="/404" replace />;
    return null;
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger className="border border-foreground bg-background rounded-sm py-1 px-2 text-sm mb-8">{action[0].en}</DrawerTrigger>
      <DrawerContent className="h-[90vh]">
        <DrawerHeader>
          <DrawerTitle className="text-bold">Upload Documents</DrawerTitle>
          <DrawerDescription>We require you to confirm the car availability</DrawerDescription>

          <LeadCard data={leadExists} hideIcons className="p-4" />
          <Label className="text-left ">Driving License</Label>

          <InputFile onChange={handleFileChange} name={fileName} label="Press to Upload file here" description="Max Size: 50MB" className="" />
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
