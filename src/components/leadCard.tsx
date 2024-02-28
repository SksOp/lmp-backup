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

export interface Props {
  className?: ClassValue;
  name: string;
  badge?: {
    color: string;
    text: string;
  };
  bankName: string;
  vehicleName: string;
  vehicleImage?: string;
  cost: {
    currency: string;
    amount: string;
  };
  leasingStatus: string;
  progress: number;
  contacts?: {
    phone: string;
    whatsapp: string;
    email: string;
    sms: string;
  };
}

function LeadCard({
  className,
  name,
  badge,
  bankName,
  vehicleName,
  vehicleImage,
  cost,
  leasingStatus,
  progress,
  contacts,
}: Props) {
  return (
    <Card className="p-4">
      <CardHeader className="flex flex-row gap-2 items-center">
        <CardTitle>{name}</CardTitle>
        <Badge className=" bg-yellow-500 text-black font-normal">
          {badge?.text}
        </Badge>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="grid gap-2 grid-cols-3">
            <DetailViewer title="Bank" value={bankName} />
            <DetailViewer title="Vehicle" value={vehicleName} />
            <DetailViewer
              title="Cost"
              value={cost?.amount + " " + cost?.currency}
            />
          </div>
          <div>
            <img className="max-w-[10rem]" src={vehicleImage} alt="vehicle" />
          </div>
        </div>

        <div className="flex justify-between mt-5 mb-2 items-center">
          <p>
            <span className="opacity-50">Leasing Status:</span>

            <span className="ml-3 text-primary"> {leasingStatus}</span>
          </p>
          <p>{progress}%</p>
        </div>
        <Progress value={progress} className="h-2" />
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
