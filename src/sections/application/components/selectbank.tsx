import { View } from "lucide-react";
import React, { useState } from "react";
import { BankConfig, banks } from "@/configs/index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "@/hooks/useRouter";

function BankCard({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return <Button onClick={onClick}>{children}</Button>;
}

function Selectbank( {setConfig, setGroup}: {setConfig: (config: BankConfig) => void, setGroup: (group: number) => void}){
  const params = useSearchParams();

  // user selectes bank
  // user goes in flow with group
  
  const handleBankClick = (index: number) => {
    setConfig(banks[index].config);
    setGroup(1);
  };

  return (
    <>
      <div className="w-full flex gap-4">
        {banks.map((bank, index) => (
          <BankCard onClick={() => handleBankClick(index)}>
            <>{bank.name}</>
          </BankCard>
        ))}
      </div>
    </>
  );
}

export default Selectbank;
