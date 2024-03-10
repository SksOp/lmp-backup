import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

const UploadIcon = () => (
  <svg className="w-8 h-8  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
    />
  </svg>
);
const InputFile = React.forwardRef<HTMLInputElement, InputProps>(({ id, name, className, label, onChange, description, ...props }, ref) => {
  return (
    <label htmlFor={id} className="w-full">
      <div className={cn("flex items-center justify-start px-4 py-2 gap-3 border w-full rounded-md", className)}>
        <div className="bg-foreground/5 p-3 rounded-full">
          <UploadIcon />
        </div>
        <div className="flex flex-col items-left justify-center ">
          <p className="mb-1 text-sm">
            {name ? (
              <span className="">{name}</span>
            ) : label ? (
              <span className="">{label}</span>
            ) : (
              <>
                <span className="font-semibold">Click to upload</span> or drag and drop
              </>
            )}
          </p>
          <p className="text-xs opacity-65">{description ?? "SVG, PNG, JPG or GIF (MAX. 800x400px)"}</p>
        </div>
        <input id={id} type="file" className="hidden" onChange={onChange} ref={ref} {...props} />
      </div>
    </label>
  );
});
InputFile.displayName = "InputFile";

export { InputFile };
