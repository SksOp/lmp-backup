import DocUpload from "@/components/docUpload";
import { CautionIcon, InitialStateIcon, StatusIcon } from "@/components/svgs/icon";
import { cn } from "@/lib/utils";
import { NonGenericAction } from "@/types";
import { Icon } from "@iconify/react";
import { ClassValue } from "clsx";

interface Props {
  id: number;
  className?: ClassValue;
  date: string;
  title: string;
  doneBy: string;
  status: string;
  action: NonGenericAction[];
  noOfStates: number;
}

function ConditionalIcon({ id, noOfStates, status }: Omit<Props, "className" | "date" | "title" | "doneBy" | "action">) {
  return (
    <div className="flex w-8 h-8">
      {id === noOfStates ? (
        <InitialStateIcon className="" />
      ) : status === "completed" ? (
        <StatusIcon isCompleted className="" />
      ) : status === "current" ? (
        <CautionIcon className="" />
      ) : (
        <StatusIcon className="" />
      )}
    </div>
  );
}

function States({ id, noOfStates, className, date, title, doneBy, status, action }: Props) {
  // console.log(action);
  return (
    <div className={cn("flex h-full items-start gap-2")}>
      <div className="text-sm py-1 text-foreground/50 font-medium min-w-[5.8rem]">{date}</div>
      <div className="h-full items-center flex flex-col">
        <ConditionalIcon id={id} noOfStates={noOfStates} status={status} />
        <div
          className={cn("flex h-[200px] w-[3px] flex-grow my-2 ", status === "completed" || status === "current" ? "bg-primary" : "bg-primary/20")}
        ></div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <p className=" font-medium col-span-2">{title}</p>
        <p className="text-xs opacity-50">Done By: {doneBy}</p>
        {status === "current" ? <DocUpload action={action} /> : null}
      </div>
    </div>
  );
}

export default States;
