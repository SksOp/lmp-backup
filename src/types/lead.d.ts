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
  completion_actor_name: string;
  updated_by: string;
  updated_at: string;
  state_type: string;
  view_permission_actors: string;
  edit_permission_actors: string;
}

interface States {
  [key: string]: State;
}

interface GenericAction {
  en: string;
  ar: string;

  actor: string;
  fields: {
    name: string;
    type: string;
    max_size: string;
    accepted_count: string;
  }[];
}

interface NonGenericAction {
  en: string;
  ar: string;
}

interface Actions {
  generic: GenericAction[];
  non_generic: NonGenericAction[];
}

type UploadedDoc = {
  name: string;
  type: string;
  link: string;
};

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
    status: "active" | "inactive";
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
    is_draft: boolean;
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

export type DetailedLead = {
  personal_details: {
    national_id: string;
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
  uploaded_docs: UploadedDoc[];
  booking_payment_details: {
    booking_amount: string;
    amount_paid: string;
    amount_paid_by: string;
    payment_mode: string;
    payment_date: string;
  };
  history_timeline: {
    states: State[];
  };
  actions: Actions;
  nba: {
    en: string;
    ar: string;
  };
};
