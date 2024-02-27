import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { ClassValue } from "clsx";
import React from "react";

function UserAvatar({ className }: { className?: ClassValue }) {
  return (
    <div
      className={cn(" bg-primary/10 max-w-min p-8 rounded-full ", className)}
    >
      <Icon
        icon="prime:user"
        width="3rem"
        height="3rem"
        className="text-primary"
      />
    </div>
  );
}

export default UserAvatar;
