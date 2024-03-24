import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { ClassValue } from "clsx";
import React from "react";

function HeroAvatar({
  className,
  icon,
}: {
  className?: ClassValue;
  icon?: string;
}) {
  return (
    <div
      className={cn("bg-muted max-w-min p-6 rounded-full ", className)}
    >
      <Icon
        icon={icon ?? "prime:user"}
        width="3rem"
        height="3rem"
        className="text-foreground"
      />
    </div>
  );
}

export default HeroAvatar;
