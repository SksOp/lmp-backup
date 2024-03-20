"use client";

import { CrossIcon, HamburgerMenuIcon } from "@/components/svgs/icon";
import { useState, RefObject, useEffect, useRef } from "react";
import { DetailedLeads } from "@/constants/leads";
import { DetailedLead } from "@/types";

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

interface ActionsProps {
  setOpen: (open: boolean) => void;
  detailedLeads: DetailedLead;
}

export function CoreActions({ detailedLeads }: { detailedLeads: DetailedLead }) {
  const { actions } = detailedLeads;
  const allActions = [...actions.generic, ...actions.non_generic];

  return (
    <div className="p-2 flex flex-col gap-3 ">
      {allActions.map((action) => {
        return (
          <span key={action.en + get_id()} className="p-1 px-2  rounded-sm hover:bg-primary/10">
            {action.en}
          </span>
        );
      })}
    </div>
  );
}

export function Actions({ detailedLeads, setOpen }: ActionsProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef, setOpen);

  return (
    <div ref={wrapperRef} className="absolute  bottom-0 right-0 text-sm bg-background  w-48 rounded-md drop-shadow-lg font-medium">
      <CoreActions detailedLeads={detailedLeads} />
      <hr />
      <div className="p-2" onClick={() => setOpen(false)}>
        <span className="py-1 px-2 rounded-sm hover:bg-primary/10 flex items-center justify-between">
          Close <CrossIcon className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
}

function NavBottom() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="z-10 fixed bottom-3 right-2 m-5">
      <div>
        <div onClick={() => setOpen(true)}>
          <HamburgerMenuIcon className="bg-primary rounded-full p-3 w-14 h-14" />
        </div>
        {open && <Actions setOpen={setOpen} detailedLeads={DetailedLeads} />}
      </div>
    </footer>
  );
}

export default NavBottom;
