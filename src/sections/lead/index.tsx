import LeadCard from "@/components/leadCard";
import { MinimalLeads } from "@/constants/leads";
import Progress from "./components/progress";
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function LeadView({ setSelectedLead }: { setSelectedLead?: (lead: string) => void }) {
  const { id } = useParams();
  // /lead/123456789;
  const leadExists = MinimalLeads.find((lead) => lead.application_id.application_id === (id as string));

  if (!leadExists) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <LeadCard noHoverEffect data={leadExists} className="p-4 w-full" />
      <Progress />
    </>
  );
}

export default LeadView;
