import { LangOptions } from "@/types";

export interface BankConfig {
  state_id: number | string;
  state_name: LangOptions;
  state_type: string;
  actor: string;
  input_fields: InputFields[];
}

type InputFields = {
  input_field_id: string; //customer_iqama_id
  isOptional?: boolean;
  label: LangOptions;
  description: LangOptions;
  rank: number;
  group: number;
  group_name: LangOptions;
  group_description: LangOptions;
  validationRegex?: string;
  verificationRequired?: boolean;
  apiValidation?: {
    initiateEndpoint?: string; // some cases when we just need to verify the data not send the otp , initiate can be used to send otp , we need to have some well documented doc for this
    verifyEndpoint: string;
    expectedResponse: string;
    dataFields?: string[];
  };
  dependacy?: number; //TODO
} & (Fields | Datefield | RadioField | RadioMultimedia);

interface Fields {
  input_field_type: "phone" | "text" | "number" | "file";
}

interface Datefield {
  input_field_type: "date";
  date_configuration: {
    format: "YYYY-MM-DD" | "DD-MM-YYYY" | "YYYY-MM-DDTHH:mm:ssZ";
    includeTime?: boolean;
  };
}

interface RadioField {
  input_field_type: "radio";
  options?: LangOptions[];
}

interface RadioMultimedia {
  input_field_type: "radio_multimedia";
}
