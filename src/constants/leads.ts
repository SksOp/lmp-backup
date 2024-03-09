import { DetailedLead, MinimalLead } from "@/types";

export const MinimalLeads: MinimalLead[] = [
  {
    application_id: {
      application_id: "987654321",
      lead_name: "John Duo",
      lead_ID: "lead_234565432",
      current_state: {
        label: {
          en: "Application Created",
          ar: "تم إنشاء الطلب",
        },
        color: "#FFA500",
      },
      current_actor: "Dealer",
      created_date: "2023-12-31T08:00:00Z",
      last_updated_at: "2023-12-31T08:00:00Z",
      iqama_id: "123456789012",
      driving_license_number: "MH12 20211234567",
      phone_number: "+1234567890",
      email: "john.duo@example.com",
      is_verified: "yes",
      status: "active",
      car_details: {
        brand: "KIA",
        model: "K8",
        variant: "KIA K8 2023 3.5L GDI LX",
        price: {
          actual: "85,000",
          discount: "2500",
          final_price: "82500",
        },
        car_image: "/assets/car.png",
        color: { en: "Carpet Red", ar: "سجادة باللون الأحمر" },
      },
      lessor_details: {
        lessor_name: {
          en: "Demo Bank",
          ar: "بنك تجريبي",
        },
        recommended: "no",
        lessor_logo: "https://www.img.com/234567897654",
        lessor_ID: "LESSOR_87654323456",
        lessor_type: "bank",
        lessor_contact: {
          name: { en: "Mashal", ar: "مشعل" },
          phone: "+97199887766554",
          email: "lessoremail@demolessor.com",
        },
      },
      progress_measure: "70",
      is_draft: true,
      dealer_details: {
        dealer_id: "dealer_65432345678",
        dealer_name: {
          en: "National Motor Distributors",
          ar: "الموزعون الوطنيون للمحركات",
        },
        dealer_logo: "https://www.img.com/234567897654",
        dealer_contact: {
          name: { en: "Yazan", ar: "يزن" },
          phone: "+97199887766554",
          email: "dealeremail@demodealer.com",
        },
      },
      assigned_to_dealer_agent: "dealer_AGENTID_765432345",
      assigned_to_lessor_agent: "lessor_AGENTID_765432345",
    },
  },
  {
    application_id: {
      application_id: "123456789",
      lead_name: "Alice Smith",
      lead_ID: "lead_234565432",
      current_state: {
        label: {
          en: "Bank Decision",
          ar: "قرار البنك",
        },
        color: "#FFA500",
      },
      current_actor: "Bank",
      created_date: "2023-12-30T09:00:00Z",
      last_updated_at: "2023-12-31T08:00:00Z",
      iqama_id: "987654321098",
      driving_license_number: "MH12 20211234567",
      phone_number: "+19876543210",
      email: "alicesmith123@gmail.com",
      is_verified: "no",
      status: "active",
      car_details: {
        brand: "KIA",
        model: "K8",
        variant: "KIA K8 2023 3.5L GDI LX",
        price: {
          actual: "85,000",
          discount: "2500",
          final_price: "82500",
        },
        car_image: "/assets/car.png",
        color: { en: "Carpet Red", ar: "سجادة باللون الأحمر" },
      },
      lessor_details: {
        lessor_name: {
          en: "Demo Bank",
          ar: "بنك تجريبي",
        },
        recommended: "no",
        lessor_logo: "https://www.img.com/234567897654",
        lessor_ID: "LESSOR_87654323456",
        lessor_type: "bank",
        lessor_contact: {
          name: { en: "Mashal", ar: "مشعل" },
          phone: "+97199887766554",
          email: "kjh@gmail.com",
        },
      },
      progress_measure: "70",
      is_draft: true,
      dealer_details: {
        dealer_id: "dealer_65432345678",
        dealer_name: {
          en: "National Motor Distributors",
          ar: "الموزعون الوطنيون للمحركات",
        },
        dealer_logo: "https://www.img.com/234567897654",
        dealer_contact: {
          name: { en: "Yazan", ar: "يزن" },
          phone: "+97199887766554",
          email: "dealer@gmail.com",
        },
      },
      assigned_to_dealer_agent: "dealer_AGENTID_765432345",
      assigned_to_lessor_agent: "lessor_AGENTID_765432345",
    },
  },
  {
    application_id: {
      application_id: "987670321",
      lead_name: "John Duo",
      lead_ID: "lead_234565432",
      current_state: {
        label: {
          en: "Application Created",
          ar: "تم إنشاء الطلب",
        },
        color: "#FFA500",
      },
      current_actor: "Dealer",
      created_date: "2023-12-31T08:00:00Z",
      last_updated_at: "2023-12-31T08:00:00Z",
      iqama_id: "123456789012",
      driving_license_number: "MH12 20211234567",
      phone_number: "+1234567890",
      email: "john.duo@example.com",
      is_verified: "no",
      status: "active",
      car_details: {
        brand: "KIA",
        model: "K8",
        variant: "KIA K8 2023 3.5L GDI LX",
        price: {
          actual: "85,000",
          discount: "2500",
          final_price: "82500",
        },
        car_image: "/assets/car.png",
        color: { en: "Carpet Red", ar: "سجادة باللون الأحمر" },
      },
      lessor_details: {
        lessor_name: {
          en: "Demo Bank",
          ar: "بنك تجريبي",
        },
        recommended: "no",
        lessor_logo: "https://www.img.com/234567897654",
        lessor_ID: "LESSOR_87654323456",
        lessor_type: "bank",
        lessor_contact: {
          name: { en: "Mashal", ar: "مشعل" },
          phone: "+97199887766554",
          email: "lessoremail@demolessor.com",
        },
      },
      progress_measure: "70",
      is_draft: true,
      dealer_details: {
        dealer_id: "dealer_65432345678",
        dealer_name: {
          en: "National Motor Distributors",
          ar: "الموزعون الوطنيون للمحركات",
        },
        dealer_logo: "https://www.img.com/234567897654",
        dealer_contact: {
          name: { en: "Yazan", ar: "يزن" },
          phone: "+97199887766554",
          email: "dealeremail@demodealer.com",
        },
      },
      assigned_to_dealer_agent: "dealer_AGENTID_765432345",
      assigned_to_lessor_agent: "lessor_AGENTID_765432345",
    },
  },
  {
    application_id: {
      application_id: "124006789",
      lead_name: "Alice Smith",
      lead_ID: "lead_234565432",
      current_state: {
        label: {
          en: "Bank Decision",
          ar: "قرار البنك",
        },
        color: "#FFA500",
      },
      current_actor: "Bank",
      created_date: "2023-12-30T09:00:00Z",
      last_updated_at: "2023-12-31T08:00:00Z",
      iqama_id: "987654321098",
      driving_license_number: "MH12 20211234567",
      phone_number: "+19876543210",
      email: "alicesmith123@gmail.com",
      is_verified: "yes",
      status: "active",
      car_details: {
        brand: "KIA",
        model: "K8",
        variant: "KIA K8 2023 3.5L GDI LX",
        price: {
          actual: "85,000",
          discount: "2500",
          final_price: "82500",
        },
        car_image: "/assets/car.png",
        color: { en: "Carpet Red", ar: "سجادة باللون الأحمر" },
      },
      lessor_details: {
        lessor_name: {
          en: "Demo Bank",
          ar: "بنك تجريبي",
        },
        recommended: "no",
        lessor_logo: "https://www.img.com/234567897654",
        lessor_ID: "LESSOR_87654323456",
        lessor_type: "bank",
        lessor_contact: {
          name: { en: "Mashal", ar: "مشعل" },
          phone: "+97199887766554",
          email: "kjh@gmail.com",
        },
      },
      progress_measure: "70",
      is_draft: true,
      dealer_details: {
        dealer_id: "dealer_65432345678",
        dealer_name: {
          en: "National Motor Distributors",
          ar: "الموزعون الوطنيون للمحركات",
        },
        dealer_logo: "https://www.img.com/234567897654",
        dealer_contact: {
          name: { en: "Yazan", ar: "يزن" },
          phone: "+97199887766554",
          email: "dealer@gmail.com",
        },
      },
      assigned_to_dealer_agent: "dealer_AGENTID_765432345",
      assigned_to_lessor_agent: "lessor_AGENTID_765432345",
    },
  },
  {
    application_id: {
      application_id: "920654321",
      lead_name: "John Duo",
      lead_ID: "lead_234565432",
      current_state: {
        label: {
          en: "Application Created",
          ar: "تم إنشاء الطلب",
        },
        color: "#FFA500",
      },
      current_actor: "Dealer",
      created_date: "2023-12-31T08:00:00Z",
      last_updated_at: "2023-12-31T08:00:00Z",
      iqama_id: "123456789012",
      driving_license_number: "MH12 20211234567",
      phone_number: "+1234567890",
      email: "john.duo@example.com",
      is_verified: "yes",
      status: "active",
      car_details: {
        brand: "KIA",
        model: "K8",
        variant: "KIA K8 2023 3.5L GDI LX",
        price: {
          actual: "85,000",
          discount: "2500",
          final_price: "82500",
        },
        car_image: "/assets/car.png",
        color: { en: "Carpet Red", ar: "سجادة باللون الأحمر" },
      },
      lessor_details: {
        lessor_name: {
          en: "Demo Bank",
          ar: "بنك تجريبي",
        },
        recommended: "no",
        lessor_logo: "https://www.img.com/234567897654",
        lessor_ID: "LESSOR_87654323456",
        lessor_type: "bank",
        lessor_contact: {
          name: { en: "Mashal", ar: "مشعل" },
          phone: "+97199887766554",
          email: "lessoremail@demolessor.com",
        },
      },
      progress_measure: "70",
      is_draft: true,
      dealer_details: {
        dealer_id: "dealer_65432345678",
        dealer_name: {
          en: "National Motor Distributors",
          ar: "الموزعون الوطنيون للمحركات",
        },
        dealer_logo: "https://www.img.com/234567897654",
        dealer_contact: {
          name: { en: "Yazan", ar: "يزن" },
          phone: "+97199887766554",
          email: "dealeremail@demodealer.com",
        },
      },
      assigned_to_dealer_agent: "dealer_AGENTID_765432345",
      assigned_to_lessor_agent: "lessor_AGENTID_765432345",
    },
  },
  {
    application_id: {
      application_id: "123454075",
      lead_name: "Alice Smith",
      lead_ID: "lead_234565432",
      current_state: {
        label: {
          en: "Bank Decision",
          ar: "قرار البنك",
        },
        color: "#FFA500",
      },
      current_actor: "Bank",
      created_date: "2023-12-30T09:00:00Z",
      last_updated_at: "2023-12-31T08:00:00Z",
      iqama_id: "987654321098",
      driving_license_number: "MH12 20211234567",
      phone_number: "+19876543210",
      email: "alicesmith123@gmail.com",
      is_verified: "yes",
      status: "active",
      car_details: {
        brand: "KIA",
        model: "K8",
        variant: "KIA K8 2023 3.5L GDI LX",
        price: {
          actual: "85,000",
          discount: "2500",
          final_price: "82500",
        },
        car_image: "/assets/car.png",
        color: { en: "Carpet Red", ar: "سجادة باللون الأحمر" },
      },
      lessor_details: {
        lessor_name: {
          en: "Demo Bank",
          ar: "بنك تجريبي",
        },
        recommended: "no",
        lessor_logo: "https://www.img.com/234567897654",
        lessor_ID: "LESSOR_87654323456",
        lessor_type: "bank",
        lessor_contact: {
          name: { en: "Mashal", ar: "مشعل" },
          phone: "+97199887766554",
          email: "kjh@gmail.com",
        },
      },
      progress_measure: "70",
      is_draft: true,
      dealer_details: {
        dealer_id: "dealer_65432345678",
        dealer_name: {
          en: "National Motor Distributors",
          ar: "الموزعون الوطنيون للمحركات",
        },
        dealer_logo: "https://www.img.com/234567897654",
        dealer_contact: {
          name: { en: "Yazan", ar: "يزن" },
          phone: "+97199887766554",
          email: "dealer@gmail.com",
        },
      },
      assigned_to_dealer_agent: "dealer_AGENTID_765432345",
      assigned_to_lessor_agent: "lessor_AGENTID_765432345",
    },
  },
  {
    application_id: {
      application_id: "987696321",
      lead_name: "John Duo",
      lead_ID: "lead_234565432",
      current_state: {
        label: {
          en: "Application Created",
          ar: "تم إنشاء الطلب",
        },
        color: "#FFA500",
      },
      current_actor: "Dealer",
      created_date: "2023-12-31T08:00:00Z",
      last_updated_at: "2023-12-31T08:00:00Z",
      iqama_id: "123456789012",
      driving_license_number: "MH12 20211234567",
      phone_number: "+1234567890",
      email: "john.duo@example.com",
      is_verified: "yes",
      status: "active",
      car_details: {
        brand: "KIA",
        model: "K8",
        variant: "KIA K8 2023 3.5L GDI LX",
        price: {
          actual: "85,000",
          discount: "2500",
          final_price: "82500",
        },
        car_image: "/assets/car.png",
        color: { en: "Carpet Red", ar: "سجادة باللون الأحمر" },
      },
      lessor_details: {
        lessor_name: {
          en: "Demo Bank",
          ar: "بنك تجريبي",
        },
        recommended: "no",
        lessor_logo: "https://www.img.com/234567897654",
        lessor_ID: "LESSOR_87654323456",
        lessor_type: "bank",
        lessor_contact: {
          name: { en: "Mashal", ar: "مشعل" },
          phone: "+97199887766554",
          email: "lessoremail@demolessor.com",
        },
      },
      progress_measure: "70",
      is_draft: true,
      dealer_details: {
        dealer_id: "dealer_65432345678",
        dealer_name: {
          en: "National Motor Distributors",
          ar: "الموزعون الوطنيون للمحركات",
        },
        dealer_logo: "https://www.img.com/234567897654",
        dealer_contact: {
          name: { en: "Yazan", ar: "يزن" },
          phone: "+97199887766554",
          email: "dealeremail@demodealer.com",
        },
      },
      assigned_to_dealer_agent: "dealer_AGENTID_765432345",
      assigned_to_lessor_agent: "lessor_AGENTID_765432345",
    },
  },
];

