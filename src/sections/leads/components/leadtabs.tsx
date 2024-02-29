import LeadCard from '@/components/leadCard'
import { leadData } from '@/components/mainSection'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { leads } from '@/constants/leads'
import { paths } from '@/router'
import path from 'path'
import React from 'react'
import { Link } from 'react-router-dom'

function LeadTabs() {
  return (
    <>
      <Tabs defaultValue="leads" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-3 gap-1 my-8">
          <TabsTrigger className="hover:bg-foreground/5 " value="leads">
            View All Leads
          </TabsTrigger>
          <TabsTrigger className="hover:bg-foreground/5 " value="active">
            Active Leads
          </TabsTrigger>
          <TabsTrigger className="hover:bg-foreground/5 " value="action">
            Required Action
          </TabsTrigger>
        </TabsList>
        <TabsContent value="leads">
        <div className="flex flex-col gap-3">
            {leads.map((lead) => (
              <>
              <Link to={`${paths.lead}/${lead.lead_id}`} >
              <LeadCard {...leadData} key={lead.lead_id} />
              </Link>
              </>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active">
          hello
        </TabsContent>
        <TabsContent value="action">
          hello
        </TabsContent>
      </Tabs>
    </>
  )
}

export default LeadTabs
