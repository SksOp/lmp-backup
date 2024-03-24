import LeadCard from "@/components/leadCard";
import { MinimalLeads } from "@/constants/leads";
import { DetailedLeads } from "@/constants/leads";
import Progress, { Info, Status } from "./components/progress";
import { Navigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LeadsData } from "../home/components/all-leads-data";
import { Tabs } from "@/components/ui/tabs";
import { LeadsSelector } from "../home/components/all-leads-selector";
import { ApplyButtonDrawer } from "@/layout/main/nav/navBottom";

function LeadView({ setSelectedLead, showProgress }: { setSelectedLead?: (lead: string) => void; showProgress?: boolean }) {
  const { id } = useParams();
  const leadExists = MinimalLeads.find((lead) => lead.application_id.application_id === (id as string));
  console.log("leadExists", leadExists);
  if (!leadExists) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <div className="flex flex-col w-full gap-3 md:hidden">
        <LeadCard noHoverEffect data={leadExists} className="w-full" />
        <Progress DetailedLeads={DetailedLeads} className={cn("", showProgress ? "flex flex-col" : "hidden")} />
      </div>
      <div className="md:flex w-full justify-between hidden">
        <Tabs defaultValue="all-leads" className="flex flex-col w-full ">
          <div className="flex w-full items-center justify-center gap-5 sticky top-[3.1rem] z-10 py-3 ">
            <div className="absolute w-full h-[calc(100%-0.75rem)] bg-background top-0 left-0 " />
            <LeadsSelector className="py-[0.3rem] relative z-10 " />
            <ApplyButtonDrawer className="hidden md:flex  relative z-10" />
          </div>
          <div className="flex gap-5 w-full">
            <div className="md:w-1/3 md:max-w-md w-full">
              <LeadsData />
            </div>
            <div className="md:flex md:flex-col hidden flex-grow items-center justify-start gap-3">
              <Info detailedLeads={DetailedLeads} />
            </div>
            <div className="lg:flex hidden  max-w-md justify-center ">
              {" "}
              <Status states={DetailedLeads.history_timeline.states} />{" "}
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}

export default LeadView;
