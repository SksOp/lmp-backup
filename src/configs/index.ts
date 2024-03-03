import { Bank1, Bank2, Bank3, BankConfig } from "./bank-configs";

export * from "./bank-configs";

export type Bank = {
  logo: string;
  name: string;
  config: BankConfig;
  image: string;
};

export const banks: Bank[] = [
  {
    logo: "",
    name: "HDFC Bank",
    config: Bank1,
    image: "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-emblem.png",
  },
  {
    logo: "",
    name: "SBI",
    config: Bank2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/2048px-SBI-logo.svg.png",
  },
  {
    logo: "",
    name: "ICICI Bank",
    config: Bank3,
    image:
      "data:image/png;base64,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",
  },
];

