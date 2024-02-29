import Layout from '@/layout/lead'
import { Navigate, useParams } from "react-router-dom";
import { paths } from "@/router";
import { leads } from "@/constants/leads";
import React from 'react'

function Page() {
  const { id } = useParams();

  const leadExists = leads.find((lead) => lead.lead_id === id);
  if(!leadExists) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      <p>Lead ID: {id}</p>
    </Layout>
  )
}

export default Page
