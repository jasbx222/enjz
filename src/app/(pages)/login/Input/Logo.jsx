import Image from 'next/image'
import logo from '../../../../../public/img/logo.png'

export const Logo = () => {
  return (
    <Image  src={logo} width={200} height={200} className=' bg-no-repeat'/>
  )
}
