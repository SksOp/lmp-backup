import { BankConfig } from "@/configs";

export type GroupProps = {
  config: BankConfig | null;
  group: number;
  setGroup: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<object>>;
  data: object;
  selectedBank: Bank;
  requestOtp: { next: boolean; view: boolean };
  setRequestOtp: React.Dispatch<React.SetStateAction<{ next: boolean; view: boolean }>>;
};
