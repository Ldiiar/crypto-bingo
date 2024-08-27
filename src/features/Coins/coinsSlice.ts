'use client'

import { fetchAllCoinsByOptions } from '@/lib/actions';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type TinitialState = {
	coinsMarket: Coin[] | null
	searchingPrompt: string | null
	currency: 'usd' | 'eur' | 'inr'
	amountPerPage: '10' | '20' | '50' | '100'
	pageToSearch: string
	selectedCoin: Coin[] | null
}

let initialState: TinitialState = {
	coinsMarket: null,
	searchingPrompt: null,
	amountPerPage: '10',
	currency: 'usd',
	pageToSearch: '1',
	selectedCoin: null
};

const burgerSlice = createSlice({
	name: "coins",
	initialState,
	reducers: {
		updateCoinsMarket: (state, {payload}) => {
			state.coinsMarket = payload
		},
		updateSearchingPrompt: (state, {payload}) => {
			state.searchingPrompt = payload
		},
		updateCurrency: (state, {payload}) => {
			state.currency = payload
		},
		updateAmountPerPage: (state, {payload}) => {
			state.amountPerPage = payload
		},
		updatePageToSearch: (state, {payload}) => {
			state.pageToSearch = payload
		},
		updateSelectedCoin: (state, {payload}) => {
			state.selectedCoin = payload
			
		}
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder
		.addCase(fetchAllCoinsByOptionsAsync.fulfilled, (state, {payload}) => {
		  state.coinsMarket = payload
		})
	},
});


type TFetchAllCoinsByOptionsAsync  = {
	currency: 'usd' | 'eur' | 'inr';
	amountPerPage: '10' | '20' | '50' | '100';
	page: string;
  }

export const fetchAllCoinsByOptionsAsync = createAsyncThunk(
	'users/fetchAllCoinsByOptionsAsync',
	async ({currency, amountPerPage, page}: TFetchAllCoinsByOptionsAsync) => {
		const response = await fetchAllCoinsByOptions(currency, amountPerPage, page)
		return response
	}
  )



export default burgerSlice.reducer;
export const { updateCoinsMarket, updateSearchingPrompt, updateCurrency, updateAmountPerPage, updateSelectedCoin,
	updatePageToSearch} = burgerSlice.actions;

