'use client'
import { searchCoinById } from '@/lib/actions';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useDispatch } from 'react-redux';
import { updateCoinsMarket, updateSearchingPrompt, updateSelectedCoin } from '@/features/Coins/coinsSlice';
import { ChangeEvent, useState } from 'react';
import { IoSearch } from "react-icons/io5";

export default function SearcCoinForm() {
		const dispatch = useDispatch()
		const [inputText, setInputText] = useState('')
		function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
			setInputText(e.target.value)
			if (e.target.value === '') {
				// dispatch(updateSearchingPrompt(null))
			dispatch(updateSelectedCoin(null))
			} else {
				// dispatch(updateSearchingPrompt(e.target.value))
			}
		}

		async function SearchIcon(formData: FormData) {
			const coinId = formData.get('coinName') as string;
			const response: Coin[] = await searchCoinById(coinId)
			dispatch(updateSelectedCoin(response))
		}

	return (
		<>
		<form className='flex w-full sm:w-2/3 gap-2' action={(e) => SearchIcon(e) }>
			<Input
				placeholder='Search crypto by name'
				id='coinName'
				name='coinName'
				value={inputText}
				onChange={(e) => handleTextChange(e)}
			/>
			<Button type='submit' className='bg-main_fourth'>
				Search
				<IoSearch className='ml-1'/>
			</Button>
		</form>
		</>
	);
}
