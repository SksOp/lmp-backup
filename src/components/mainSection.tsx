import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import LeadCard from "./leadCard";
import { Button } from "./ui/button";
import DocUpload from "./docUpload";
import { Link } from "react-router-dom";
import { paths } from "@/router";
import { MinimalLeads } from "@/constants/leads";

function MainSection() {
  return (
    <>
      <Tabs defaultValue="applications" className="w-full mb-16 px-4">
        <TabsList className="grid w-full grid-cols-2 gap-1 my-4 bg-background border h-none">
          <TabsTrigger
            className="data-[state=active]:bg-primary/5 my-1 p-3"
            value="applications"
          >
            Active Applications
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary/5 my-1 p-3"
            value="action"
          >
            Required Action
          </TabsTrigger>
        </TabsList>
        <TabsContent value="applications">
          <div className="flex flex-col gap-3">
            {MinimalLeads.map((lead) => (
              <>
                <Link
                  to={`${paths.lead}/${lead.application_id.application_id}`}
                >
                  <LeadCard hideIcons data={lead} />
                </Link>
              </>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="action"></TabsContent>
      </Tabs>
    </>
  );
}

export default MainSection;
