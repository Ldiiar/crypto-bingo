'use client';

import { fetchCoinChartDataAsync } from '@/features/Coins/coinsSlice';
import { CoinChart } from './coin-chart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/store';
import { TestChart } from './test-chart';

type CoinChartPartProps = {
    id: string
	changeIn24h: string | undefined
}

export default function CoinChartPart({id, changeIn24h}: CoinChartPartProps) {
    const dispatch = useDispatch<AppDispatch>()
    dispatch(fetchCoinChartDataAsync({id}))
	return (
		<div className='lg:w-[70%]'>
			<div className=''>
					{/* <CoinChart/> */}
					<TestChart changeIn24h={changeIn24h}/>
			</div>
		</div>
	);
}
