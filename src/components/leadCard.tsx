import { ClassValue } from "clsx";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Icon } from "@iconify/react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { LeadLogo } from "./leadLogo";
import { MinimalLead } from "@/types";
import Call, { Mail, SMS, Whatsapp } from "./svgs/contacts";

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
        <LeadLogo imageName={data.application_id.lead_name} />
        <CardTitle>{data.application_id.lead_name}</CardTitle>
        {data.application_id.is_verified === "yes" ? <Icon icon="mage:verified-check-fill" className="w-6 h-6 text-primary" /> : null}
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="">
            <DetailViewer title="Bank" value={data.application_id.lessor_details.lessor_name.en} />
            <DetailViewer title="Vehicle" value={data.application_id.car_details.brand} />
            <DetailViewer title="Cost" value={data.application_id.car_details.price.final_price} />
          </div>
          <div>
            <img className="max-w-[10rem]" src={data.application_id.car_details.car_image} alt="vehicle" />
          </div>
        </div>

        <div className="flex justify-between mt-5 mb-2 items-center">
          <p>
            <span className="opacity-50">Leasing Status:</span>

            <span className="ml-3 text-foreground"> {data.application_id.status}</span>
          </p>
          <p>{data.application_id.progress_measure}%</p>
        </div>
        <Progress value={Number(data.application_id.progress_measure)} className="h-2" />
      </CardContent>

      <CardFooter className="flex justify-between">
        {!hideIcons && (
          <>

            <div className=" p-4 bg-secondary rounded-full items-center justify-center">
            <Call  />
            </div>
            <div className=" p-4 bg-secondary rounded-full items-center justify-center">
            <Whatsapp  />
            </div>
            <div className=" p-4 bg-secondary rounded-full items-center justify-center">
            <Mail  />
            </div>
            <div className=" p-4 bg-secondary rounded-full items-center justify-center">
            <SMS  />
            </div>

          </>
        )}
      </CardFooter>
    </Card>
  );
}

export default LeadCard;

export const DetailViewer = ({ title, value, className }: { title: string; value: string; className?: ClassValue }) => {
  return (
    <div className="flex gap-5">
      <p className="text-md  opacity-50">{title}:</p>
      <p className="text-md  ">{value}</p>
    </div>
  );
};
