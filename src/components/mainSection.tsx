import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Application } from "./application";
import { leads } from "@/constants/leads";
import { Button } from "./ui/button";
import DocUpload from "./docUpload";

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
              <Application
                key={lead.lead_id}
                lead={lead}
                btns={
                  <>
                    <Button variant="default">View</Button>
                    <DocUpload />
                  </>
                }
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="action"></TabsContent>
      </Tabs>
    </>
  );
}

export default MainSection;
