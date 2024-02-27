import React, { useState } from 'react'
import Selectbank from './components/selectbank'
import GroupOne from './components/groupOne'
import { BankConfig, banks } from '@/configs';
import ProgressBar from './components/progressBar';
import GroupTwo from './components/groupTwo';
import GroupThree from './components/groupThree';

function ApplicationView() {
  const [group, setGroup] = useState(0);
  const [config, setConfig] = useState<null | BankConfig>(null);
  

  return (
    <>
    <ProgressBar group={group} />
    {group === 0 && (<Selectbank setConfig={setConfig} setGroup={setGroup} />)}
    {group === 1 && (<GroupOne config={config} group={1} setGroup={setGroup} />)}
    {group === 2 && (<GroupTwo config={config} group={2} setGroup={setGroup} />)}
    {group === 3 && (<GroupThree config={config} group={3} setGroup={setGroup} />)}
    </>
  )
}

export default ApplicationView
