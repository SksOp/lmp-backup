
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Icon } from "@iconify/react";
import { LeadLogo } from "./leadLogo";
import DocUpload from "./docUpload";
import { MinimalLead } from "@/types";


export function Application( {lead}: {lead: MinimalLead} ) {
  return (

    <Card className="w-full border-r-2">
      <CardHeader className="flex flex-row gap-3">
        <LeadLogo imageName={lead.lead_name}/>
        <div className="justify-item-center">
        <CardTitle>{lead.lead_name}</CardTitle>
        <CardDescription className="flex gap-3">
          
          <Icon icon="streamline:user-identifier-card" className="mt-3 w-4 h-4 text-black-500" />
          
          <p className="py-2">{lead.lead_id}</p>
        </CardDescription>
        </div>
        <div className="flex-grow"></div>
        <Icon icon="ep:arrow-right" className="h-8 w-8 text-black-500" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
          <h3 className="text-bold">Leasing Status:</h3>
          <p>{lead.current_state.label.en}</p>
          </div>
          <h3 >Applied: {lead.created_date[8]+lead.created_date[9]}/{lead.created_date[5]+lead.created_date[6]}/{lead.created_date.substring(0,4)}</h3>
          
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
      <Button variant="default">View</Button>
      <DocUpload />
      
      </CardFooter>
    </Card>
  )
}
