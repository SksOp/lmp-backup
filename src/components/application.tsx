
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icon } from "@iconify/react";
import { LeadLogo } from "./avatar";

interface lead{
    leadId: string;
    leadName: string;
    currentStatus: string;
    createdDate: string;
}

interface leadProps{
    leads?: lead[];
}

export function Application( {leads}: leadProps) {
  return (

    <Card className="w-full border-r-2">
      <CardHeader className="flex flex-row gap-3">
        <LeadLogo imageName="Md Ahmed"/>
        <div className="justify-item-center">
        <CardTitle>Applicant Name</CardTitle>
        <CardDescription className="flex gap-3">
          <Icon icon="streamline:user-identifier-card" className="mt-3 w-4 h-4 text-black-500" />
          <p className="py-2">Applicant ID</p>
        </CardDescription>
        </div>
        <div className="flex-grow"></div>
        <Icon icon="ep:arrow-right" className="h-8 w-8 text-black-500" />
      </CardHeader>
      <CardContent>
        <div>
          <Label>Leasing Status:</Label>
          <div className="flex-grow"></div>
          <Label>Applied: 12/30/2024</Label>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
      <Button variant="default">View</Button>
      <Button variant="default">View</Button>
      
      </CardFooter>
    </Card>
  )
}
