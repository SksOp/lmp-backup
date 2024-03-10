import React from "react";
import { Bank } from "@/configs/index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const BankCard = ({ children, bank, onClick }: { children: React.ReactNode; bank: Bank; onClick: () => void }) => {
  return (
    <Card onClick={onClick} className="flex gap-3 px-8 py-3 items-center pointer-events-auto cursor-pointer hover:bg-secondary">
      {children}
      <img src={bank.image} className="w-10 h-10 object-cover rounded-full bg-white" alt={bank.name} />
      {bank.name}
    </Card>
  );
};

function Selectbank({
  setBank,
  setGroup,
  banks,
  selectedBank,
}: {
  setBank: (config: Bank) => void;
  setGroup: (group: number) => void;
  banks: Bank[];
  selectedBank: Bank;
}) {
  const handleSelectBank = (bank: Bank) => {
    setBank(bank);
  };
  return (
    <>
      <h3 className="text-xl font-semibold text-lefts my-3">Customer Bank</h3>
      <RadioGroup value={selectedBank.name} defaultValue={selectedBank.name}>
        <div className="flex flex-col gap-3">
          {banks.map((bank) => (
            <BankCard key={bank.name} bank={bank} onClick={() => handleSelectBank(bank)}>
              <RadioGroupItem value={bank.name} />
            </BankCard>
          ))}
        </div>
        <div className="w-full max-w-xl  absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2">
          <Button className="w-full bg-primary" onClick={() => setGroup(1)}>
            Continue
          </Button>
        </div>
      </RadioGroup>
    </>
  );
}

export default Selectbank;
