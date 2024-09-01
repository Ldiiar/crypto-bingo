'use client'
import { changeColor, cn, getCurrencySign, shortenNumber } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type RowProps = {
    data?: Coin | null
    type?: 'description' | 'searchedCoin' | undefined
}

export default function Top5ListRow({data, type}: RowProps) {
  const generalOfRow = 'py-1'
  const currency = 'usd'
  const currSign = getCurrencySign(currency)


  //styles
  const tagStyles = `w-[12%] ${generalOfRow}`
  const coinStyles = `flex items-center w-[36%] ${generalOfRow} font-medium`
  const priceStyles = `flex w-[30%] ${generalOfRow} justify-end`

  const oneDayChangeStyles = (className?: string) => {
    return cn(`flex w-[22%] ${generalOfRow} justify-end`, className)
  }

  


  if (type === 'description') {
    return (
      <section className='flex items-center justify-between font-semibold text-base border-b border-main_third mb-2 py-1 '>
        <span>Popular</span>
        <Link href={'/home'}><span className='text-main_fourth/60 hover:text-main_third transition font-normal'>View all coins</span></Link>
    </section>
    )
  }

  const changeIn24h = shortenNumber(data?.price_change_percentage_24h, 1)

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
              <Link href={`/home/${data.id}`} className="flex flex-col sm:flex-row sm:justify-start">
                {data?.name}
                <span className='opacity-80 font-light text-xs sm:ml-2'>{data?.symbol.toLocaleUpperCase()}</span>
              </Link>
            </>
          }
        </span>
        <span className={priceStyles}>{currSign}{data?.current_price}</span>
        <span className={oneDayChangeStyles(changeColor(changeIn24h))}>{changeIn24h === '-0.0' ? '0.0' : changeIn24h}%</span>
  </section>
  )
}
