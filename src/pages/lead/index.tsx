import Layout from '@/layout/lead'
import { Navigate, useParams } from "react-router-dom";
import { paths } from "@/router";
import { leads } from "@/constants/leads";
import React from 'react'
import LeadView from '@/sections/lead';

function Page() {
  const { id } = useParams();

  const leadExists = leads.find((lead) => lead.lead_id === id);
  if(!leadExists) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      <LeadView />
    </Layout>
  )
}

export default Page
