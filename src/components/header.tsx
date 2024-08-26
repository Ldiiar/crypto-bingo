import Logo from './logo';

export default function Header() {
  const options = [
    {
      name: 'Market',
      link: 'home'
    },
    {
      name: 'Policy',
      link: 'policy'
    },
    {
      name: 'Contact',
      link: 'contact'
    },
  ]
  
  return (
    <header className='flex w-full h-20 items-center bg-main_primary ' >
        <div className="flex w-full max-w-[1300px] m-auto text-main_fourth justify-between items-center pl-4 pr-4">
            <Logo/>
                <ul className='flex gap-8'>
                 { options.map( (option) => {
                    return <li className='cursor-pointer font-medium transition hover:text-main_third/90'>{option.name}</li>
                  })}
                </ul>
        </div>
    </header>
  )
}
