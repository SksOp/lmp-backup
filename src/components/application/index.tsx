import React, { useState } from "react";
import Selectbank from "./selectbank";
import GroupOne from "./groupOne";
import { BankConfig, banks } from "@/configs";
import ProgressBar from "./progressBar";
import GroupTwo from "./groupTwo";
import GroupThree from "./groupThree";
import Success from "./success";

function ApplicationDrawerContent() {
  const [data, setdata] = useState({});
  const [bank, setBank] = useState<string | null>();
  const [group, setGroup] = useState<number>(0);
  const [config, setConfig] = useState<null | BankConfig>(null);

  return (
    <>
      <ProgressBar group={group} />
      {group === 0 && <Selectbank setConfig={setConfig} setGroup={setGroup} setData={setdata} data={data} />}
      {group === 1 && <GroupOne config={config} group={1} setGroup={setGroup} setData={setdata} data={data} />}
      {group === 2 && <GroupTwo config={config} group={2} setGroup={setGroup} setData={setdata} data={data} />}
      {group === 3 && <GroupThree config={config} group={3} setGroup={setGroup} setData={setdata} data={data} />}
      {group === 4 && <Success />}
    </>
  );
}

export default ApplicationDrawerContent;
