'use client'

import { RootState, AppDispatch} from '@/features/store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { fetchAllCoinsByOptionsAsync, updatePageToSearch } from '@/features/Coins/coinsSlice'
import { useSearchParams } from 'next/navigation'
import { validatePageValue } from '@/lib/utils'

type WrapperProps = {
    children: React.ReactNode
}

export default function Wrapper({children} : WrapperProps) {
  const dispatch = useDispatch<AppDispatch>()

  const searchParams = useSearchParams()
  let page = searchParams.get('page') || '1'
  page = validatePageValue(page)

  const amountPerPage = useSelector((state: RootState) => state.coinsMarket.amountPerPage)
  const currency = useSelector((state: RootState) => state.coinsMarket.currency)
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function storedata() {
      setIsLoading(true);

      try {
        dispatch(updatePageToSearch(page))
        await dispatch(fetchAllCoinsByOptionsAsync({currency, amountPerPage, page}));
      } finally {
        setIsLoading(false);
      }
     
    }
    storedata()
  }, [dispatch, currency, amountPerPage, page])
  
  return (
    <>
    {
      isLoading ? <Loader /> : <div>{children}</div>
    }
    </>
  )
}

