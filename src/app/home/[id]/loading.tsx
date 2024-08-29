import Loader from '@/components/Loader'
import React from 'react'

export default function Loading() {
  return (
    <section className='flex justify-center items-center h-full w-full'>
        <Loader />
    </section>
  )
}
