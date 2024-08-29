'use client'
import { changeColor, shortenNumber } from '@/lib/utils';
import Image from 'next/image';
import { AiOutlineForward } from "react-icons/ai";
import { useState } from 'react';

type CoinInfoPartProps = {
    data: Coin[]
}

export default function CoinInfoPart({data}: CoinInfoPartProps) {
    const [coinData, setCoinData] = useState(data)

    const changeIn24h = shortenNumber(coinData?.[0]?.price_change_percentage_24h, 1)

    const infoRowData = [
        {
            name: 'Marked Cap',
            data: coinData?.[0]?.market_cap
        },
        {
            name: 'Fully Diluted Valuation',
            data: coinData?.[0]?.fully_diluted_valuation
        },
        {
            name: 'Total Trading Vol',
            data: coinData?.[0]?.total_volume
        },
        {
            name: 'Circulating Supply',
            data: coinData?.[0]?.circulating_supply
        },
        {
            name: 'Total Supply',
            data: coinData?.[0]?.total_supply
        },
        {
            name: 'Max Supply',
            data: coinData?.[0]?.max_supply
        },
    ]

    function infoRow(){
        return infoRowData.map(item => {
            return (
                <div className="flex justify-between text-sm font-semibold border-b border-zinc-300 py-3" key={item.name}>
                    <span className='text-main_secondary'>{item.name}</span>
                    <span className=''>${item.data}</span>
                </div>
            )
        }) 
    }
    

	return (
    <section className='lg:w-[30%] lg:pr-[25px] border-r border-x-zinc-300'>
        <div className="flex items-center gap-1 mb-3">
            {coinData?.[0]?.image &&
                <Image src={coinData?.[0]?.image} alt='Icon'
                width={25} height={25}
                className='w-[25px] h-[25px]'
            />}
            <h1 className='font-bold text-xl'>{coinData?.[0]?.name}</h1>
            <span className='text-main_secondary'>{coinData?.[0]?.symbol.toUpperCase()} Price </span>
            <span className='bg-main_third/90 text-white rounded-sm px-1 ml-1 text-sm'>#{coinData?.[0]?.market_cap_rank}</span>
        </div>
        <div className="mb-4 flex items-center gap-2">
            <span className='text-4xl font-bold text-main_fourth'>${coinData?.[0]?.current_price}</span>
            <span className={`${changeColor(changeIn24h)} font-semibold text-xl`}>{changeIn24h === '-0.0' ? '0.0' : changeIn24h}$</span>
            <div>in</div>
        </div>
        <div className="mb-5">
            <div className="flex justify-between items-center font-semibold text-sm">
                <span>${coinData?.[0]?.low_24h}</span>
                <div className="flex items-center">
                    <AiOutlineForward className='text-main_third'/>
                    <span className='text-main_third'>24h change</span>
                    <AiOutlineForward className='text-main_third'/>
                 </div>
                <span>${coinData?.[0]?.high_24h}</span>
            </div>
        </div>
        <section className='mb-4'>
                {infoRow()}
        </section>
        <div className="mb-4">
            <p className='font-semibold text-lg'>What are your thoughts about {coinData?.[0]?.symbol.toUpperCase()}? </p>
            <p className='text-sm'>Should we invest in it today?</p>
        </div>
    </section>
    )
}

