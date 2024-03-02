import { Progress } from "@/components/ui/progress";
import React from "react";

function ProgressBar({ group }: { group: number }) {
  const progressBars = Array.from({ length: 4 }, (_, i) => i + 1);
  console.log(group);
  return (
    <div className="flex justify-center items-center gap-4 p-2">
      {progressBars.map((_, i) => (
        <Progress key={i} value={i < group ? 100 : 0} />
      ))}
    </div>
  );
}

export default ProgressBar;
