type ContainerProps = {
    children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
  return (
    <div className='w-full max-w-[1300px] m-auto px-4'>
      {children}
    </div>
  )
}
