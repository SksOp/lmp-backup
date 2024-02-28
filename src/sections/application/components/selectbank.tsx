import { View } from "lucide-react";
import React, { useState } from "react";
import { BankConfig, banks } from "@/configs/index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "@/hooks/useRouter";
import { set } from "react-hook-form";

function BankCard({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return <Button onClick={onClick}>{children}</Button>;
}

function Selectbank( {setConfig, setGroup, data, setData}: {setConfig: (config: BankConfig) => void, setGroup: (group: number) => void,data: object, setData: (data: any) => void}){
  const params = useSearchParams();
  // user selectes bank
  // user goes in flow with group
  
  const handleBankClick = (index: number) => {
    setConfig(banks[index].config);
    setData({...data, bank: banks[index].name});
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
