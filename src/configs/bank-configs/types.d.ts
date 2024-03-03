export interface BankConfig {
  state_id: number | string;
  state_name: {
    en: string;
    ar: string;
  };
  state_type: string;
  actor: string;
  input_fields: {
    input_field_id: string;
    label: {
      en: string;
      ar: string;
    };
    rank: number;
    group: number;
    // any thing else as there are many banks and each bank has its own fields
    [key: string]: any;
  }[];
}

export interface BankConfig {
  state_id: number | string;
  state_name: {
    en: string;
    ar: string;
  };
  state_type: string;
  actor: string;
  input_fields: {
    input_field_id: string; //customer_iqama_id

    label: {
      en: string;
      ar: string;
    };
    description: {
      en: string;
      ar: string;
    };
    rank: number;
    group: number;
    group_name: {
      en: string;
      ar: string;
    };
    group_description: {
      en: string;
      ar: string;
    };
    validationRegex?: string;
    verificationRequired?: boolean;
    apiValidation?: {
      initiateEndpoint: string;
      verifyEndpoint: string;
      expectedResponse: string;
    };
    input_field_type: "radio" | "radio_multimedia" | "phone" | "text" | "number" | "date" | "file";
    options?: {
      image_url: string;
      label: {
        en: string;
        ar: string;
      };
    };
    dependacy: number; //TODO
  }[];
}
