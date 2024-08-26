'use client'
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { useDispatch } from 'react-redux'
import { updateAmountPerPage } from '@/features/Coins/coinsSlice'

export default function PerPageSelector() {
  const dispatch = useDispatch()
  const handleChange = (value: string) => {
    dispatch(updateAmountPerPage(value))
    console.log('Amount changed to: ', value);
  }



  return (
    <Select defaultValue='10' onValueChange={(value) => handleChange(value)}>
    <SelectTrigger className="w-[120px]">
      <SelectValue placeholder="Per page"/>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
      <SelectLabel>Per page</SelectLabel>
        <SelectItem value="10" >10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="50">50</SelectItem>
        <SelectItem value="100">100</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}
