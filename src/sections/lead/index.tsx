import LeadCard from '@/components/leadCard'
import { leadData } from '@/components/mainSection'
import React from 'react'
import Progress from './components/progress'

function LeadView() {
  return (
    <>
    <LeadCard {...leadData} className="p-4" />
    <Progress />
    </>
  )
}

export default LeadView
