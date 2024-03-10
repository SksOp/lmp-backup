"use client";

import { CrossIcon, HamburgerMenuIcon } from "@/components/svgs/icon";
import { useState, RefObject, useEffect, useRef } from "react";
import { DetailedLeads } from "@/constants/leads";

function useOutsideAlerter(ref: RefObject<HTMLElement>, setOpen: (open: boolean) => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setOpen]);
}

let id = 0;

function get_id() {
  return id++;
}

function NavBottom() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef, setOpen);
  const { actions } = DetailedLeads;
  const allActions = [...actions.generic, ...actions.non_generic];

  return (
    <footer className="z-10 fixed bottom-3 right-2 m-5">
      <div>
        <div onClick={() => setOpen(true)}>
          <HamburgerMenuIcon className="bg-primary rounded-full p-3 w-14 h-14" />
        </div>
        {open && (
          <div ref={wrapperRef} className="absolute  bottom-0 right-0 text-sm bg-background  w-48 rounded-md drop-shadow-lg font-medium">
            <div className="p-2 flex flex-col gap-3 ">
              {allActions.map((action) => {
                return (
                  <span key={action.en + get_id()} className="p-1 px-2  rounded-sm hover:bg-primary/10">
                    {action.en}
                  </span>
                );
              })}
            </div>
            <hr />
            <div className="p-2" onClick={() => setOpen(false)}>
              <span className="py-1 px-2 rounded-sm hover:bg-primary/10 flex items-center justify-between">
                Close <CrossIcon className="w-5 h-5" />
              </span>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default NavBottom;
