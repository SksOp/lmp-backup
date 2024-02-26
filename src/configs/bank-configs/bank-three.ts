import { BankConfig } from "./types";

export const bankThree: BankConfig = {
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
      rank: 1,
      group: 1,
    },
    {
      input_field_id: "brand",
      label: {
        en: "Brand",
        ar: "العلامة التجارية",
      },
      rank: 2,
      group: 1,
    },
    {
      input_field_id: "variant",
      label: {
        en: "Variant",
        ar: "المتغير",
      },
      rank: 3,
      group: 1,
    },
    {
      input_field_id: "color",
      label: {
        en: "Color",
        ar: "اللون",
      },
      rank: 4,
      group: 1,
    },
    {
      input_field_id: "addons",
      label: {
        en: "Addons",
        ar: "الإضافات",
      },
      rank: 5,
      group: 1,
    },
    {
      input_field_id: "name",
      label: {
        en: "Full Name",
        ar: "الاسم",
      },
      rank: 6,
      group: 2,
    },
    {
      input_field_id: "customer_phone",
      label: {
        en: "Customer Phone",
        ar: "هاتف العميل",
      },
      type: "phone",
      validationRegex: "^\\+[1-9]{1}[0-9]{3,14}$",
      verificationRequired: true,
      apiValidation: {
        initiateEndpoint: "/initiatePhoneVerification",
        verifyEndpoint: "/verifyPhoneOTP",
        expectedResponse: "verified",
      },
      rank: 7,
      group: 2,
    },
    {
      input_field_id: "alternate_phone",
      label: {
        en: "Alternate Phone",
        ar: "الهاتف البديل",
      },
      rank: 8,
      group: 2,
    },
    {
      input_field_id: "customer_email",
      label: {
        en: "Customer Email",
        ar: "بريد العميل الإلكتروني",
      },
      type: "email",
      validationRegex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      verificationRequired: false,
      rank: 9,
      group: 2,
    },
    {
      input_field_id: "customer_iqama_id",
      label: {
        en: "Customer Iqama ID",
        ar: "هوية إقامة العميل",
      },
      type: "Iqama ID",
      validationRegex: "^[0-9]{10}$",
      apiValidation: {
        endpoint: "/validateIqamaID",
        dataFields: ["customer_name", "customer_dob"],
        expectedResponse: "matched",
      },
      rank: 10,
      group: 2,
    },
    {
      input_field_id: "customer_dob",
      label: {
        en: "Customer DOB",
        ar: "تاريخ ميلاد العميل",
      },
      type: "date",
      dateConfiguration: {
        format: "YYYY-MM-DD",
      },
      rank: 11,
      group: 2,
    },
    {
      input_field_id: "salaried_or_employed",
      label: {
        en: "Salaried or Employed",
        ar: "موظف أو مستخدم",
      },
      rank: 12,
      group: 3,
    },
    {
      input_field_id: "employer_name",
      label: {
        en: "Name of the Employer",
        ar: "اسم جهة العمل",
      },
      rank: 13,
      group: 3,
    },
    {
      input_field_id: "monthly_income",
      label: {
        en: "Monthly Income",
        ar: "الدخل الشهري",
      },
      rank: 14,
      group: 3,
    },
    {
      input_field_id: "any_other_loan",
      label: {
        en: "Any other loan?",
        ar: "أي قرض آخر",
      },
      rank: 15,
      group: 3,
    },
    {
      input_field_id: "monthly_estimated_expense",
      label: {
        en: "Overall anticipated expense?",
        ar: "المصروف الشهري المتوقع بشكل عام",
      },
      rank: 16,
      group: 3,
    },
    {
      input_field_id: "appointment_date",
      label: {
        en: "Appointment Date",
        ar: "موعد الموعد",
      },
      type: "date",
      dateConfiguration: {
        format: "YYYY-MM-DDTHH:mm:ssZ",
        includeTime: true,
      },
      rank: 17,
      group: 2,
    },
  ],
};
