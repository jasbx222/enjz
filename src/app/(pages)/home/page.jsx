import './Home.css'
import Card from './Card'
import Image from 'next/image'
import bg from '../../../../public/img/bg.jpg'
import Chart from './Chart'
const page = () => {
  return (
    <div className=' container h-[100vh]  block   relative  top-24 '>
<Card/>

  <Image 
  src={bg}
  className='bg -z-10  hidden md:block   fixed top-0  bottom-0' 
  width={'100%'}
  height={'100%'}
  alt='img'
  />

<div className=' hidden md:block'>
<Chart/>
</div>
    </div>
  )
}

export default page