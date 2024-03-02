import { DetailViewer } from '@/components/leadCard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react'

interface InfoProps {
    title: string;
    items: { [key: string]: string };
  }

function InfoDisplay({ title, items }: InfoProps) {
  return (
    <div>
      <Card className="w-full p-4">
        <CardHeader className="flex flex-row gap-2 items-center">
          {title}
        </CardHeader>
        <CardContent>
          {Object.entries(items).map(([key, value]) => (
            <DetailViewer key={key} title={key} value={value} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default InfoDisplay
