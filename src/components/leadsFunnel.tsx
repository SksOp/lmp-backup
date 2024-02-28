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
      <div className='flex justify-between items-center'>
        <ul className='m-4 list-none li'>
          <li className='flex items-center'><div className="w-2 h-2 bg-[#9F43CC] rounded-full mr-2"></div>23 Initiated</li>
          <li className='flex items-center'><div className="w-2 h-2 bg-[#2B87E3] rounded-full mr-2"></div>12 Bank Verifications</li>
          <li className='flex items-center'><div className="w-2 h-2 bg-[#0CA85D] rounded-full mr-2"></div>4 Document Verification</li>
          <li className='flex items-center'><div className="w-2 h-2 bg-[#EBA10F] rounded-full mr-2"></div>45 Dealer Acknowledges</li>
          <li className='flex items-center'><div className="w-2 h-2 bg-[#EA6200] rounded-full mr-2"></div>5 Amount Disbursed</li>
          <li className='flex items-center'><div className="w-2 h-2 bg-[#951919] rounded-full mr-2"></div>3 Loan Rejected</li>
        </ul>
      <div className='w-full max-w-xs m-2 items-center'>
      <Doughnut data={data} className='w-full' />
      </div>
      </div>
    
    </div>
  )
}

export default LeadsFunnel
