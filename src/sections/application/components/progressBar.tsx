import { Progress } from "@/components/ui/progress";
import React from "react";

function ProgressBar({ group }: { group: number }) {
  const progressBars = Array.from({ length: 5 }, (_, i) => i + 1);
  // console.log(group);
  return (
    <div className="flex justify-center items-center gap-1 p-2 mx-1">
      {progressBars.map((_, i) => (
        <Progress className="h-[0.30rem]" key={i} value={i <= group ? 100 : -2} />
      ))}
    </div>
  );
}

export default ProgressBar;
