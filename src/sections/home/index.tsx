import LeadsFunnel from "@/components/leadsFunnel";
import { LeadsSelector } from "./components/all-leads-selector";
import { Tabs } from "@/components/ui/tabs";
import LeadView from "../lead";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { LeadsData } from "./components/all-leads-data";
import { Info, Status } from "../lead/components/progress";
import { DetailedLeads } from "@/constants/leads";
import { ApplyButtonDrawer } from "@/layout/main/nav/navBottom";

function HomeView() {
  const { id } = useParams();
  const [selectedLead, setSelectedLead] = useState(id);

  return (
    <div className="flex flex-col  relative">
      <LeadsFunnel />
      <div className="flex w-full justify-between">
        <Tabs defaultValue="all-leads" className="flex flex-col w-full ">
          <div className="flex w-full items-center justify-center gap-5 sticky top-[3.1rem] z-10 py-3 ">
            <div className="absolute w-full h-[calc(100%-0.75rem)] bg-background top-0 left-0 " />
            <LeadsSelector className="py-[0.3rem] relative z-10 " />
            <ApplyButtonDrawer className="hidden md:flex  relative z-10" />
          </div>
          <div className="flex gap-5 w-full">
            <div className="md:w-1/3 md:max-w-md w-full">
              <LeadsData setSelectedLead={setSelectedLead} selectedLead={selectedLead} />
            </div>
            <div className="md:flex md:flex-col hidden flex-grow items-center justify-start gap-3">
              <LeadView />
              <Info detailedLeads={DetailedLeads} />
            </div>
            <div className="lg:flex hidden  max-w-md justify-center ">
              <Status states={DetailedLeads.history_timeline.states} />
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default HomeView;
