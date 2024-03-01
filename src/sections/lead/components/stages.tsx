import DocUpload from "@/components/docUpload";
import { Icon } from "@iconify/react";
import { ClassValue } from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { AnalyticsSummary, MinimalLeads, DetailedLeads } from "@/constants/leads"; 

interface Props {
  className?: ClassValue;
  date: string;
  title: string;
  doneBy: string;
  status: string;
  action?: string;
}

function Stages({
  className,
  date,
  title,
  doneBy,
  status,
  action,

}: Props) {


  return (
    <div className="flex items-center p-0 gap-6">
      <div>{date}</div>
      <div className="flex flex-col items-center">
        {/* <div className="w-6 h-6  rounded-full border border-gray-600"> */}
        {status === "completed" ? (
            <Icon icon="teenyicons:tick-circle-solid" className="w-6 h-6" />
          ) : status === "current" ? (
            <Icon icon="icon-park-solid:caution" className="w-6 h-6" />
          ) : <div className="w-6 h-6  rounded-full border border-gray-600"></div>}
        {/* </div> */}
        <div className="h-14  border-l border-gray-600"></div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-bold col-span-2">{title}</p>
        <p className="text-lg opacity-50  ">Done By: {doneBy}</p>
        {action === "doc" ? (<DocUpload />) : (null)}
      </div>
    </div>
  );
}

export default Stages;
