import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import LeadCard from "./leadCard";
import { leads } from "@/constants/leads";
import { Button } from "./ui/button";
import DocUpload from "./docUpload";

export const leadData = {
  name: "Ahmed Mohamed Abdelhady",
  badge: {
    color: "yellow",
    text: "Ongoing",
  },
  bankName: "HDFC",
  vehicleName: "Toyota Camry - VCVC",
  vehicleImage:
    "data:image/jpeg;base64,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",
  cost: {
    currency: "Dhr",
    amount: "1500",
  },
  leasingStatus: "Bank Initial Decision",
  progress: 70,
  contacts: {
    phone: "123-456-7890",
    whatsapp: "123-456-7890",
    email: "john@example.com",
    sms: "123-456-7890",
  },
};

function MainSection() {
  

  return (
    <>
      <Tabs defaultValue="applications" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-2 gap-1 my-8">
          <TabsTrigger className="hover:bg-foreground/5 " value="applications">
            Active Applications
          </TabsTrigger>
          <TabsTrigger className="hover:bg-foreground/5 " value="action">
            Required Action
          </TabsTrigger>
        </TabsList>
        <TabsContent value="applications">
          <div className="flex flex-col gap-3">
            {leads.map((lead) => (
              <LeadCard {...leadData} key={lead.lead_id} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="action"></TabsContent>
      </Tabs>
    </>
  );
}

export default MainSection;
