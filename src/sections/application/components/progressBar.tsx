import { Progress } from '@/components/ui/progress'
import React from 'react'

function ProgressBar({group}: {group: number}) {

    const progress = (group*100)/3;
    console.log(progress);

  return <Progress value={progress} className="full" />
}

export default ProgressBar
