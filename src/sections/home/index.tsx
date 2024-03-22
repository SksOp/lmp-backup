import LeadsFunnel from "@/components/leadsFunnel";
import { LeadsSelector } from "./components/all-leads-selector";
import { Tabs } from "@/components/ui/tabs";
import LeadView from "../lead";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LeadsData } from "./components/all-leads-data";
import { Info, Status } from "../lead/components/progress";
import { DetailedLeads } from "@/constants/leads";
import { ApplyButtonDrawer } from "@/layout/main/nav/navBottom";

function HomeView() {
  const { id } = useParams();
  const [selectedLead, setSelectedLead] = useState(id);

  return (
    <div className="flex flex-col gap-3">
      <LeadsFunnel />
      <div className="flex w-full justify-between gap-4">
        <Tabs defaultValue="all-leads" className="flex flex-col w-full gap-3">
          <div className="flex w-full items-center justify-center gap-5">
            <LeadsSelector className="py-[0.3rem]" />
            <ApplyButtonDrawer className="hidden md:flex" />
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
