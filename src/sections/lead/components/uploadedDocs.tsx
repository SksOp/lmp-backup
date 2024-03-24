import { DocumentsIcon, DownloadIcon } from "@/components/svgs/icon";
import { Button } from "@/components/ui/button";
import { UploadedDoc } from "@/types";
import { Link } from "react-router-dom";

function UploadedDocument({ uploadedDoc }: { uploadedDoc: UploadedDoc }) {
  return (
    <Button
      variant={"outline"}
      className="flex py-6 w-full items-center border border-secondary-foreground/20 justify-between"
      onClick={() => window.open(uploadedDoc.link, "_blank")}
    >
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
    <div className="flex flex-col md:border md:p-6 rounded-lg">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-sm">Uploaded Documents</h2>
        <div className="flex flex-col gap-2">
          {uploadedDocs.map((uploadedDoc) => {
            return <UploadedDocument key={uploadedDoc.name} uploadedDoc={uploadedDoc}></UploadedDocument>;
          })}
        </div>
      </div>
    </div>
  );
}
