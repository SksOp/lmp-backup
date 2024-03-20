import { DetailViewer } from '@/components/leadCard';
import { LeadLogo } from '@/components/leadLogo';
import Call, { Whatsapp, SMS } from '@/components/svgs/contacts';
import { CautionIcon, CrossIcon, LightBulb, CorrectIcon, VerifiedLeadIcon, WrongIcon } from '@/components/svgs/icon';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Progress } from '@radix-ui/react-progress';
import { ClassValue } from 'clsx';
import { Mail } from 'lucide-react';
import React from 'react'

interface Props {
    className?: ClassValue;
    title: string;
    description: string;
    type: "warning" | "error" | "success" | "info";
    date?: string;
}

function NotificationCard({className, title, description, type, date}: Props) {
  return (
    <Card className={cn("transition-all duration-300 hover:bg-primary/5  hover:scale-[101%] p-3 px-4", className)}>
      <CardHeader className="flex flex-row gap-2 items-center p-0 pb-2">
        {type === "error" && <WrongIcon className="w-6 h-6 text-red-500"  />}
        {type === "success" && <CorrectIcon className="w-6 h-6" />}
        {type === "warning" && <CautionIcon className="w-6 h-6" />}
        {type === "info" && <LightBulb className="w-6 h-6" />}
        <CardTitle className="text-md">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 p-0 pt-2">
       <p>{description}</p>
      </CardContent>
    </Card>
  )
}

export default NotificationCard
