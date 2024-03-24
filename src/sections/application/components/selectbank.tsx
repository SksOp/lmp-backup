import React from "react";
import { Bank } from "@/configs/index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";

const BankCard = ({ children, bank, onClick }: { children: React.ReactNode; bank: Bank; onClick: () => void }) => {
  return (
    <Card onClick={onClick} className="h-[3.5rem] mr-2  flex gap-3 px-3 py-3 items-center pointer-events-auto cursor-pointer hover:bg-secondary">
      {children}
      <img src={bank.image} className="w-9 h-9 object-cover rounded-full bg-white" alt={bank.name} />
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
      <h3 className="text-xl font-semibold text-lefts mt-3 mb-2">Customer bank</h3>
      <RadioGroup value={selectedBank.name} defaultValue={selectedBank.name} className="">
        <div className="flex flex-col gap-3">
          {banks.map((bank) => (
            <BankCard key={bank.name} bank={bank} onClick={() => handleSelectBank(bank)}>
              <RadioGroupItem value={bank.name} className="border-foreground" />
            </BankCard>
          ))}
        </div>
        <div className="w-full  absolute bottom-11 left-1/2 transform -translate-x-1/2 px-4">
          <Button className="w-full bg-primary h-[3.2rem]" onClick={() => setGroup(1)}>
            Continue
          </Button>
        </div>
      </RadioGroup>
    </>
  );
}

export default Selectbank;
