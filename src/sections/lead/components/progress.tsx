import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import { ClassValue } from "clsx";
import React from "react";
import Stages from "./stages";
import { MinimalLeads, DetailedLeads } from "@/constants/leads";
import { Navigate, useParams } from "react-router-dom";
import { forEachChild } from "typescript";

function Progress() {
  const rawData = DetailedLeads.history_timeline.states;
  // find total number of keys in stages

  const totalStage = Object.keys(rawData).length;

  const stages = Array.from(
    { length: totalStage },
    (_, i) => rawData[String(totalStage - i)]
  ).reverse();

  return (
    <>
      <Tabs defaultValue="status" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-2 gap-1 my-4 bg-background border h-none">
          <TabsTrigger
            className="data-[state=active]:bg-foreground/5 my-1 p-2"
            value="status"
          >
            Application Status
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-foreground/5 my-1 p-2"
            value="info"
          >
            Lead info
          </TabsTrigger>
        </TabsList>
        <TabsContent value="status">
          <div className="flex gap-3 mb-4 items-center justify-start border-2 border-dotted p-4">
            <Icon icon="flat-color-icons:idea" className="h-6 w-6" />
            <p>
              Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce
              dignissim.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-start border-2 p-4">
            {}

            {stages.map((stage, index) => (

              <Stages
                key={index}
                date={stage.completed_at.substring(0, 10).split("-").reverse().join("/")}
                title={stage.name.en}
                doneBy={stage.completed_by}
                status={stage.status}
                // action={stage.action}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="info"></TabsContent>
      </Tabs>
    </>
  );
}

export default Progress;
