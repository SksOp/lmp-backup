import LeadCard from "@/components/leadCard";
import { TabsContent } from "@/components/ui/tabs";
import { MinimalLeads } from "@/constants/leads";
import { useRouter } from "@/hooks/useRouter";
import { paths } from "@/router";
import { MinimalLead } from "@/types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function LeadsData({ setSelectedLead, selectedLead }: { setSelectedLead: (id: string) => void; selectedLead: string | undefined }) {
  const isDesktop = () => window.innerWidth > 768;
  const router = useRouter();
  const handleLeadClick = (id: string, event: React.MouseEvent) => {
    if (isDesktop()) {
      event.preventDefault(); // Prevent the Link from navigating.
      setSelectedLead(id); // Update the state as needed.
      router.push(`/${id}`);
      console.log("Lead Clicked", id);
    }
    // On mobile devices, the default Link behavior will proceed.
  };

  const createLink = (lead: MinimalLead, isPending: boolean = false) => (
    <Link
      key={lead.application_id.application_id}
      to={`${paths.lead}/${lead.application_id.application_id}`}
      onClick={(event) => handleLeadClick(lead.application_id.application_id, event)}
    >
      <LeadCard isPending={isPending} hideIcons data={lead} />
    </Link>
  );

  useEffect(() => {
    // Check if selectedLead is undefined to ensure this runs only once.
    if (selectedLead === undefined && MinimalLeads.length > 0) {
      const firstLeadId = MinimalLeads[0].application_id.application_id;
      setSelectedLead(firstLeadId);
      // Optionally, navigate to the first lead's page on initial load
      // console.log(firstLeadId);
      router.push(`/${firstLeadId}`);
    }
  }, [setSelectedLead, selectedLead]);

  const allLeads = MinimalLeads.map((lead) => createLink(lead));
  const activeLeads = MinimalLeads.map((lead) => lead.application_id.status === "active" && createLink(lead));
  const pending = MinimalLeads.map((lead) => lead.application_id.current_actor === "Dealer" && createLink(lead, true));
  const draft = MinimalLeads.map((lead) => lead.application_id.is_draft && createLink(lead));

  return (
    <div className="w-full">
      <TabsContent value="all-leads" className="flex flex-col gap-3">
        {allLeads}
      </TabsContent>
      <TabsContent value="active" className="flex flex-col gap-3">
        {activeLeads}
      </TabsContent>
      <TabsContent value="action" className="flex flex-col gap-3">
        {pending}
      </TabsContent>
      <TabsContent value="draft" className="flex flex-col gap-3">
        {draft}
      </TabsContent>
    </div>
  );
}
