import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Application } from './application'

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
            {Array(5).fill(0).map((index) => (
                <Application key={index} />
            ))}
            
        </div>
      </TabsContent>
      <TabsContent value="action">
        <Application />
      </TabsContent>
      </Tabs>
    </>
  )
}

export default MainSection
