import { DetailViewer } from "@/components/leadCard";
import { Card, CardContent } from "@/components/ui/card";

interface InfoProps {
  title: string;
  item: { [key: string]: string };
}

function InfoDisplay({ title, item }: InfoProps) {
  return (
    <div>
      <Card className="w-full">
        <CardContent className="p-6">
          {/* {Object.entries(items).map(([key, value]) => (
            <DetailViewer key={key} title={key} value={value} />
          ))} */}
          <DetailViewer title="National ID" value={item.national_id} />
          <DetailViewer title="Date of birth" value={item.dob} />
          <DetailViewer title="Mobile number" value={item.phone_number} />
          <DetailViewer title="Email address" value={item.email} />
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoDisplay;
