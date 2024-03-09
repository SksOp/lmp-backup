import LeadCard from "@/components/leadCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MinimalLeads } from "@/constants/leads";
import { paths } from "@/router";
import { Link } from "react-router-dom";

function LeadTabs() {
  const allLeads = MinimalLeads.map((lead) => (
    <Link to={`${paths.lead}/${lead.application_id.application_id}`}>
      <LeadCard hideIcons data={lead} />
    </Link>
  ));
  const activeLeads = MinimalLeads.map(
    (lead) =>
      lead.application_id.status === "active" && (
        <Link to={`${paths.lead}/${lead.application_id.application_id}`}>
          <LeadCard hideIcons data={lead} />
        </Link>
      )
  );
  const pending = MinimalLeads.map(
    (lead) =>
      lead.application_id.current_actor === "Dealer" && (
        <Link to={`${paths.lead}/${lead.application_id.application_id}`}>
          <LeadCard hideIcons data={lead} />
        </Link>
      )
  );

  const draft = MinimalLeads.map(
    (lead) =>
      lead.application_id.is_draft && (
        <Link to={`${paths.lead}/${lead.application_id.application_id}`}>
          <LeadCard hideIcons data={lead} />
        </Link>
      )
  );
  return (
    <>
      <Tabs defaultValue="all-leads" className="w-full">
        <TabsList className="grid w-full grid-cols-4 gap-1 px-2 my-4 bg-background border h-none">
          <TabsTrigger value="all-leads">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="action">Pending</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
        </TabsList>
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
      </Tabs>
    </>
  );
}

export default LeadTabs;
