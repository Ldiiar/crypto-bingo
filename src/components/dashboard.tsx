'use client'
import Row from './row';
import { updateCoinsMarket } from '@/features/Coins/coinsSlice';
import { RootState } from '@/features/store';
import { getSearchedCoin } from '@/lib/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { TablePagination } from './table-pagination';


type DashboardProps = {
  totalCoinData: number
}

export default function Dashboard({totalCoinData}: DashboardProps) {
  const selectedCoin = useSelector((state: RootState) => state.coinsMarket.selectedCoin)
  const currentPage = useSelector((state: RootState) => state.coinsMarket.pageToSearch)
  const allCoinsData = useSelector((state: RootState) => state.coinsMarket.coinsMarket)
  const searchingPrompt = useSelector((state: RootState) => state.coinsMarket.searchingPrompt)

  // const slicedData = allCoinsData?.slice(0, parseInt(amountPerPage))

  const renderCoinsMarket = allCoinsData?.map(item => {
      return <Row data={item} key={item.id}/>
  })
  const renderSelectedCoin = selectedCoin?.map(item => {
    return <Row data={item} key={item.id} type='searchedCoin' />
  })
  // updateCoinsMarket

  return (
    <>
      <div className='bg-main_fourth text-white mary w-full rounded-xl lg:rounded-3xl min-h-40 px-4 py-2 md:px-10 md:py-4 mb-4'>
        <Row type='description' />
          {selectedCoin !== null ? renderSelectedCoin: renderCoinsMarket}
      </div>
      <p className='text-sm font-semibold'>Total cryptocurrencies: <span className='text-main_third font-bold ml-1'>{totalCoinData}</span></p>
      <div className="my-8 w-full">
        <TablePagination currentPage={currentPage}/>
      </div>
    </>
  )
}
