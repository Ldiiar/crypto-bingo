'use client'
import Row from './row';
import { updateCoinsMarket } from '@/features/Coins/coinsSlice';
import { RootState } from '@/features/store';
import { getSearchedCoin } from '@/lib/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { TablePagination } from './table-pagination';
import { usePathname } from 'next/navigation';


type DashboardProps = {

}

export default function Dashboard({}: DashboardProps) {
  
  const pathname = usePathname()
  console.log(pathname);
  
  const currentPage = useSelector((state: RootState) => state.coinsMarket.pageToSearch)
  const allCoinsData = useSelector((state: RootState) => state.coinsMarket.coinsMarket)
  const searchingPrompt = useSelector((state: RootState) => state.coinsMarket.searchingPrompt)

  // const slicedData = allCoinsData?.slice(0, parseInt(amountPerPage))

  const data = searchingPrompt !== null 
  ? getSearchedCoin(allCoinsData, searchingPrompt)
  : allCoinsData
  

  const renderCoinsMarket = data?.map(item => {
      return <Row data={item} key={item.id}/>
  })
  updateCoinsMarket

  return (
    <>
      <div className='bg-main_fourth text-white mary w-full rounded-xl lg:rounded-3xl min-h-40 px-4 py-2 md:px-10 md:py-4'>
        <Row type='description' />
          {renderCoinsMarket}
      </div>
      <div className=" my-8 w-full">
        <TablePagination currentPage={currentPage}/>
      </div>
    </>
  )
}
