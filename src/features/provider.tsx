'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

type providerProps = {
    children: React.ReactNode
}

export default function Providers({children}: providerProps) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
