import LeadCard from "@/components/leadCard";
import { MinimalLeads } from "@/constants/leads";
import { DetailedLeads } from "@/constants/leads";
import Progress from "./components/progress";
import { Navigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

function LeadView({ setSelectedLead, showProgress }: { setSelectedLead?: (lead: string) => void; showProgress?: boolean }) {
  const { id } = useParams();
  // /lead/123456789;
  const leadExists = MinimalLeads.find((lead) => lead.application_id.application_id === (id as string));

  if (!leadExists) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="flex flex-col md:flex-row w-full gap-5">
      <LeadCard noHoverEffect data={leadExists} className="w-full" />
      <Progress DetailedLeads={DetailedLeads} className={cn("", showProgress ? "flex flex-col" : "hidden")} />
    </div>
  );
}

export default LeadView;
