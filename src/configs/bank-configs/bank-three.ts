import { BankConfig } from "./types";

export const Bank3: BankConfig = {
  state_id: 1,
  state_name: {
    en: "Initiate Application",
    ar: "بدء الطلب",
  },
  state_type: "beginning",
  actor: "dealer",
  input_fields: [
    {
      input_field_id: "customer_iqama_id",
      label: {
        en: "Customer National ID/Iqama Number",
        ar: "",
      },
      description:{
        en: "Enter the Customer National ID/Iqama Number",
        ar: ""
      },
      rank: 1,
      group: 1,
      group_name: {
        en: "Customer Details", 
        ar: "",
      },
      group_description:{
        en: "Enter the Customer Details",
        ar: "",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "customer_mobile_no",
      label: {
        en: "Customer Mobile Number",
        ar: "",
      },
      description:{
        en: "Enter the Customer Mobile Number",
        ar: ""
      },
      group_description:{
        en: "Enter the Customer Details",
        ar: "",
      },
      rank: 2,
      group: 1,
      group_name: {
        en: "Customer Details", 
        ar: "",
      },
      input_field_type: "phone",
    },
    {
      input_field_id: "customer_email",
      label: {
        en: "Customer Email",
        ar: "",
      },
      description:{
        en: "Enter the Customer Email Address",
        ar: ""
      },
      
      rank: 3,
      group: 1,
      group_name: {
        en: "Customer Details", 
        ar: "",
      },
      group_description:{
        en: "Enter the Customer Details",
        ar: "",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "mobile_otp",
      label: {
        en: "Enter Mobile Number OTP",
        ar: "",
      },
      description:{
        en: "We sent you a 4 digit OTP, please check and enter below",
        ar: ""
      },
      rank: 1,
      group: 2,
      group_name: {
        en: "Enter OTP", 
        ar: "",
      },
      group_description:{
        en: "Enter the OTP",
        ar: "",
      },
      input_field_type: "number",
    },
    {
      input_field_id: "email_otp",
      label: {
        en: "Enter Email OTP",
        ar: "الهاتف",
      },
      description:{
        en: "We sent you a 4 digit OTP, please check and enter below",
        ar: ""
      },
      rank: 2,
      group: 2,
      group_name: {
        en: "Enter OTP", 
        ar: "",
      },
      group_description:{
        en: "Enter the OTP",
        ar: "",
      },
      input_field_type: "number",
    },
    {
      input_field_id: "select_brand",
      label: {
        en: "Select Brand",
        ar: "",
      },
      description:{
        en: "Please select your car Brand",
        ar: ""
      },
      rank: 1,
      group: 3,
      group_name: {
        en: "Car Details", 
        ar: "",
      },
      group_description:{
        en: "Enter the Car Details",
        ar: "",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "select_model",
      label: {
        en: "Select Model",
        ar: "",
      },
      description:{
        en: "Please select your car model",
        ar: ""
      },
      rank: 2,
      group: 3,
      group_name: {
        en: "Car Details", 
        ar: "",
      },
      group_description:{
        en: "Enter the Car Details",
        ar: "",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "select_varient",
      label: {
        en: "Select varient",
        ar: "",
      },
      description:{
        en: "Please select your car varient",
        ar: ""
      },
      rank: 3,
      group: 3,
      group_name: {
        en: "Car Details", 
        ar: "",
      },
      group_description:{
        en: "Enter the Car Details",
        ar: "",
      },
      input_field_type: "radio",
    },
    {
      input_field_id: "cost",
      label: {
        en: "Cost",
        ar: "",
      },
      description:{
        en: "Enter the cost of the car",
        ar: ""
      },
      rank: 4,
      group: 3,
      group_name: {
        en: "Car Details", 
        ar: "",
      },
      group_description:{
        en: "Enter the Car Details",
        ar: "",
      },
      input_field_type: "number",
    },
    {
      input_field_id: "additional_details",
      label: {
        en: "Additional Details",
        ar: "",
      },
      description:{
        en: "Enter additional details about your car",
        ar: ""
      },
      rank: 5,
      group: 3,
      group_name: {
        en: "Car Details", 
        ar: "",
      },
      group_description:{
        en: "Enter the Car Details",
        ar: "",
      },
      input_field_type: "text",
    },
    {
      input_field_id: "driving_license",
      label: {
        en: "Driving License",
        ar: "",
      },
      description:{
        en: "Press to upload file here",
        ar: ""
      },
      rank: 1,
      group: 4,
      group_name: {
        en: "Customer Documents", 
        ar: "",
      },
      group_description:{
        en: "Enter the Car Details",
        ar: "",
      },
      input_field_type: "file",
    },
    {
      input_field_id: "driving_license",
      label: {
        en: "Driving License",
        ar: "",
      },
      description:{
        en: "Press to upload file here",
        ar: ""
      },
      rank: 2,
      group: 4,
      group_name: {
        en: "Customer Documents", 
        ar: "",
      },
      group_description:{
        en: "Enter the Car Details",
        ar: "",
      },
      input_field_type: "file",
    },
    {
      input_field_id: "driving_license",
      label: {
        en: "Driving License",
        ar: "",
      },
      description:{
        en: "Press to upload file here",
        ar: ""
      },
      rank: 3,
      group: 4,
      group_name: {
        en: "Customer Documents", 
        ar: "",
      },
      group_description:{
        en: "Enter the Car Details",
        ar: "",
      },
      input_field_type: "file",
    },
  ],
};
