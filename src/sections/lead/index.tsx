import LeadCard from "@/components/leadCard";
import { MinimalLeads } from "@/constants/leads";
import React from "react";
import Progress from "./components/progress";
import { Navigate, useParams } from "react-router-dom";
import Layout from "@/layout/main";

function LeadView() {
  const { id } = useParams();

  console.log(id);
  const leadExists = MinimalLeads.find((lead) => lead.application_id.application_id === (id as string));
  if (!leadExists) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      <LeadCard noHoverEffect data={leadExists} className="p-4" />
      <Progress />
    </Layout>
  );
}

export default LeadView;
