'use client'
import { usePathname } from 'next/navigation';
import BurgerMenu from './burger-menu';
import Logo from './logo';
import Link from 'next/link';
import Container from './container';

export default function Header() {
  const pathname = usePathname()

  const options = [
    {
      name: 'About',
      link: '/about',
      active: pathname.includes('about') ? true : false
    },
    {
      name: 'Marketplace',
      link: '/home',
      active: pathname.includes('home') ? true : false
    },
    {
      name: 'Policy',
      link: '/policy',
      active: pathname.includes('policy') ? true : false
    },
    {
      name: 'Contacts',
      link: '/contacts',
      active: pathname.includes('contacts') ? true : false
    },
  ]
  
  return (
    <header className='flex w-full h-20 items-center bg-main_primary ' >
      <Container>
        <div className="flex w-full text-main_fourth justify-between items-center">
            <Logo/>
            <nav className='hidden lg:flex'>
                <ul className='flex gap-8'>
                 { options.map( (option) => {
                   return <Link href={option.link} key={option.link}>
                      <li className={`cursor-pointer transition hover:text-main_third/90 hover:border-b-2 pt-1 hover:border-main_third  font-semibold
                      ${option.active ? 'border-b-2 border-main_third text-main_third' : 'border-b-2 border-transparent'}`} key={option.link}>{option.name.toUpperCase()}</li>
                     </Link>
                  })}
                </ul>
            </nav>
                <div className="lg:hidden">
                  <BurgerMenu options={options}/>
                </div>
        </div>
      </Container>
    </header>
  )
}
