'use client'

import Hamburger from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'

type BurgerMenuProps = {
    options:  {
        name: string,
        link: string,
        active: boolean
      }[]
}

export default function BurgerMenu({options}: BurgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false)
    function handleClose() {
        setIsOpen(prevState => !prevState)
    }

  return (
    <section className=''>
    <Hamburger toggled={isOpen} toggle={setIsOpen} />
    {
     isOpen &&  
     <nav className='absolute top-16 right-5 bg-white p-4 min-w-[400px] h-[500px] z-50'>
        <ul className='flex flex-col justify-center items-center gap-y-8 h-full w-full'>
        { options.map( (option) => {
            return <Link href={option.link}>
           <li onClick={handleClose} className={`text-3xl cursor-pointer font-bold transition hover:text-main_third/90 hover:border-b-2 pt-1 hover:border-main_third  
            ${option.active ? 'border-b-2 border-main_third text-main_third' : 'border-b-2 border-transparent'}`} key={option.link}>{option.name.toUpperCase()}</li>
            </Link>
        })}
        </ul>
    </nav>
    }
    </section>
  )
}
