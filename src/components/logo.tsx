import logo from '@/../public/logo4.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className='flex gap-1 items-center cursor-pointer'>
        <Image src={logo} alt='Logo' width={40} height={40} 
        className='w-[50px]'/>
        <Link href='/' className='text-xl font-extrabold text-main_third'>CRYPTO BINGO</Link>
    </div>
  )
}
