import { Icon } from "@iconify/react";
import { LeadLogo } from "../../../components/leadLogo";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { DetailViewer } from "../../../components/leadCard";

export const CustomerDetailCard = ({ name }: { name: string }) => (
  <Card className="px-4 py-2">
    <CardHeader className="flex flex-row gap-2 p-0 pb-3 items-center">
      <LeadLogo imageName={"Camer Will"} />
      <CardTitle className="text-sm">Cameron Williamson</CardTitle>
      <Icon icon="mage:verified-check-fill" className="w-6 h-6 text-primary" />
    </CardHeader>
    <CardContent className="px-4 p-0 flex flex-col gap-2">
      <DetailViewer title="Bank" value={name} />
      <DetailViewer title="Iqama Number" value="XXXXXXXXXXXX" />
      <DetailViewer title="Driving License" value="XXXXXXXXXXXX" />
    </CardContent>
  </Card>
);
