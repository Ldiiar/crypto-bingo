'use client'
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { updateCurrency } from '@/features/Coins/coinsSlice'
import { useDispatch } from 'react-redux'

export default function CurrencySelector() {
  const dispatch = useDispatch() 
 
  const handleValueChange = (value: string) => {
    dispatch(updateCurrency(value.toLowerCase()))
    console.log(value.toLowerCase());
  }

  
  return (
    <Select defaultValue='usd' onValueChange={handleValueChange}>
    <SelectTrigger className="w-[120px]">
      <SelectValue placeholder="Currency"/>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Currency</SelectLabel>
        <SelectItem value="usd">USD</SelectItem>
        <SelectItem value="eur">EUR</SelectItem>
        <SelectItem value="inr">INR</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}
