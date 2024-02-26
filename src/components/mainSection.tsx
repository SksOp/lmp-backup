import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Application } from './application'
import { leads } from '@/constants/leads'

function MainSection() {
  return (
    <>
    
      <Tabs defaultValue="applications" className="w-full p-4">
      <TabsList className="grid w-full grid-cols-2 my-8">
        <TabsTrigger value="applications">Active Applications</TabsTrigger>
        <TabsTrigger value="action">Required Action</TabsTrigger>
      </TabsList>
      <TabsContent value="applications">
        <div className='flex flex-col gap-3'>
            {leads.map((lead) => (
              <Application key={lead.lead_id} lead={lead} />
            
            ))}
            
        </div>
      </TabsContent>
      <TabsContent value="action">
        
      </TabsContent>
      </Tabs>
    </>
  )
}

export default MainSection
