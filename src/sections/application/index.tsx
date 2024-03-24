import { useState } from "react";
import Selectbank from "./components/selectbank";
import { Bank, banks } from "@/configs";
import ProgressBar from "./components/progressBar";
import Success from "./components/success";
import Group from "./components/group";
import GroupOtp from "./components/groupOtp";
import Layout from '@/layout/application'
import { useRouter } from "@/hooks/useRouter";
import { set } from "date-fns";

function ApplicationView() {
  const [data, setData] = useState({});
  const [bank, setBank] = useState<Bank>(banks[0]);
  const [group, setGroup] = useState<number>(0);
  const [requestOtp, setRequestOtp] = useState<{ next: boolean; view: boolean }>({ next: false, view: false });
  const router = useRouter ()
  const onBackClick = ()=>{
    if (group === 0) {
     router.back()
    }if(requestOtp.view){
      setRequestOtp({next:false,view:false})
    } else {
      setGroup(group - 1);
    }
  }

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
    <Layout backFn={onBackClick} >
    <div className="flex flex-col gap-1 py-4  px-1">

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
    </Layout>
  );
}

export default ApplicationView
