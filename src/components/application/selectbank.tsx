import { View } from "lucide-react";
import React, { useState } from "react";
import { Bank } from "@/configs/index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "@/hooks/useRouter";
import { set } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const BankCard = ({ children, bank, onClick }: { children: React.ReactNode; bank: Bank; onClick: () => void }) => {
  return (
    <Card onClick={onClick} className="flex gap-3 px-8 py-4 items-center pointer-events-auto cursor-pointer hover:bg-secondary">
      {children}
      <img src={bank.image} className="w-12 h-12 object-cover rounded-full bg-white" alt={bank.name} />
      {bank.name}
    </Card>
  );
};

function Selectbank({
  setBank,
  setGroup,
  data,
  setData,
  banks,
  selectedBank,
}: {
  setBank: (config: Bank) => void;
  setGroup: (group: number) => void;
  data: object;
  setData: (data: any) => void;
  banks: Bank[];
  selectedBank: Bank;
}) {
  const handleSelectBank = (bank: Bank) => {
    setBank(bank);
    setData({ ...data, bank });
  };
  return (
    <RadioGroup value={selectedBank.name} defaultValue={selectedBank.name}>
      {banks.map((bank) => (
        <BankCard key={bank.name} bank={bank} onClick={() => handleSelectBank(bank)}>
          <RadioGroupItem value={bank.name} />
        </BankCard>
      ))}
      <div className="w-full max-w-xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6">
        <Button className="w-full bg-primary" onClick={() => setGroup(1)}>
          Next
        </Button>
      </div>
    </RadioGroup>
  );
}

export default Selectbank;
