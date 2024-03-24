import { ClassValue } from "clsx";
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { LeadLogo } from "./leadLogo";
import { MinimalLead } from "@/types";
import Call, { Mail, SMS, Whatsapp } from "./svgs/contacts";
import { EditIcon, HamburgerMenuIcon, PencilIcon, VerifiedLeadIcon } from "./svgs/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Actions, CoreActions } from "@/layout/lead/nav/navBottom";
import { DetailedLeads } from "@/constants/leads";

export interface Props {
  className?: ClassValue;
  data: MinimalLead;
  hideIcons?: boolean;
  noHoverEffect?: boolean;
  isPending?: boolean;
}

function LeadCard({ className, data, hideIcons, noHoverEffect, isPending }: Props) {
  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${data.application_id.phone_number}`, "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:${data.application_id.phone_number}`);
  };

  const handleMailClick = () => {
    window.open(`mailto:${data.application_id.email}`);
  };

  const handleSMSClick = () => {
    window.open(`sms:${data.application_id.phone_number}`);
  };

  return (
    <Card className={cn("transition-all duration-300 p-2 px-4", !noHoverEffect && "hover:bg-primary/5  hover:scale-[101%]", className)}>
      <CardHeader className="flex flex-row gap-2 items-center p-0">
        <LeadLogo className="text-foreground/70 w-10 h-10" imageName={data.application_id.lead_name} />
        <CardTitle className="text-sm">{data.application_id.lead_name}</CardTitle>
        {data.application_id.is_verified === "yes" ? <VerifiedLeadIcon className="w-6 h-6" /> : null}
      </CardHeader>

      <CardContent className="flex flex-col gap-[0.40rem] p-0 pt-[0.8rem]">
        <div className="flex justify-between items-center pb-2">
          <div className="flex flex-col gap-2">
            <DetailViewer title="Bank" value={data.application_id.lessor_details.lessor_name.en} />
            <DetailViewer title="Vehicle" value={data.application_id.car_details.brand} />
            <DetailViewer title="Cost" value={data.application_id.car_details.price.final_price} />
          </div>
          <div>
            <img className="max-w-[10rem]" src={data.application_id.car_details.car_image} alt="vehicle" />
          </div>
        </div>

        <Progress value={Number(data.application_id.progress_measure)} className="h-[0.3rem]" />

        <div className="text-xs flex justify-between items-center mt-[0.15rem]">
          <p className="">
            <span className=" opacity-50">Leasing Status:</span>
            <span className="ml-1 text-foreground">
              {" "}
              {isPending ? "Pending" : data.application_id.status.charAt(0).toUpperCase() + data.application_id.status.slice(1)}
            </span>
          </p>
          <p className="opacity-40 font-semibold">{data.application_id.progress_measure}%</p>
        </div>
      </CardContent>

      {!hideIcons && (
        <CardFooter className="flex justify-between mt-3 mb-0 p-0 px-4">
          <div className=" p-3 bg-[#E2EEE8] rounded-full items-center justify-center cursor-pointer" onClick={handleCallClick}>
            <Call />
          </div>
          <div className=" p-3 bg-[#E2EEE8] rounded-full items-center justify-center cursor-pointer" onClick={handleWhatsappClick}>
            <Whatsapp />
          </div>
          <div className=" p-3 bg-[#E2EEE8] rounded-full items-center justify-center cursor-pointer" onClick={handleMailClick}>
            <Mail />
          </div>
          <div className=" p-3 bg-[#E2EEE8] rounded-full items-center justify-center cursor-pointer" onClick={handleSMSClick}>
            <SMS />
          </div>
          <div className="hidden md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="w-full shadow-lg flex items-center bg-primary text-primary-foreground gap-3 rounded-md px-4 py-2 justify-between">
                  <PencilIcon />
                  <span className="font-medium">Actions</span>
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <CoreActions detailedLeads={DetailedLeads} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

export default LeadCard;

export const DetailViewer = ({ title, value, className }: { title: string; value: string; className?: ClassValue }) => {
  return (
    <div className="flex gap-4">
      <p className="text-sm opacity-50 line-clamp-1 ">{title}:</p>
      <p className="text-sm font-semibold line-clamp-1 ">{value}</p>
    </div>
  );
};
