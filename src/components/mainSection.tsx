import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import  LeadCard  from "./leadCard";
import { leads } from "@/constants/leads";
import { Button } from "./ui/button";
import DocUpload from "./docUpload";

function MainSection() {
  const leadData = {
    name: "Ahmed Mohamed Abdelhady",
    badge: {
      color: "yellow",
      text: "Ongoing",
    },
    bankName: "HDFC",
    vehicleName: "Toyota Camry - VCVC",
    vehicleImage: "vehicle.jpg",
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
              <>
                <LeadCard {...leadData} />
              </>
              // <Application
              //   key={lead.lead_id}
              //   lead={lead}
              //   btns={
              //     <>
              //       <Button variant="default">View</Button>
              //       <DocUpload />
              //     </>
              //   }
              // />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="action"></TabsContent>
      </Tabs>
    </>
  );
}

export default MainSection;