export const DetailedLeads: DetailedLead = {
  personal_details: {
    name: "John Duo",
    phone_number: "+1234567890",
    email: "john.duo@example.com",
    dob: "23-08-1897",
    alternate_phone: "+1234567890",
    any_other_loans: "yes",
    monthly_expense: "4000",
    marital_status: "single",
  },
  professional_details: {
    employement_type: "employed",
    monthly_salary: "7500",
    total_experience: "15",
    current_employer: "BHUPA",
  },
  eductation_details: {
    education_completed: "bachelors",
    major: "computer science",
  },
  vehicle_details: {
    brand: "KIA",
    model: "Sonet",
    variant: "LX S 4",
    color: "red",
    addons: "",
    vehicle_type: "new",
  },
  lease_offer_details: {
    total_amount: "65000",
    interest: "6",
    installments: "48",
    monthly_EMI: "2400",
    credit_score: "546",
  },
  uploaded_docs: {
    //name, type, link
    driving_license: "https://www.img.com/8765678",
    iqama_doc: "https://www.img.com/8765678",
    photo: "https://www.img.com/8765678",
    salary_certificate: "https://www.img.com/8765678",
    income_statement: "https://www.img.com/8765678",
  },
  booking_payment_details: {
    booking_amount: "5000",
    amount_paid: "5000",
    amount_paid_by: "customer",
    payment_mode: "cash",
    payment_date: "2023-12-31T08:00:00Z",
  },
  history_timeline: {
    states: [
      {
        key: "1",
        name: {
          en: "Application Initiated",
          ar: "تم تشغيل التطبيق",
        },
        status: "completed",
        actor: "dealer",
        completed_by: "dealer_ID_764326543",
        completed_at: "2023-11-31T08:00:00Z",
        updated_by: "internal_ID_764326543",
        updated_at: "2023-12-31T08:00:00Z",
        state_type: "start",
        view_permission_actors: "dealer, bank, customer",
        edit_permission_actors: "dealer, bank, customer",
      },
      {
        key: "2",
        name: {
          en: "Bank Verifications",
          ar: "التحققات البنكية",
        },
        status: "completed",
        actor: "bank",
        completed_by: "dealer_ID_764326543",
        completed_at: "2023-12-31T08:00:00Z",
        updated_by: "internal_ID_764326543",
        updated_at: "2023-12-31T08:00:00Z",
        state_type: "intermediate",
        view_permission_actors: "dealer, bank, customer",
        edit_permission_actors: "dealer, bank, customer",
      },
      {
        key: "3",
        name: {
          en: "Document Upload by Customer",
          ar: "التحقق من الوثائق",
        },
        status: "current",
        actor: "customer",
        completed_by: "dealer_ID_764326543",
        completed_at: "2023-12-31T08:00:00Z",
        updated_by: "internal_ID_764326543",
        updated_at: "2023-12-31T08:00:00Z",
        state_type: "intermediate",
        view_permission_actors: "dealer, bank, customer",
        edit_permission_actors: "dealer, bank, customer",
      },
      {
        key: "4",
        name: {
          en: "Dealer Acknowledgement",
          ar: "إقرار الموزع",
        },
        status: "upcoming",
        actor: "dealer",
        completed_by: "dealer_ID_764326543",
        completed_at: "2023-12-31T08:00:00Z",
        updated_by: "internal_ID_764326543",
        updated_at: "2023-12-31T08:00:00Z",
        state_type: "intermediate",
        view_permission_actors: "dealer, bank, customer",
        edit_permission_actors: "dealer, bank, customer",
      },
      {
        key: "5",
        name: {
          en: "Loan Approved",
          ar: "تمت الموافقة على القرض",
        },
        status: "upcoming",
        actor: "bank",
        completed_by: "dealer_ID_764326543",
        completed_at: "2023-12-31T08:00:00Z",
        updated_by: "internal_ID_764326543",
        updated_at: "2023-12-31T08:00:00Z",
        state_type: "intermediate",
        view_permission_actors: "dealer, bank, customer",
        edit_permission_actors: "dealer, bank, customer",
      },
      {
        key: "6",
        name: {
          en: "Vehicle Delivery",
          ar: "تسليم المركبة",
        },
        status: "upcoming",
        actor: "dealer",
        completed_by: "dealer_ID_764326543",
        completed_at: "2023-05-31T08:00:00Z",
        updated_by: "internal_ID_764326543",
        updated_at: "2023-12-31T08:00:00Z",
        state_type: "intermediate",
        view_permission_actors: "dealer, bank, customer",
        edit_permission_actors: "dealer, bank, customer",
      },
      {
        key: "7",
        name: {
          en: "Loan Disbursed",
          ar: "تم رفض القرض",
        },
        status: "upcoming",
        actor: "dealer",
        completed_by: "dealer_ID_764326543",
        completed_at: "2023-10-31T08:00:00Z",
        updated_by: "internal_ID_764326543",
        updated_at: "2023-12-31T08:00:00Z",
        state_type: "close-won",
        view_permission_actors: "dealer, bank, customer",
        edit_permission_actors: "dealer, bank, customer",
      },
    ],
  },
  actions: {
    generic: [
      {
        en: "Upload Documents",
        ar: "Upload Documents",

        actor: "customer",
        fields: [
          {
            name: "Salary Certificate",
            type: "mm/pdf",
            max_size: "1MB",
            accepted_count: "1",
          },
          {
            name: "Income Proof",
            type: "mm/pdf",
            max_size: "1MB",
            accepted_count: "3",
          },
          {
            name: "Passport Photo",
            type: "mm/JPEG",
            max_size: "1MB",
            accepted_count: "1",
          },
        ],
      },
    ],
    non_generic: [
      {
        en: "Upload Documents",
        ar: "Upload Documents",
      },
    ],
  },
  nba: {
    en: "Awaiting for customer to upload all the necessery documentes, followup today to fastrack",
    ar: "Awaiting for customer to upload all the necessery documentes, followup today to fastrack",
  },
};
