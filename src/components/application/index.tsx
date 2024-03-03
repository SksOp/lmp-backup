import React, { useState } from "react";
import Selectbank from "./selectbank";
import { Bank, BankConfig, banks } from "@/configs";
import ProgressBar from "./progressBar";
import Success from "./success";
import Group from "./group";

function ApplicationDrawerContent() {
  const [data, setdata] = useState({});
  const [bank, setBank] = useState<Bank>(banks[0]);
  const [group, setGroup] = useState<number>(0);

  return (
    <div className="flex flex-col gap-2 py-4 px-2">
      <p className="text-center text-xl font-semibold">New Leasing Application</p>
      <p className="text-center text-sm text-foreground/70">Initiate the application with customer/vehicle details</p>
      <ProgressBar group={group} />
      <div className="flex flex-col gap-4 h-[70vh] overflow-auto pb-10 px-3">
        {group === 0 && (
          <Selectbank banks={banks} selectedBank={bank} setBank={(bank: Bank) => setBank(bank)} setGroup={setGroup} setData={setdata} data={data} />
        )}
        {group === 1 && <Group config={bank.config} selectedBank={bank} group={1} setGroup={setGroup} setData={setdata} data={data} />}
        {group === 2 && <Group config={bank.config} selectedBank={bank} group={2} setGroup={setGroup} setData={setdata} data={data} />}
        {group === 3 && <Group config={bank.config} selectedBank={bank} group={3} setGroup={setGroup} setData={setdata} data={data} />}
        {/* {group === 4 && <Group config={bank.config} selectedBank={bank} group={4} setGroup={setGroup} setData={setdata} data={data} />} */}
        {group === 4 && <Success />}
      </div>
    </div>
  );
}

export default ApplicationDrawerContent;
