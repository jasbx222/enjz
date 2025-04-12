import Chart2 from '@/app/components/chart/Cahrt2'
import Chart1 from '@/app/components/chart/Charts'
import React from 'react'

const page = () => {
  return (
    <div className=' container w-[100%] flex flex-wrap  relative top-24 md:justify-evenly md:items-center'>
        <Chart1/>
        <Chart2/>
    </div>
  )
}

export default page