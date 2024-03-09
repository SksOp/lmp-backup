import { DocumentsIcon, DownloadIcon } from "@/components/svgs/icon";
import { Button } from "@/components/ui/button";
import { UploadedDoc } from "@/types";
import { Link } from "react-router-dom";

function UploadedDocument({ uploadedDoc }: { uploadedDoc: UploadedDoc }) {
  return (
    <Button variant={"outline"} className="flex py-6 w-full items-center border border-secondary-foreground/20 justify-between">
      <div className="flex items-center gap-2">
        <DocumentsIcon />
        {uploadedDoc.name}
      </div>
      <Link to={uploadedDoc.link}>
        <DownloadIcon />
      </Link>
    </Button>
  );
}

export function UploadedDocuments({ uploadedDocs }: { uploadedDocs: UploadedDoc[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold">Uploaded Documents</h2>
      <div className="flex flex-col gap-3">
        {uploadedDocs.map((uploadedDoc) => {
          return <UploadedDocument key={uploadedDoc.name} uploadedDoc={uploadedDoc}></UploadedDocument>;
        })}
      </div>
    </div>
  );
}
