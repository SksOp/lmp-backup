import DocUpload from "@/components/docUpload";
import { CautionIcon, InitialStateIcon, StatusCompletedIcon, StatusIcon } from "@/components/svgs/icon";
import { cn } from "@/lib/utils";
import { NonGenericAction } from "@/types";
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
    <div className="flex w-[1.2rem] h-[1.2rem] items-center justify-center">
      {id === noOfStates ? (
        <InitialStateIcon className="" />
      ) : status === "completed" ? (
        <StatusCompletedIcon />
      ) : status === "current" ? (
        <CautionIcon className="scale-125" />
      ) : (
        <StatusIcon className="scale-150" />
      )}
    </div>
  );
}

function States({ id, noOfStates, className, date, title, doneBy, status, action }: Props) {
  // console.log(action);
  return (
    <div className={cn("flex gap-2")}>
      <div className="text-xs text-foreground/50 font-medium min-w-12">{date}</div>
      <div className="flex flex-col ">
        <ConditionalIcon id={id} noOfStates={noOfStates} status={status} />
        <div
          className={cn("flex mx-auto h-full min-h-14 mt-1 w-[2px]", status === "completed" || status === "current" ? "bg-primary" : "bg-primary/20")}
        ></div>
      </div>
      <div className="flex text-sm flex-col ml-1 gap-[0.4rem] items-start">
        <p className=" font-semibold text-sm col-span-2">{title}</p>
        <p className="text-xs opacity-50">
          Done By: <span className="font-medium">{doneBy}</span>
        </p>
        {status === "current" ? <DocUpload action={action} /> : null}
      </div>
    </div>
  );
}

export default States;
