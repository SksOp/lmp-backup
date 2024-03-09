import DocUpload from "@/components/docUpload";
import { InitialState } from "@/components/svgs/icon";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { ClassValue } from "clsx";

interface Props {
  id: number;
  className?: ClassValue;
  date: string;
  title: string;
  doneBy: string;
  status: string;
  action?: string;
  noOfStates: number;
}

function ConditionalIcon({ id, noOfStates, status }: Omit<Props, "className" | "date" | "title" | "doneBy" | "action">) {
  return (
    <>
      {id === noOfStates ? (
        <InitialState className="w-8 h-8" />
      ) : status === "completed" ? (
        <Icon icon="teenyicons:tick-circle-solid" className="w-6 h-6" />
      ) : status === "current" ? (
        <Icon icon="icon-park-solid:caution" className="w-6 h-6" />
      ) : (
        <div className="w-6 h-6  rounded-full border border-gray-600"></div>
      )}
    </>
  );
}

function States({ id, noOfStates, className, date, title, doneBy, status, action }: Props) {
  return (
    <div className={cn("flex items-start gap-6")}>
      <div className="text-sm text-foreground/50 font-medium">{date}</div>
      <div className="flex flex-col items-center">
        <ConditionalIcon id={id} noOfStates={noOfStates} status={status} />
        <div className={cn("h-14 my-2 border-l border-[2px] border-primary")}></div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-bold col-span-2">{title}</p>
        <p className="text-lg opacity-50  ">Done By: {doneBy}</p>
        {action === "doc" ? <DocUpload /> : null}
      </div>
    </div>
  );
}

export default States;
