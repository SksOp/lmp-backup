export type MinimalLead = {
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

interface State {
  key: string;
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
}

interface States {
  [key: string]: State ;
}

export type DetailedLead = {
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
    states: States;
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

export type LeadAnalytics = {
  total_applications: string;
  states: {
    1: {
      count: string;
      name: {
        en: string;
        ar: string;
      };
      status: string;
    };
    2: {
      count: string;
      name: {
        en: string;
        ar: string;
      };
      status: string;
    };
    3: {
      count: string;
      name: {
        en: string;
        ar: string;
      };
      status: string;
    };
    4: {
      count: string;
      name: {
        en: string;
        ar: string;
      };
      status: string;
    };
    5: {
      count: string;
      name: {
        en: string;
        ar: string;
      };
      status: string;
    };
    6: {
      count: string;
      name: {
        en: string;
        ar: string;
      };
      status: string;
    };
    7: {
      count: string;
      name: {
        en: string;
        ar: string;
      };
      status: string;
    };
  };
};
