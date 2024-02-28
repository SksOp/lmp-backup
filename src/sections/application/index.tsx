import React, { useState } from 'react'
import Selectbank from './components/selectbank'
import GroupOne from './components/groupOne'
import { BankConfig, banks } from '@/configs';
import ProgressBar from './components/progressBar';
import GroupTwo from './components/groupTwo';
import GroupThree from './components/groupThree';
import Success from './components/success';

interface Data{
  [key: string]: string | null;
}

function ApplicationView() {
  const [data, setdata] = useState({});
  const [bank, setBank] = useState<string | null>();
  const [group, setGroup] = useState(0);
  const [config, setConfig] = useState<null | BankConfig>(null);



  return (
    <>
    <ProgressBar group={group} />
    {group === 0 && (<Selectbank setConfig={setConfig} setGroup={setGroup} setData={setdata} data={data}  />)}
    {group === 1 && (<GroupOne config={config} group={1} setGroup={setGroup} setData={setdata} data={data}  />)}
    {group === 2 && (<GroupTwo config={config} group={2} setGroup={setGroup} setData={setdata}data={data}  />)}
    {group === 3 && (<GroupThree config={config} group={3} setGroup={setGroup} setData={setdata} data={data} />)}
    {group === 4 && (<Success />)}
    </>
  )
}

export default ApplicationView
