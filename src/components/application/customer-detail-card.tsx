import { Icon } from "@iconify/react";
import { LeadLogo } from "../leadLogo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DetailViewer } from "../leadCard";

export const CustomerDetailCard = ({ name }: { name: string }) => (
  <Card>
    <CardHeader className="flex flex-row gap-2 px-4 py-4 pb-1 items-center">
      <LeadLogo imageName={"Camer Will"} />
      <CardTitle className="text-md">Cameron Williamson</CardTitle>
      <Icon icon="mage:verified-check-fill" className="w-6 h-6 text-primary" />
    </CardHeader>
    <CardContent className="px-4 py-3 flex flex-col gap-3">
      <DetailViewer title="Bank" value={name} />
      <DetailViewer title="Iqama Number" value="XXXXXXXXXXXX" />
      <DetailViewer title="Driving License" value="XXXXXXXXXXXX" />
    </CardContent>
  </Card>
);
