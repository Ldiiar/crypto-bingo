'use client';

import { fetchCoinChartDataAsync } from '@/features/Coins/coinsSlice';
import { CoinChart } from './coin-chart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/store';
import { useState } from 'react';
import Loader from './Loader';

type CoinChartPartProps = {
    id: string
}

export default function CoinChartPart({id}: CoinChartPartProps) {
    const [serachParam, setSearchParam] = useState<'price' | 'totalVolume' | 'marketCap'>('price')
	function handleChangeParam (value: 'price' | 'totalVolume' | 'marketCap') {
		if (serachParam !== value) {
			setSearchParam(value)
		}
	}
    const dispatch = useDispatch<AppDispatch>()
    dispatch(fetchCoinChartDataAsync({id}))
	return (
		<div className='pl-[2px] lg:w-[70%] bg-green-200'>
			<div className=''>
					<CoinChart serachParam={serachParam} handleChangeParam={handleChangeParam}/>
                {/* <COinChartAxes /> */}
			</div>
		</div>
	);
}
