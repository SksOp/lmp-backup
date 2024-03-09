import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import { ClassValue } from "clsx";
import React from "react";
import States from "./stages";
import { MinimalLeads, DetailedLeads } from "@/constants/leads";
import { Navigate, useParams } from "react-router-dom";
import { forEachChild } from "typescript";
import { PersonalInfo, ProfessionalInfo } from "./personalInfo";
import InfoDisplay from "./infoDisplay";
import { LightBulb } from "@/components/svgs/icon";

function formattedDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    day: "numeric", // Numeric day of the month
    month: "long", // Full name of the month
  });
}

function Progress() {
  const states = DetailedLeads.history_timeline.states;
  const reversedStates = [...states].reverse();

  // find total number of keys in stages

  // const totalStage = Object.keys(rawData).length;

  // const stages = Array.from({ length: totalStage }, (_, i) => rawData[String(totalStage - i)]).reverse();

  return (
    <>
      <Tabs defaultValue="status" className="w-full">
        <TabsList className="grid w-full grid-cols-2 gap-1 px-2 my-4 bg-background border h-none">
          <TabsTrigger value="status">Application Status</TabsTrigger>
          <TabsTrigger value="info">Lead info</TabsTrigger>
        </TabsList>
        <TabsContent value="status">
          <div className="flex text-sm gap-3 mb-4 items-center rounded-md justify-start border-2 border-dashed border-[#475569]/60 p-4 bg-primary/5">
            <LightBulb className="h-14 w-14" />
            <p>Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim.</p>
          </div>
          <div className="flex flex-col  justify-start  px-7 py-5 rounded-md bg-primary/5">
            <h2 className="font-bold">Personal Details</h2>

            {reversedStates.map((state, index) => (
              <States
                className=""
                key={state.key}
                id={Number(state.key)}
                date={formattedDate(state.completed_at)}
                title={state.name.en}
                doneBy={state.completed_by}
                status={state.status}
                noOfStates={reversedStates.length}
                // action={stage.action}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="info">
          <div className="flex flex-col gap-4 justify-between mb-8">
            <InfoDisplay title="Personal Info" items={DetailedLeads.personal_details} />
            <InfoDisplay title="Professional Info" items={DetailedLeads.professional_details} />
            <InfoDisplay title="Educational Details" items={DetailedLeads.eductation_details} />
            <InfoDisplay title="Vehicle Info" items={DetailedLeads.vehicle_details} />
            <InfoDisplay title="Lessor Offer Details" items={DetailedLeads.lease_offer_details} />
            <InfoDisplay title="Booking Payment Details" items={DetailedLeads.booking_payment_details} />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default Progress;
