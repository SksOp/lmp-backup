import * as React from "react";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

const UploadIcon = ({ className }: { className?: ClassValue }) => (
  <svg className="" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5003 13.0005L10.0002 10.5004" stroke="#151515" strokeWidth="1.25005" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.0003 10.5004L7.50024 13.0005" stroke="#151515" strokeWidth="1.25005" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.0004 17.1673L10.0004 10.5004" stroke="#151515" strokeWidth="1.25005" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M6.66693 16.334H5.0002C3.15919 16.334 1.66675 14.8415 1.66675 13.0005C1.66675 11.1595 3.15919 9.66704 5.0002 9.66704L4.99187 9.60841C4.78445 8.15648 5.2173 6.68599 6.17826 5.57798C7.13922 4.46998 8.53371 3.83351 10.0004 3.8335C11.4671 3.83351 12.8615 4.46998 13.8225 5.57798C14.7835 6.68599 15.2163 8.15648 15.0089 9.60841L15.0006 9.66704C16.8416 9.66704 18.334 11.1595 18.334 13.0005C18.334 14.8415 16.8416 16.334 15.0006 16.334H13.3338"
      stroke="#151515"
      strokeWidth="1.25005"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const InputFile = React.forwardRef<HTMLInputElement, InputProps>(({ id, name, className, label, onChange, description, ...props }, ref) => {
  return (
    <>
    <label htmlFor={id} className=" p-0 mx-1 -mb-1 text-sm font-semibold ">
      {/* <span className="block text-left">{name}</span> */}
      <div className={cn("flex items-center cursor-pointer justify-start mt-1 px-3 py-2 gap-3 border w-full rounded-md", className)}>
        <div className="bg-[#CAD1D9]/30 p-2 rounded-full">
          <UploadIcon className />
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
            <p className="text-xs text-left opacity-65">{description ?? "SVG, PNG, JPG or GIF (MAX. 800x400px)"}</p>
          </div>
          <input id={id} type="file" className="hidden" onChange={onChange} ref={ref} {...props} />
        </div>
      </label>
    </>
  );
});
InputFile.displayName = "InputFile";

export { InputFile };
