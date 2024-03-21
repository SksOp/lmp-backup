import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LeadsSelector() {
  return (
    <TabsList className="grid w-full grid-cols-4 md:grid-cols-12 gap-1 px-2 my-4 md:my-0 md:mb-4 bg-background border h-none">
      <TabsTrigger value="all-leads" className="h-4/6">All</TabsTrigger>
      <TabsTrigger value="active" className="h-4/6">Active</TabsTrigger>
      <TabsTrigger value="action" className="h-4/6">Pending</TabsTrigger>
      <TabsTrigger value="draft" className="h-4/6">
        Drafts
        <div
        className="absolute flex w-4 h-4 translate-x-5 -translate-y-2  bg-red-500 text-white rounded-full items-center justify-center text-xs"
      >
        5
      </div>
        </TabsTrigger>
    </TabsList>
  );
}
