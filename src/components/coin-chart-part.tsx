'use client';

import { fetchCoinChartDataAsync } from '@/features/Coins/coinsSlice';
import { CoinChart } from './coin-chart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/store';
import { TestChart } from './test-chart';
import { useState } from 'react';
import Container from './container';

type CoinChartPartProps = {
    id: string
	changeIn24h: string | undefined
}

export default function CoinChartPart({id, changeIn24h}: CoinChartPartProps) {
	const [periodTime, setPeriodTime] = useState<'24h' | '7d' | '1m' | '3m' | '6m' | '1y'>('1m')
	function handleChangePeridTime(value: '24h' | '7d' | '1m' | '3m' | '6m' | '1y') {
		setPeriodTime(value)
	}
    const dispatch = useDispatch<AppDispatch>()
    dispatch(fetchCoinChartDataAsync({id, periodTime}))

	return (
		<div className='lg:w-[65%]'>
			<div className=''>
					{/* <CoinChart/> */}
					<TestChart changeIn24h={changeIn24h} periodTime={periodTime} handleChangePeridTime={handleChangePeridTime}/>
					<Container>
					<article className="mt-11 space-y-4">
						<h2 className='text-xl font-semibold'>Cryptocurrencies</h2>
						<p>Cryptocurrencies are digital assets designed to function as a medium of exchange, leveraging cryptographic techniques to ensure secure, decentralized transactions. Unlike traditional currencies, they operate on blockchain technology—a distributed ledger that records all transactions across a network of computers. Bitcoin, introduced in 2009, was the pioneer, but today&apos;s cryptocurrency landscape includes thousands of options, such as Ethereum, which enables smart contracts, and Ripple, which focuses on fast, cross-border payments.</p>
						<p>These digital currencies offer several advantages, including lower transaction fees and financial inclusivity. However, they also face significant challenges, such as regulatory scrutiny, high volatility, and security concerns. The market&apos;s rapid evolution has sparked debate about their long-term viability and their potential to disrupt traditional financial systems. As technology advances and regulations develop, the role of cryptocurrencies in global finance remains both promising and uncertain.</p>
					</article>
					</Container>
			</div>
		</div>
	);
}
