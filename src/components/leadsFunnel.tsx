import React from 'react'
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { paths } from '@/router';

Chart.register(ArcElement, Tooltip, Legend, Title);
const data = {
  labels: [],
  datasets: [
    {
      data: [23, 12, 4, 45, 5, 3],
      backgroundColor: ['#9F43CC', '#EBA10F', '#951919', '#2B87E3', '#EA6200', '#0CA85D'],
      hoverBackgroundColor: ['#9F43CC', '#EBA10F', '#951919', '#2B87E3', '#EA6200', '#0CA85D'],
    },
  ],
};

function LeadsFunnel() {
  return (
    <div className='flex flex-col bg-blue-300 '>
      <div className='flex justify-between m-2'>
        <h1 className='text-2xl font-bold'>Leads Funnel</h1>
        <Link to={paths.home} className='flex text-xl gap-2'>All Leads 
        <Icon icon="teenyicons:arrow-right-solid" className="w-8 h-8 mr-8" />
        </Link>
      </div>
      <div className='flex justify-between'>
        <ul className='m-4 list-disc list-inside'>
          <li className=''>23 Initiated</li>
          <li className=''>12 Bank Verifications</li>
          <li className=''>4 Document Verification</li>
          <li className=''>45 Dealer Acknowledges</li>
          <li className=''>5 Amount Disbursed</li>
          <li className=''>3 Loan Rejected</li>
        </ul>
      <div className='w-full max-w-xs m-2'>
      <Doughnut data={data} />
      </div>
      </div>
    
    </div>
  )
}

export default LeadsFunnel
