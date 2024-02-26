export type DetailedLead = {
  lead_id: string;
  customer_name: {
    value: string;
    labels: {
      en: string;
      ar: string;
    };
  };
  phone_number: string;
  email: string;
  iqama_id: string;
  profession: {
    value: string;
    labels: {
      en: string;
      ar: string;
    };
  };
  monthly_income: {
    value: number;
    labels: {
      en: string;
      ar: string;
    };
  };
  other_loans: {
    value: boolean;
    labels: {
      en: string;
      ar: string;
    };
  };
  vehicle_details: {
    registration_number: string;
    brand: {
      value: string;
      labels: {
        en: string;
        ar: string;
      };
    };
    variant: {
      value: string;
      labels: {
        en: string;
        ar: string;
      };
    };
    color: {
      value: string;
      labels: {
        en: string;
        ar: string;
      };
    };
    addons: {
      value: string;
      labels: {
        en: string;
        ar: string;
      };
    }[];
  };
  bank_decision: {
    decision: {
      value: string;
      labels: {
        en: string;
        ar: string;
      };
    };
    approval_amount: {
      value: number | null;
      labels: {
        en: string;
        ar: string;
      };
    };
    interest_rate: {
      value: number | null;
      labels: {
        en: string;
        ar: string;
      };
    };
  };
  contract_signed: {
    value: boolean;
    labels: {
      en: string;
      ar: string;
    };
  };
  booking_fee_paid: {
    value: boolean;
    labels: {
      en: string;
      ar: string;
    };
  };
  vehicle_received: {
    value: boolean;
    labels: {
      en: string;
      ar: string;
    };
  };
  attached_documents: {
    name: {
      en: string;
      ar: string;
    };
    file_url: string;
  }[];
  current_state: {
    label: {
      en: string;
      ar: string;
    };
    color: string;
  };
  state_history: {
    state: {
      en: string;
      ar: string;
    };
    timestamp: string;
  }[];
};

export type MinimalLead = {
  lead_id: string;
  lead_name: string;
  current_state: {
    label: {
      en: string;
      ar: string;
    };
    color: string;
  };
  actor: string;
  created_date: string;
  last_updated_at: string;
  iqama_id: string;
  phone_number: string;
  email: string;
  status: {
    en: string;
    ar: string;
  };
};
