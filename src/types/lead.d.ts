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

export type NewMinimalLead = {
  application_id: {
    application_id: string;
    lead_name: string;
    lead_ID: string;
    current_state: {
      label: {
        en: string;
        ar: string;
      };
      color: string;
    };
    current_actor: string;
    created_date: string;
    last_updated_at: string;
    iqama_id: string;
    driving_license_number: string;
    phone_number: string;
    email: string;
    is_verified: string;
    status: string;
    car_details: {
      brand: string;
      model: string;
      variant: string;
      price: {
        actual: string;
        discount: string;
        final_price: string;
      };
      car_image: string;
      color: {
        en: string;
        ar: string;
      };
    };
    lessor_details: {
      lessor_name: {
        en: string;
        ar: string;
      };
      recommended: string;
      lessor_logo: string;
      lessor_ID: string;
      lessor_type: string;
      lessor_contact: {
        name: {
          en: string;
          ar: string;
        };
        phone: string;
        email: string;
      };
    };
    progress_measure: string;
    is_draft: string;
    dealer_details: {
      dealer_id: string;
      dealer_name: {
        en: string;
        ar: string;
      };
      dealer_logo: string;
      dealer_contact: {
        name: {
          en: string;
          ar: string;
        };
        phone: string;
        email: string;
      };
    };
    assigned_to_dealer_agent: string;
    assigned_to_lessor_agent: string;
  };
};

export type NewDetailedLead = {
  personal_details: {
    name: string;
    phone_number: string;
    email: string;
    dob: string;
    alternate_phone: string;
    any_other_loans: string;
    monthly_expense: string;
    marital_status: string;
  };
  professional_details: {
    employement_type: string;
    monthly_salary: string;
    total_experience: string;
    current_employer: string;
  };
  eductation_details: {
    education_completed: string;
    major: string;
  };
  vehicle_details: {
    brand: string;
    model: string;
    variant: string;
    color: string;
    addons: string;
    vehicle_type: string;
  };
  lease_offer_details: {
    total_amount: string;
    interest: string;
    installments: string;
    monthly_EMI: string;
    credit_score: string;
  };
  uploaded_docs: {
    driving_license: string;
    iqama_doc: string;
    photo: string;
    salary_certificate: string;
    income_statement: string;
  };
  booking_payment_details: {
    booking_amount: string;
    amount_paid: string;
    amount_paid_by: string;
    payment_mode: string;
    payment_date: string;
  };
  history_timeline: {
    states: {
      1: {
        name: {
          en: string;
          ar: string;
        };
        status: string;
        actor: string;
        completed_by: string;
        completed_at: string;
        updated_by: string;
        updated_at: string;
        state_type: string;
        view_permission_actors: string;
        edit_permission_actors: string;
      };
      2: {
        name: {
          en: string;
          ar: string;
        };
        status: string;
        actor: string;
        completed_by: string;
        completed_at: string;
        updated_by: string;
        updated_at: string;
        state_type: string;
        view_permission_actors: string;
        edit_permission_actors: string;
      };
      3: {
        count: string;
        name: {
          en: string;
          ar: string;
        };
        status: string;
        actor: string;
        completed_by: string;
        completed_at: string;
        updated_by: string;
        updated_at: string;
        state_type: string;
        view_permission_actors: string;
        edit_permission_actors: string;
      };
      4: {
        name: {
          en: string;
          ar: string;
        };
        status: string;
        actor: string;
        completed_by: string;
        completed_at: string;
        updated_by: string;
        updated_at: string;
        state_type: string;
        view_permission_actors: string;
        edit_permission_actors: string;
      };
      5: {
        name: {
          en: string;
          ar: string;
        };
        status: string;
        actor: string;
        completed_by: string;
        completed_at: string;
        updated_by: string;
        updated_at: string;
        state_type: string;
        view_permission_actors: string;
        edit_permission_actors: string;
      };
      6: {
        name: {
          en: string;
          ar: string;
        };
        status: string;
        actor: string;
        completed_by: string;
        completed_at: string;
        updated_by: string;
        updated_at: string;
        state_type: string;
        view_permission_actors: string;
        edit_permission_actors: string;
      };
      7: {
        name: {
          en: string;
          ar: string;
        };
        status: string;
        actor: string;
        completed_by: string;
        completed_at: string;
        updated_by: string;
        updated_at: string;
        state_type: string;
        view_permission_actors: string;
        edit_permission_actors: string;
      };
    };
  };
  actions: {
    1: {
      en: string;
      ar: string;
    };
    actor: string;
    fields: {
      1: {
        name: string;
        type: string;
        max_size: string;
        accepted_count: string;
      };
      2: {
        name: string;
        type: string;
        max_size: string;
        accepted_count: string;
      };
      3: {
        name: string;
        type: string;
        max_size: string;
        accepted_count: string;
      };
    };
  };
  nba: {
    en: string;
    ar: string;
  };
};
