type ContainerProps = {
    children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
  return (
    <div className='max-w-[1300px] m-auto'>
      {children}
    </div>
  )
}
