import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import States from "./stages";
import { DetailedLeads } from "@/constants/leads";
import InfoDisplay from "./infoDisplay";
import { LightBulb } from "@/components/svgs/icon";
import { UploadedDocuments } from "./uploadedDocs";
import { DetailedLead, State } from "@/types";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

function formattedDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-GB", {
    day: "numeric", // Numeric day of the month
    month: "short", // Full name of the month
  });
}

export function Info({ detailedLeads }: { detailedLeads: DetailedLead }) {
  return (
    <div className="flex flex-col gap-3 justify-between mb-8 w-full">
      <InfoDisplay title="Personal Info" item={detailedLeads.personal_details} />
      <UploadedDocuments uploadedDocs={detailedLeads.uploaded_docs} />
    </div>
  );
}

export function Status({ states }: { states: State[] }) {
  return (
    <>
      <div className="flex flex-col gap-5 justify-start  px-4 py-5 rounded-md bg-primary/5 w-full">
        <div className="flex flex-col">
          <h2 className="font-bold mb-6 hidden md:flex">Application Status</h2>
          {states.map((state, index) => (
            <States
              key={state.key}
              id={Number(state.key)}
              date={formattedDate(state.completed_at)}
              title={state.name.en}
              doneBy={state.completed_by}
              status={state.status}
              noOfStates={states.length}
              action={DetailedLeads.actions.non_generic}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Progress({ className, DetailedLeads }: { className?: ClassValue; DetailedLeads: DetailedLead }) {
  return (
    <>
      <Tabs defaultValue="status" className={cn("w-full", className)}>
        <TabsList className="grid w-full grid-cols-2 gap-1 px-2 my-4 md:my-0 md:mb-4 bg-background border h-none">
          <TabsTrigger value="status">Application Status</TabsTrigger>
          <TabsTrigger value="info">Application info</TabsTrigger>
        </TabsList>
        <TabsContent value="status">
          <div className="flex md:hidden text-sm gap-3 mb-4 items-center rounded-md justify-start border-2 border-dashed border-[#475569]/60 p-4 bg-primary/5">
            <LightBulb className="h-14 w-14" />
            <p>Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim.</p>
          </div>
          <Status states={DetailedLeads.history_timeline.states} />
        </TabsContent>
        <TabsContent value="info">
          <Info detailedLeads={DetailedLeads} />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default Progress;
