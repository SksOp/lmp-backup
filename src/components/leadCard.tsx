import { ClassValue } from "clsx";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Icon } from "@iconify/react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { LeadLogo } from "./leadLogo";
import { MinimalLead } from "@/types";

export interface Props {
  className?: ClassValue;
  data: MinimalLead;
}

function LeadCard({ className, data }: Props) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row gap-2 items-center">
        <LeadLogo imageName={data.application_id.lead_name} />
        <CardTitle>{data.application_id.lead_name}</CardTitle>
        {/* <Badge className=" bg-yellow-500 text-black font-normal">
          {badge?.text}
        </Badge> */}
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="grid gap-2 grid-cols-3">
            <DetailViewer
              title="Bank"
              value={data.application_id.lessor_details.lessor_name.en}
            />
            <DetailViewer
              title="Vehicle"
              value={data.application_id.car_details.brand}
            />
            <DetailViewer
              title="Cost"
              value={data.application_id.car_details.price.final_price}
            />
          </div>
          <div>
            <img
              className="max-w-[10rem]"
              src={data.application_id.car_details.car_image}
              alt="vehicle"
            />
          </div>
        </div>

        <div className="flex justify-between mt-5 mb-2 items-center">
          <p>
            <span className="opacity-50">Leasing Status:</span>

            <span className="ml-3 text-primary">
              {" "}
              {data.application_id.status}
            </span>
          </p>
          <p>{data.application_id.progress_measure}%</p>
        </div>
        <Progress
          value={Number(data.application_id.progress_measure)}
          className="h-2"
        />
      </CardContent>

      <CardFooter className="flex justify-between">
        <Icon
          icon="ion:call-outline"
          className="w-16 h-16 p-4 bg-secondary rounded-full"
        />
        <Icon
          icon="akar-icons:whatsapp-fill"
          className="w-16 h-16 p-4 bg-secondary rounded-full"
        />
        <Icon
          icon="material-symbols-light:alternate-email"
          className="w-16 h-16 p-4 bg-secondary rounded-full"
        />
        <Icon
          icon="ic:baseline-sms"
          className="w-16 h-16 p-4 bg-secondary rounded-full"
        />
      </CardFooter>
    </Card>
  );
}

export default LeadCard;

const DetailViewer = ({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: ClassValue;
}) => {
  return (
    <>
      <p className="text-lg opacity-50">{title}</p>
      <p className="text-lg  font-bold col-span-2">{value}</p>
    </>
  );
};
