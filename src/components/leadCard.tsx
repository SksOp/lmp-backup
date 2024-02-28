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
        <Badge>{badge?.text}</Badge>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between items-center"> 
          <div>
            <p>Bank: {bankName}</p>
            <p>Vehicle: {vehicleName}</p>
            <p>Cost: {cost?.amount +" " + cost?.currency}</p>
          </div>
          <div>
            <img src={vehicleImage} alt="vehicle" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p>Leasing Status: {leasingStatus}</p>
          <p>Progress: {progress}%</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Icon icon="ion:call-outline" className="w-6 h-6" />
        <Icon icon="akar-icons:whatsapp-fill" className="w-6 h-6" />
        <Icon icon="material-symbols-light:alternate-email" className="w-6 h-6" />
        <Icon icon="ic:baseline-sms" className="w-6 h-6" />
      </CardFooter>
    </Card>
  );
}

export default LeadCard;
