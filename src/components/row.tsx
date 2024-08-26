'use client'
import { RootState } from '@/features/store'
import { changeColor, cn, shortenNumber } from '@/lib/utils'
import Image from 'next/image'
import { useSelector } from 'react-redux'

type RowProps = {
    data?: Coin
    type?: 'description' | undefined
}

export default function Row({data, type}: RowProps) {
  const generalOfRow = 'py-3'
  const currency = useSelector((state: RootState) => state.coinsMarket.currency)
  function getCurrencySign() {
    switch (currency) {
      case 'usd':
        return '$'
      case 'eur':
        return '€'
      case 'inr':
        return '₹'
    }
  }
  const currSign = getCurrencySign()


  //styles
  const tagStyles = `w-[12%] sm:w-[8%] md:w-[6%] lg:w-[4%] ${generalOfRow}`
  const coinStyles = `flex items-center w-[36%] sm:w-[30%] md:w-[24%] ${generalOfRow} font-medium`
  const priceStyles = `flex w-[30%] sm:w-[16%] md:w-[12%] ${generalOfRow} justify-end`
  const oneHourChangeStyles  = (className?: string) => {
    return cn(`w-[12%] lg:w-[8%] hidden md:flex ${generalOfRow} justify-end`, className)
  }
  const oneDayChangeStyles = (className?: string) => {
    return cn(`flex w-[22%] sm:w-[16%] lg:w-[8%] md:w-[12%] ${generalOfRow} justify-end`, className)
  }
  const sevenDaysChangeStyles = (className?: string) => {
    return cn(`w-[12%] lg:w-[8%] hidden md:flex ${generalOfRow} justify-end`, className)
  }
  const marketCapStyles = `w-[18%] hidden lg:flex ${generalOfRow} justify-end`
  const volumeStyles = `w-[30%] hidden sm:flex md:w-[22%] lg:w-[18%] ${generalOfRow} justify-end`
  
  if (type === 'description') {
    return (
      <section className='flex items-end font-semibold text-xs border-b border-main_primary'>
          <span className={tagStyles}>#</span>
          <span className={coinStyles}>Coin</span>
          <span className={priceStyles}>Price</span>
          <span className={oneHourChangeStyles()}>1h</span>
          <span className={oneDayChangeStyles()}>24h</span>
          <span className={sevenDaysChangeStyles()}>7d</span>
          <span className={marketCapStyles}>Market Cap</span>
          <span className={volumeStyles}>24h Volume</span>
    </section>
    )
  }

  const changeIn1h = shortenNumber(data?.price_change_percentage_1h_in_currency, 1) 
  const changeIn24h = shortenNumber(data?.price_change_percentage_24h_in_currency, 1)
  const changeIn7d = shortenNumber(data?.price_change_percentage_7d_in_currency, 1)

return (
    <section className='flex items-end text-sm'>
        <span className={tagStyles}>{data?.market_cap_rank}</span>
        <span className={coinStyles}>
          {
            data?.image &&
            <>
              <Image src={data.image} alt="Logo"
              width={30}
              height={30}
              className='w-[25px] mr-4'/>
              <div className="flex flex-col sm:flex-row sm:justify-start">
                {data?.name}
                <span className='opacity-80 font-light text-xs sm:ml-2'>{data?.symbol.toLocaleUpperCase()}</span>
              </div>
            </>
          }
        </span>
        <span className={priceStyles}>{currSign}{data?.current_price}</span>
        <span className={oneHourChangeStyles(changeColor(changeIn1h))}>{changeIn1h === '-0.0' ? '0.0' : changeIn1h}%</span>
        <span className={oneDayChangeStyles(changeColor(changeIn24h))}>{changeIn24h === '-0.0' ? '0.0' : changeIn24h}%</span>
        <span className={sevenDaysChangeStyles(changeColor(changeIn7d))}>{changeIn7d === '-0.0' ? '0.0' : changeIn7d}%</span>
        <span className={marketCapStyles}>{currSign}{data?.market_cap}</span>
        <span className={volumeStyles}>{currSign}{data?.total_volume}</span>
  </section>
  )
}
