import { User } from "@/auth/types";
import { LockIcon, LogoutIcon, TranslateIcon } from "@/components/svgs/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { paths } from "@/router";
import { ClassValue } from "clsx";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Profile({ user, className }: { user: User; className?: ClassValue }) {
  const { name, email, number, role } = user;
  return (
    <div className={cn("flex flex-col gap-2 pt-16 md:p-0 bg-background ml-1 items-center px-4 text-xs md:text-base", className)}>
      <div className="flex flex-col border md:border-0 rounded-md gap-2 w-full px-3 py-2 mt-5 md:m-0">
        <div className="flex items-center gap-2 mb-1">
          <Avatar>
            {/* <AvatarImage src={image} alt={imageAlt} /> */}
            <AvatarFallback>{name[0] + name[name.indexOf(" ") + 1]}</AvatarFallback>
          </Avatar>
          <h2 className="font-semibold">{name}</h2>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <span className="text-secondary-foreground/60 text-sm">Email:</span>
            <span className="text-secondary-foreground/60 text-sm">Phone:</span>
            <span className="text-secondary-foreground/60 text-sm">Role:</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium text-sm">{email}</span>
            <span className="font-medium text-sm">{number}</span>
            <span className="font-medium text-sm">{role.charAt(0).toUpperCase() + role.slice(1)}</span>
          </div>
        </div>
      </div>
      <hr className="w-full"></hr>
      <Link className="w-full" to={`${paths.resetPassword}`}>
        <div className="w-full rounded-md border md:border-0 px-3 py-3">
          <div className="flex gap-4 justify-between">
            <div className="flex items-center gap-2 font-normal">
              <LockIcon /> Reset Password
            </div>
            <ChevronRight />
          </div>
        </div>
      </Link>
      <Accordion className="w-full rounded-md border md:border-0 px-3" type="single" collapsible>
        <AccordionItem className="border-0" value="item-1">
          <AccordionTrigger className=" gap-4  py-3">
            <div className="flex items-center gap-2 font-normal">
              <TranslateIcon /> Choose Language
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup className="gap-4" defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="text-secondary-foreground border-secondary-foreground/20" value="option-one" id="option-one" />
                <Label className="font-normal" htmlFor="option-one">
                  English
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="text-secondary-foreground border-secondary-foreground/20" value="option-two" id="option-two" />
                <Label className="font-normal" htmlFor="option-two">
                  Arabic
                </Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link className="w-full" to={`${paths.logout}`}>
        <div className="w-full rounded-md border md:border-0 px-3 py-3 text-red-600">
          <div className="flex gap-4 justify-between">
            <div className="flex items-center gap-2 font-normal">
              <LogoutIcon /> Logout
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
