import LeadCard from '@/components/leadCard'
import { leadData } from '@/components/mainSection'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { leads } from '@/constants/leads'
import React from 'react'

function LeadTabs() {
  return (
    <>
      <Tabs defaultValue="leads" className="w-full p-4 ">
        <TabsList className="flex w-full justify-between  gap-1 my-8 bg-background border-r-2 border-2">
          <TabsTrigger className="hover:bg-foreground bg-foreground/5" value="leads">
            View All Leads
          </TabsTrigger>
          <TabsTrigger className="hover:bg-foreground bg-foreground/5" value="active">
            Active Leads
          </TabsTrigger>
          <TabsTrigger className="hover:bg-foreground bg-foreground/5" value="action">
            Required Action
          </TabsTrigger>
        </TabsList>
        <TabsContent value="leads">
        <div className="flex flex-col gap-3">
            {leads.map((lead) => (
              <LeadCard {...leadData} key={lead.lead_id} />
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
