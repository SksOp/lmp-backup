import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icon } from '@iconify/react';
import { ClassValue } from 'clsx';
import React from 'react'
import Stages from './stages';
import { AnalyticsSummary, MinimalLeads, DetailedLeads } from "@/constants/leads"; 
import { Navigate, useParams } from 'react-router-dom';
import { forEachChild } from 'typescript';


function Progress() {
  const stages = [DetailedLeads.history_timeline.states];
  console.log(stages);

  return (
    <>
      <Tabs defaultValue="status" className="w-full p-4">
        <TabsList className="grid w-full grid-cols-2 gap-1 my-8">
          <TabsTrigger className="hover:bg-foreground/5 " value="status">
            Application Status
          </TabsTrigger>
          <TabsTrigger className="hover:bg-foreground/5 " value="info">
            Lead info
          </TabsTrigger>
        </TabsList>
        <TabsContent value="status">
          <div className='flex gap-3 mb-4 items-center justify-start border-2 border-dotted p-4'>
            <Icon icon="flat-color-icons:idea" className='h-6 w-6' />
            <p>Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim.</p>
          </div>
          <div className='flex flex-col gap-4 justify-start border-2 p-4'>
          
          {
           
          } 

          {/* {stages.map((stage, index) => (<></>
            // <Stages
            // key={index}
            // date={stage.date}
            // title={stage.title}
            // doneBy={stage.doneBy}
            // action={stage.action}
            // />
            ))} */}
            </div>
        </TabsContent>
        <TabsContent value="info"></TabsContent>
      </Tabs>
    
    </>
  )
}

export default Progress
