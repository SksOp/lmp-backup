import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
import { LeadLogo } from "./leadLogo";
import DocUpload from "./docUpload";
import { MinimalLead } from "@/types";

export function Application({
  lead,
  btns,
}: {
  lead: MinimalLead;
  btns: React.ReactNode;
}) {
  return (
    <Card className="rounded-sm">
      <CardHeader className="flex flex-row gap-3 items-center">
        <LeadLogo imageName={lead.lead_name} />
        <div>
          <CardTitle className="text-md">{lead.lead_name}</CardTitle>
          <div className="flex items-center opacity-60 gap-2">
            <Icon
              icon="streamline:user-identifier-card"
              className=" w-4 h-4 text-black-500"
            />

            <p>{lead.lead_id}</p>
          </div>
        </div>
        <div className="flex-grow"></div>
        <Icon icon="ep:arrow-right" className="h-4 w-4 text-black-500" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-bold">Leasing Status:</h3>
            <p>{lead.current_state.label.en}</p>
          </div>
          <h3>
            Applied: {lead.created_date[8] + lead.created_date[9]}/
            {lead.created_date[5] + lead.created_date[6]}/
            {lead.created_date.substring(0, 4)}
          </h3>
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">{btns}</CardFooter>
    </Card>
  );
}
