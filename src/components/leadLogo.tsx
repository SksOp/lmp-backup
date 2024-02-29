import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
  
interface props{
    image?: string;
    imageAlt?: string;
    imageName: string;
    className?: ClassValue;
}

export function LeadLogo( {image, imageAlt = "NA", imageName, className = false,}: props) {
    return (
      <Avatar className={cn("items-center",className)}>
        <AvatarImage src={image} alt={imageAlt} />
        <AvatarFallback>{imageName[0]+imageName[imageName.indexOf(' ')+1]}</AvatarFallback>
      </Avatar>
    )
  }
  