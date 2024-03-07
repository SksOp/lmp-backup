import { BankConfig } from "./types";

export const Bank2: BankConfig = {
  state_id: 1,
  state_name: {
    en: "Initiate Application",
    ar: "بدء الطلب",
  },
  state_type: "beginning",
  actor: "dealer",
  input_fields: [
    {
      input_field_id: "vehicle_registration_number",
      label: {
        en: "Vehicle Registration Number",
        ar: "رقم تسجيل المركبة",
      },
      description: {
        en: "Enter the Vehicle Registration Number",
        ar: "أدخل رقم تسجيل المركبة",
      },
      rank: 1,
      group: 1,
      group_name: {
        en: "Vehicle Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Vehicle Details",
        ar: "أدخل تفاصيل المركبة",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "select_brand",
      label: {
        en: "Brand",
        ar: "العلامة التجارية",
      },
      description: {
        en: "Enter the Vehicle Brand",
        ar: "أدخل علامة المركبة",
      },
      rank: 2,
      group: 1,
      group_name: {
        en: "Vehicle Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Vehicle Details",
        ar: "أدخل تفاصيل المركبة",
      },
      input_field_type: "radio_multimedia",
    },
    {
      input_field_id: "select_model",
      label: {
        en: "Select Model",
        ar: "",
      },
      description: {
        en: "Please select your car model",
        ar: "",
      },
      rank: 3,
      group: 1,
      group_name: {
        en: "Car Details",
        ar: "",
      },
      group_description: {
        en: "Enter the Car Details",
        ar: "",
      },
      input_field_type: "radio_multimedia",
    },
    {
      input_field_id: "select_varient",
      label: {
        en: "Variant",
        ar: "المتغير",
      },
      description: {
        en: "Please select your car varient",
        ar: "",
      },
      rank: 4,
      group: 1,
      group_name: {
        en: "Vehicle Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Vehicle Details",
        ar: "أدخل تفاصيل المركبة",
      },
      input_field_type: "radio",
    },
    {
      input_field_id: "color",
      label: {
        en: "Color",
        ar: "اللون",
      },
      description: {
        en: "Enter the Vehicle Color",
        ar: "أدخل لون المركبة",
      },
      rank: 5,
      group: 1,
      group_name: {
        en: "Vehicle Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Vehicle Details",
        ar: "أدخل تفاصيل المركبة",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "addons",
      label: {
        en: "Addons",
        ar: "الإضافات",
      },
      description: {
        en: "Enter the Vehicle Addons",
        ar: "أدخل إضافات المركبة",
      },
      rank: 6,
      group: 1,
      group_name: {
        en: "Vehicle Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Vehicle Details",
        ar: "أدخل تفاصيل المركبة",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "name",
      label: {
        en: "Full Name",
        ar: "الاسم",
      },
      description: {
        en: "Enter the Customer Full Name",
        ar: "أدخل الاسم الكامل للعميل",
      },
      rank: 7,
      group: 2,
      group_name: {
        en: "Customer Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Customer Details",
        ar: "أدخل تفاصيل المركبة",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "customer_phone",
      label: {
        en: "Customer Phone",
        ar: "هاتف العميل",
      },
      description: {
        en: "Enter the Customer Phone Number",
        ar: "أدخل رقم هاتف العميل",
      },
      input_field_type: "phone",
      validationRegex: "^\\+[1-9]{1}[0-9]{3,14}$",
      verificationRequired: true,
      apiValidation: {
        initiateEndpoint: "/initiatePhoneVerification",
        verifyEndpoint: "/verifyPhoneOTP",
        expectedResponse: "verified",
      },
      rank: 8,
      group: 2,
      group_name: {
        en: "Customer Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Customer Details",
        ar: "أدخل تفاصيل المركبة",
      },
    },
    {
      input_field_id: "alternate_phone",
      label: {
        en: "Alternate Phone",
        ar: "الهاتف البديل",
      },
      description: {
        en: "Enter the Customer Alternate Phone Number",
        ar: "أدخل رقم هاتف العميل البديل",
      },
      rank: 9,
      group: 2,
      group_name: {
        en: "Customer Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Customer Details",
        ar: "أدخل تفاصيل المركبة",
      },
      input_field_type: "phone",
    },
    {
      input_field_id: "customer_email",
      label: {
        en: "Customer Email",
        ar: "بريد العميل الإلكتروني",
      },
      description: {
        en: "Enter the Customer Email Address",
        ar: "أدخل عنوان بريد العميل الإلكتروني",
      },
      input_field_type: "text",
      validationRegex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      verificationRequired: false,
      rank: 10,
      group: 2,
      group_name: {
        en: "Customer Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Customer Details",
        ar: "أدخل تفاصيل المركبة",
      },
    },
    {
      input_field_id: "customer_iqama_id",
      label: {
        en: "Customer Iqama ID",
        ar: "هوية إقامة العميل",
      },
      description: {
        en: "Enter the Customer Iqama ID",
        ar: "أدخل هوية إقامة العميل",
      },
      input_field_type: "text",
      validationRegex: "^[0-9]{10}$",
      apiValidation: {
        verifyEndpoint: "/validateIqamaID",
        dataFields: ["customer_name", "customer_dob"],
        expectedResponse: "matched",
      },
      rank: 11,
      group: 2,
      group_name: {
        en: "Customer Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Customer Details",
        ar: "أدخل تفاصيل المركبة",
      },
    },
    {
      input_field_id: "customer_dob",
      label: {
        en: "Customer DOB",
        ar: "تاريخ ميلاد العميل",
      },
      input_field_type: "date",
      date_configuration: {
        format: "YYYY-MM-DD",
      },
      description: {
        en: "Enter the Customer Date of Birth",
        ar: "أدخل تاريخ ميلاد العميل",
      },
      rank: 12,
      group: 2,
      group_name: {
        en: "Customer Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Customer Details",
        ar: "أدخل تفاصيل المركبة",
      },
    },
    {
      input_field_id: "appointment_date",
      label: {
        en: "Appointment Date",
        ar: "موعد الموعد",
      },
      description: {
        en: "Enter the Appointment Date",
        ar: "أدخل تاريخ الموعد",
      },

      input_field_type: "date",
      date_configuration: {
        format: "YYYY-MM-DDTHH:mm:ssZ",
        includeTime: true,
      },
      rank: 13,
      group: 2,
      group_name: {
        en: "Customer Details",
        ar: "تفاصيل المركبة",
      },
      group_description: {
        en: "Enter the Customer Details",
        ar: "أدخل تفاصيل المركبة",
      },
    },
    {
      input_field_id: "salaried_or_employed",
      label: {
        en: "Salaried or Employed",
        ar: "موظف أو مستخدم",
      },
      description: {
        en: "Enter the Employment Details",
        ar: "أدخل تفاصيل التوظيف",
      },
      rank: 14,
      group: 3,
      group_name: {
        en: "Employment Details",
        ar: "تفاصيل التوظيف",
      },
      group_description: {
        en: "Enter the Employment Details",
        ar: "أدخل تفاصيل التوظيف",
      },
      input_field_type: "radio",
      options: [
        {
          en: "Salaried",
          ar: "موظف",
        },
        {
          en: "Employed",
          ar: "مستخدم",
        },
      ],
    },
    {
      input_field_id: "employer_name",
      label: {
        en: "Name of the Employer",
        ar: "اسم جهة العمل",
      },
      description: {
        en: "Enter the Name of the Employer",
        ar: "أدخل اسم جهة العمل",
      },
      rank: 15,
      group: 3,
      group_name: {
        en: "Employment Details",
        ar: "تفاصيل التوظيف",
      },
      group_description: {
        en: "Enter the Employment Details",
        ar: "أدخل تفاصيل التوظيف",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "monthly_income",
      label: {
        en: "Monthly Income",
        ar: "الدخل الشهري",
      },
      description: {
        en: "Enter the Monthly Income",
        ar: "أدخل الدخل الشهري",
      },
      rank: 16,
      group: 3,
      group_name: {
        en: "Employment Details",
        ar: "تفاصيل التوظيف",
      },
      group_description: {
        en: "Enter the Employment Details",
        ar: "أدخل تفاصيل التوظيف",
      },
      input_field_type: "number",
    },
    {
      input_field_id: "any_other_loan",
      label: {
        en: "Any other loan?",
        ar: "أي قرض آخر",
      },
      description: {
        en: "Enter the Employment Details",
        ar: "أدخل تفاصيل التوظيف",
      },
      rank: 17,
      group: 3,
      group_name: {
        en: "Employment Details",
        ar: "تفاصيل التوظيف",
      },
      group_description: {
        en: "Enter the Employment Details",
        ar: "أدخل تفاصيل التوظيف",
      },
      input_field_type: "radio",
      options: [
        {
          en: "Yes",
          ar: "نعم",
        },
        {
          en: "No",
          ar: "لا",
        },
      ],
    },
    {
      input_field_id: "monthly_estimated_expense",
      label: {
        en: "Overall anticipated expense?",
        ar: "المصروف الشهري المتوقع بشكل عام",
      },
      description: {
        en: "Enter the Employment Details",
        ar: "أدخل تفاصيل التوظيف",
      },
      rank: 18,
      group: 3,
      group_name: {
        en: "Employment Details",
        ar: "تفاصيل التوظيف",
      },
      group_description: {
        en: "Enter the Employment Details",
        ar: "أدخل تفاصيل التوظيف",
      },
      input_field_type: "number",
    },
  ],
};
