'use client'

import Hamburger from 'hamburger-react'
import { useState } from 'react'

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Hamburger toggled={isOpen} toggle={setIsOpen} />
    </>
  )
}
