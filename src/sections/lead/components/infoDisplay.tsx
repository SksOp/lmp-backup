import { DetailViewer } from "@/components/leadCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface InfoProps {
  title: string;
  item: { [key: string]: string };
}

function InfoDisplay({ title, item }: InfoProps) {
  return (
    <div>
      <Card className="w-full">
        <CardHeader className="py-4 md:flex hidden">
          <h2 className="font-bold">Personal Details</h2>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 md:pt-0 p-6">
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-3 md:grid-rows-2 gap-y-1 gap-x-3">
            <div className="flex md:flex-col gap-2">
              <span className="text-secondary-foreground/50 text-sm md:col-span-1 min-w-[7.5rem]">National ID :</span>
              <span className="text-sm md:col-span-2 font-medium">{item.national_id}</span>
            </div>
            <div className="flex md:flex-col gap-2">
              <span className="text-secondary-foreground/50 text-sm md:col-span-1 min-w-[7.5rem]">Date of birth :</span>
              <span className="text-sm md:col-span-2 font-medium">{item.dob}</span>
            </div>
            <div className="flex md:flex-col gap-2">
              <span className="text-secondary-foreground/50 text-sm md:col-span-1 min-w-[7.5rem]">Mobile number :</span>
              <span className="text-sm md:col-span-2 font-medium">{item.phone_number}</span>
            </div>
            <div className="flex md:flex-col gap-2">
              <span className="text-secondary-foreground/50 text-sm md:col-span-1 min-w-[7.5rem]">Email address :</span>
              <span className="text-sm md:col-span-2 font-medium">{item.email}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoDisplay;
