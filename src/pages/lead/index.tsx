import Layout from '@/layout/lead'
import { Navigate, useParams } from "react-router-dom";
import { paths } from "@/router";
import React from 'react'
import LeadView from '@/sections/lead';

function Page() {
  

  return (
    <Layout>
      <LeadView />
    </Layout>
  )
}

export default Page
