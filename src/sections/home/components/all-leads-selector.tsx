import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MinimalLeads } from "@/constants/leads";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export function LeadsSelector({ className }: { className?: ClassValue }) {
  const countDrafts = MinimalLeads.map((lead) => lead.application_id.is_draft ).length;
  
  return (
    <TabsList className={cn("grid w-full grid-cols-4 md:grid-cols-12 gap-1 px-2  bg-background border h-none", className)}>
      <TabsTrigger value="all-leads" className="my-[0.15rem]">
        All
      </TabsTrigger>
      <TabsTrigger value="active" className="my-[0.15rem]">
        Active
      </TabsTrigger>
      <TabsTrigger value="action" className="my-[0.15rem]">
        Pending
      </TabsTrigger>
      <TabsTrigger value="draft" className="my-[0.15rem]">
        Drafts
        <div className="absolute flex w-4 h-4 translate-x-5 -translate-y-2  bg-red-500 text-white rounded-full items-center justify-center text-xs">
          {countDrafts}
        </div>
      </TabsTrigger>
    </TabsList>
  );
}

