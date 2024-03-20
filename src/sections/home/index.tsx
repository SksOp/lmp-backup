import LeadsFunnel from "@/components/leadsFunnel";
import { LeadsSelector } from "./components/all-leads-selector";
import { Tabs } from "@/components/ui/tabs";
import LeadView from "../lead";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LeadsData } from "./components/all-leads-data";

function HomeView() {
  const { id } = useParams();
  const [selectedLead, setSelectedLead] = useState(id);
  return (
    <div className="flex flex-col">
      <LeadsFunnel />
      <div className="flex w-full justify-between">
        <Tabs defaultValue="all-leads" className="flex flex-col">
          <LeadsSelector />
          <LeadsData setSelectedLead={setSelectedLead} selectedLead={selectedLead} />
        </Tabs>
        <div className="md:flex hidden w-full">
          <LeadView />
        </div>
      </div>
    </div>
  );
}

export default HomeView;
