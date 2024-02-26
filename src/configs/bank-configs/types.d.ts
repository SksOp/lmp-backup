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
