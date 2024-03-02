import LeadCard from "@/components/leadCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MinimalLeads } from "@/constants/leads";
import { paths } from "@/router";
import path from "path";
import React from "react";
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

  const requiredActions = MinimalLeads.map(
    (lead) =>
      lead.application_id.current_actor === "Dealer" && (
        <Link to={`${paths.lead}/${lead.application_id.application_id}`}>
          <LeadCard hideIcons data={lead} />
        </Link>
      )
  );
  return (
    <>
      <Tabs defaultValue="all-leads" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-3 gap-1 my-4 bg-background border h-none">
          <TabsTrigger value="all-leads">View All Leads</TabsTrigger>
          <TabsTrigger value="active">Active Leads</TabsTrigger>
          <TabsTrigger value="action">Required Action</TabsTrigger>
        </TabsList>
        <TabsContent value="all-leads" className="flex flex-col gap-3">
          {allLeads}
        </TabsContent>
        <TabsContent value="active" className="flex flex-col gap-3">
          {activeLeads}
        </TabsContent>
        <TabsContent value="action" className="flex flex-col gap-3">
          {requiredActions}
        </TabsContent>
      </Tabs>
    </>
  );
}

export default LeadTabs;
