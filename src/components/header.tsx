'use client'
import { usePathname } from 'next/navigation';
import BurgerMenu from './burger-menu';
import Logo from './logo';

export default function Header() {
  const pathname = usePathname()

  const options = [
    {
      name: 'Market',
      link: 'home',
      active: pathname.includes('home') ? true : false
    },
    {
      name: 'Policy',
      link: 'policy',
      active: pathname.includes('policy') ? true : false
    },
    {
      name: 'Contact',
      link: 'contact',
      active: pathname.includes('contact') ? true : false
    },
  ]
  
  return (
    <header className='flex w-full h-20 items-center bg-main_primary ' >
        <div className="flex w-full max-w-[1300px] m-auto text-main_fourth justify-between items-center pl-4 pr-4">
            <Logo/>
            <nav className='hidden lg:flex'>
                <ul className='flex gap-8'>
                 { options.map( (option) => {
                   return <li className={`cursor-pointer font-medium transition hover:text-main_third/90 hover:border-b-2 pt-1 hover:border-main_third  
                    ${option.active ? 'border-b-2 border-main_third text-main_third' : 'border-b-2 border-transparent'}`} key={option.link}>{option.name}</li>
                  })}
                </ul>
            </nav>
                <div className="lg:hidden">
                  <BurgerMenu options={options}/>
                </div>
        </div>
    </header>
  )
}
