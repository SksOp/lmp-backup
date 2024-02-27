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
import { Link } from "react-router-dom";
import { paths } from "@/router";

function DocUpload() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outline">Upload Documents</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[90vh]">
        <DrawerHeader>
          <div className="flex justify-between">
            <DrawerTitle className="text-bold">Upload Documents</DrawerTitle>
            <Link to={paths.home} className="text-red-500">
              Cancel
            </Link>
          </div>
          <p className="flex">
            Naomi's leasing application requires you to confirm the car
            availability
          </p>
          <InputField className="bg-white/20">
            <div className="flex">
              <LeadLogo imageName="Md Ahmed" />
              <h3>Applicant Name</h3>
              <div className="flex flex-col gap-3">
                <Icon
                  icon="streamline:user-identifier-card"
                  className="mt-3 w-4 h-4 text-black-500"
                />
                <p className="">Applicant ID</p>
              </div>
            </div>
          </InputField>
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
