'use client';

import { fetchCoinChartDataAsync } from '@/features/Coins/coinsSlice';
import { CoinChart } from './coin-chart';
import { useDispatch } from 'react-redux';

type CoinChartPartProps = {
    id: string
}

export default function CoinChartPart({id}: CoinChartPartProps) {
    const dispatch = useDispatch()
    // dispatch(fetchCoinChartDataAsync({id}))
	return (
		<div className='pl-[2px] lg:w-[70%] bg-green-200'>
			<div className=''>
				<CoinChart />
			</div>
		</div>
	);
}
