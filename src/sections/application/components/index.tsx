import { useState } from "react";
import Selectbank from "./selectbank";
import { Bank, banks } from "@/configs";
import ProgressBar from "./progressBar";
import Success from "./success";
import Group from "./group";
import GroupOtp from "./groupOtp";

function ApplicationDrawerContent() {
  const [data, setData] = useState({});
  const [bank, setBank] = useState<Bank>(banks[0]);
  const [group, setGroup] = useState<number>(0);
  const [requestOtp, setRequestOtp] = useState<{ next: boolean; view: boolean }>({ next: false, view: false });

  const props = {
    config: bank.config,
    selectedBank: bank,
    data,
    setGroup,
    setData,
    setRequestOtp,
    requestOtp,
  };
  return (
    <div className="flex flex-col gap-1 py-4  px-1">
      <p className="text-center text-sm font-bold">New Leasing Application</p>
      <p className="text-center text-[0.72rem] text-foreground/70">Initiate the application with customer/vehicle details</p>
      <ProgressBar group={group} />
      <div className="flex flex-col gap-4 h-[70vh] overflow-auto pb-10 px-2">
        {requestOtp.view ? (
          <GroupOtp group={group} {...props} />
        ) : (
          <>
            {group === 0 && <Selectbank banks={banks} selectedBank={bank} setBank={(bank: Bank) => setBank(bank)} setGroup={setGroup} />}
            {group === 1 && <Group group={1} {...props} />}
            {group === 2 && <Group group={2} {...props} />}
            {group === 3 && <Group group={3} {...props} />}
            {/* {group === 4 && <Group config={bank.config} selectedBank={bank} group={4} setGroup={setGroup} setData={setdata} data={data} />} */}
            {group === 4 && <Success />}
          </>
        )}
      </div>
    </div>
  );
}

export default ApplicationDrawerContent;
