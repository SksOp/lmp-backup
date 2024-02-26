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
      input_field_id: "phone",
      label: {
        en: "Phone",
        ar: "الهاتف",
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
      input_field_id: "email",
      label: {
        en: "Email",
        ar: "البريد الإلكتروني",
      },
      rank: 8,
      group: 2,
    },
    {
      input_field_id: "iqama_id",
      label: {
        en: "Iqama ID",
        ar: "هوية الإقامة",
      },
      rank: 9,
      group: 2,
    },
    {
      input_field_id: "salaried_or_employed",
      label: {
        en: "Salaried or Employed",
        ar: "موظف أو مستخدم",
      },
      rank: 10,
      group: 3,
    },
    {
      input_field_id: "employer_name",
      label: {
        en: "Name of the Employer",
        ar: "اسم جهة العمل",
      },
      rank: 11,
      group: 3,
    },
    {
      input_field_id: "monthly_income",
      label: {
        en: "Monthly Income",
        ar: "الدخل الشهري",
      },
      rank: 11,
      group: 3,
    },
    {
      input_field_id: "any_other_loan",
      label: {
        en: "Any other loan?",
        ar: "أي قرض آخر",
      },
      rank: 12,
      group: 3,
    },
    {
      input_field_id: "monthly_estimated_expense",
      label: {
        en: "Overall anticipated expense?",
        ar: "المصروف الشهري المتوقع بشكل عام",
      },
      rank: 13,
      group: 3,
    },
  ],
};
