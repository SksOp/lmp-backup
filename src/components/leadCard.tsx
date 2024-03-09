import { ClassValue } from "clsx";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { LeadLogo } from "./leadLogo";
import { MinimalLead } from "@/types";
import Call, { Mail, SMS, Whatsapp } from "./svgs/contacts";
import { VerifiedLeadIcon } from "./svgs/icon";

export interface Props {
  className?: ClassValue;
  data: MinimalLead;
  hideIcons?: boolean;
  noHoverEffect?: boolean;
}

function LeadCard({ className, data, hideIcons, noHoverEffect }: Props) {
  return (
    <Card className={cn("transition-all duration-300", !noHoverEffect && "hover:bg-primary/5  hover:scale-[101%]", className)}>
      <CardHeader className="flex flex-row gap-2 items-center">
        <LeadLogo className="w-12 h-12 text-xl" imageName={data.application_id.lead_name} />
        <CardTitle className="text-xl">{data.application_id.lead_name}</CardTitle>
        {data.application_id.is_verified === "yes" ? <VerifiedLeadIcon className="w-8 h-8" /> : null}
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between items-center pb-2">
          <div className="flex flex-col gap-1">
            <DetailViewer title="Bank" value={data.application_id.lessor_details.lessor_name.en} />
            <DetailViewer title="Vehicle" value={data.application_id.car_details.brand} />
            <DetailViewer title="Cost" value={data.application_id.car_details.price.final_price} />
          </div>
          <div>
            <img className="max-w-[10rem]" src={data.application_id.car_details.car_image} alt="vehicle" />
          </div>
        </div>

        <Progress value={Number(data.application_id.progress_measure)} className="h-2" />

        <div className="flex justify-between items-center">
          <p>
            <span className="opacity-50">Leasing Status:</span>
            <span className="ml-3 text-foreground"> {data.application_id.status}</span>
          </p>
          <p className="opacity-50 font-semibold">{data.application_id.progress_measure}%</p>
        </div>
      </CardContent>

      {!hideIcons && (
        <CardFooter className="flex justify-between">
          <div className=" p-3 bg-secondary rounded-full items-center justify-center">
            <Call />
          </div>
          <div className=" p-3 bg-secondary rounded-full items-center justify-center">
            <Whatsapp />
          </div>
          <div className=" p-3 bg-secondary rounded-full items-center justify-center">
            <Mail />
          </div>
          <div className=" p-3 bg-secondary rounded-full items-center justify-center">
            <SMS />
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

export default LeadCard;

export const DetailViewer = ({ title, value, className }: { title: string; value: string; className?: ClassValue }) => {
  return (
    <div className="flex gap-5">
      <p className="text-sm opacity-50 line-clamp-1">{title}:</p>
      <p className="text-sm font-medium line-clamp-1">{value}</p>
    </div>
  );
};
