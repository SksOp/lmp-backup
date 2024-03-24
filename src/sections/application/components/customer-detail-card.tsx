import { Icon } from "@iconify/react";
import { LeadLogo } from "../../../components/leadLogo";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { DetailViewer } from "../../../components/leadCard";
import { VerifiedLeadIcon } from "@/components/svgs/icon";

export const CustomerDetailCard = ({ name }: { name: string }) => (
  <Card className="px-4 py-3 mt-1 ">
    <CardHeader className="flex flex-row gap-2 p-0 items-center justify-start">
      <LeadLogo imageName={"Camer Will"} className="-translate-y-1" />
      <CardTitle className="text-sm font-bold pb-4">Cameron Williamson</CardTitle>
      <VerifiedLeadIcon className='mr-1 mb-3' />
      {/* <Icon icon="mage:verified-check-fill" className="w-6 h-6 text-primary" /> */}
    </CardHeader>
    <CardContent className="px-4 p-0 flex flex-col gap-2 ">
      <DetailViewer title="Bank" value={name} />
      <DetailViewer title="Iqama Number" value="XXXXXXXXXXXXXX" />
      <DetailViewer title="Driving License" value="XXXXXXXXXXXXXX" />
    </CardContent>
  </Card>
);
