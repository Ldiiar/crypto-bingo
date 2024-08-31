'use client';

import { fetchCoinChartDataAsync } from '@/features/Coins/coinsSlice';
import { CoinChart } from './coin-chart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/store';
import { TestChart } from './test-chart';
import { useState } from 'react';

type CoinChartPartProps = {
    id: string
	changeIn24h: string | undefined
}

export default function CoinChartPart({id, changeIn24h}: CoinChartPartProps) {
	const [periodTime, setPeriodTime] = useState<'24h' | '7d' | '1m' | '3m' | '6m' | '1y'>('24h')
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
			</div>
		</div>
	);
}
