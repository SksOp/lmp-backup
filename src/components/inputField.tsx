import React from 'react'
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

function InputField({ children,className }: { children: React.ReactNode,className: ClassValue }) {
  return (
    <div className={cn("px-2 my-2 border-r-2 w-full",className)}>
      {children}
    </div>
  )
}

export default InputField
