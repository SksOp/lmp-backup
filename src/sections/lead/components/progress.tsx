import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import States from "./stages";
import { DetailedLeads } from "@/constants/leads";
import InfoDisplay from "./infoDisplay";
import { LightBulb } from "@/components/svgs/icon";
import { UploadedDocuments } from "./uploadedDocs";

function formattedDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-GB", {
    day: "numeric", // Numeric day of the month
    month: "short", // Full name of the month
  });
}

function Progress() {
  const states = DetailedLeads.history_timeline.states;
  const reversedStates = [...states].reverse();

  return (
    <>
      <Tabs defaultValue="status" className="w-full">
        <TabsList className="grid w-full grid-cols-2 gap-1 px-2 my-4 bg-background border h-none">
          <TabsTrigger value="status">Application Status</TabsTrigger>
          <TabsTrigger value="info">Application info</TabsTrigger>
        </TabsList>
        <TabsContent value="status">
          <div className="flex text-sm gap-3 mb-4 items-center rounded-md justify-start border-2 border-dashed border-[#475569]/60 p-4 bg-primary/5">
            <LightBulb className="h-14 w-14" />
            <p>Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim.</p>
          </div>
          <div className="flex flex-col gap-5 justify-start  px-4 py-5 rounded-md bg-primary/5">
            <h2 className="font-bold">Personal Details</h2>
            <div className="flex flex-col">
              {reversedStates.map((state, index) => (
                <States
                  key={state.key}
                  id={Number(state.key)}
                  date={formattedDate(state.completed_at)}
                  title={state.name.en}
                  doneBy={state.completed_by}
                  status={state.status}
                  noOfStates={reversedStates.length}
                  action={DetailedLeads.actions.non_generic}
                />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="info">
          <div className="flex flex-col gap-4 justify-between mb-8">
            <InfoDisplay title="Personal Info" item={DetailedLeads.personal_details} />
            <UploadedDocuments uploadedDocs={DetailedLeads.uploaded_docs} />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default Progress;
