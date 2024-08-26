'use client'
import { searchCoinById } from '@/lib/actions';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useDispatch } from 'react-redux';
import { updateCoinsMarket, updateSearchingPrompt } from '@/features/Coins/coinsSlice';
import { ChangeEvent, useState } from 'react';

export default function SearcCoinForm() {
		const dispatch = useDispatch()
		const [inputText, setInputText] = useState('')
		function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
			setInputText(e.target.value)
			if (e.target.value === '') {
				dispatch(updateSearchingPrompt(null))
			} else {
				dispatch(updateSearchingPrompt(e.target.value))
			}
			console.log(e.target.value);
		}


	return (
		<>
		<form className='flex w-full sm:w-2/3 gap-2'>
			<Input
				placeholder='Search crypto by name'
				id='coinName'
				name='coinName'
				value={inputText}
				onChange={(e) => handleTextChange(e)}
			/>
		</form>
		</>
	);
}
