import { Application } from "@/components/application";
import Layout from "@/components/layout";
import LeadsFunnel from "@/components/leadsFunnel";
import MainSection from "@/components/mainSection";
import React from "react";

function page() {
  return (
    <>
    <Layout>
      <LeadsFunnel />
      <MainSection />
    </Layout>
    </>
  
  );
}

export default page;