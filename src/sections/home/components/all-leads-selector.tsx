import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LeadsSelector() {
  return (
    <TabsList className="grid w-full grid-cols-4 md:grid-cols-12 gap-1 px-2 my-4 md:my-0 md:mb-4 bg-background border h-none">
      <TabsTrigger value="all-leads">All</TabsTrigger>
      <TabsTrigger value="active">Active</TabsTrigger>
      <TabsTrigger value="action">Pending</TabsTrigger>
      <TabsTrigger value="draft">Drafts</TabsTrigger>
    </TabsList>
  );
}
