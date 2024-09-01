"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/features/store'
import { changeBareColor } from '@/lib/utils'

export const description = "A simple area chart"

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ]



type CoinChartProps = {
  changeIn24h: string | undefined
  periodTime: '24h' | '7d' | '1m' | '3m' | '6m' | '1y'
  handleChangePeridTime: (value: '24h' | '7d' | '1m' | '3m' | '6m' | '1y') => void
}

export function TestChart({changeIn24h, periodTime, handleChangePeridTime}: CoinChartProps) {
    const [searchParam, setSearchParam] = useState<'price' | 'totalVolume' | 'marketCap'>('marketCap')
    function handleChangeParam (value: 'price' | 'totalVolume' | 'marketCap') {
    if (searchParam !== value) {
      setSearchParam(value)
    }
  }
  const coinFullChartData = useSelector((state: RootState) => state.coinsMarket.chartData)
  const marketCapChartData = coinFullChartData?.market_caps
  const pricesChartData = coinFullChartData?.prices
  const totalVolumeData = coinFullChartData?.total_volumes

  let chartDataToShow: chartData
  let label
  switch (searchParam) {
    case 'price':
      chartDataToShow = pricesChartData
      label = 'price'
      break;
    case 'marketCap':
      chartDataToShow = marketCapChartData
      label = 'market cap'
      break;
    case 'totalVolume':
      chartDataToShow = totalVolumeData
      label = 'total volume'
      break;
    default: 
      break;
  }

  let finalArray: chartData = []
  async function getChartValue() {
    await chartDataToShow?.map((item: any) => {
      let unformattedDate = `${new Date(item[0])}`
      finalArray.push(
        {date: `${unformattedDate.slice(0, -17)}`, value: item[1]}
      )
    })
    return
  }

  if (pricesChartData) {
  getChartValue().then()
  }

  const chartConfig = {
    desktop: {
      label: "Value",
      color: `${changeBareColor(changeIn24h)}`,
    },
  } satisfies ChartConfig

  return (
    <Card className='bg-transparent border-0 lg:pl-[25px]'>
      <CardHeader className='p-0'>
        <CardTitle>Graph</CardTitle>
        <CardDescription>This is our gathered data about this coin represented as a chart.</CardDescription>
        <CardDescription>
          <div className="flex flex-col gap-y-2 lg:flex-row lg:justify-between mb-[60px]">
            <div className="flex gap-x-1 items-center bg-main_secondary w-fit min-h-[35px] rounded-xl font-semibold p-[6px] text-white">
                <button className={`h-full px-4 py-1 rounded-md cursor-pointer ${searchParam === 'price' && 'bg-white text-black'}`}
                onClick={() => handleChangeParam('price')}
                >Price</button>
                <button className={`h-full px-4 py-1 rounded-md cursor-pointer ${searchParam === 'marketCap' && 'bg-white text-black'}`} 
                onClick={() => handleChangeParam('marketCap')}
                >Market Cap</button>
                <button className={`h-full px-4 py-1 rounded-md cursor-pointer ${searchParam === 'totalVolume' && 'bg-white text-black'}`}
                onClick={() => handleChangeParam('totalVolume')}
                >Total Volume</button>
            </div>
            <div className="flex gap-x-1 items-center bg-main_secondary w-fit min-h-[35px] rounded-xl font-semibold p-[6px] text-white">
              <button className={`h-full px-4 py-1 rounded-md cursor-pointer ${periodTime === '24h' && 'bg-white text-black'}`}
                  onClick={() => handleChangePeridTime('24h')}
                  >24h</button>
                  <button className={`h-full px-4 py-1 rounded-md cursor-pointer ${periodTime === '7d' && 'bg-white text-black'}`} 
                  onClick={() => handleChangePeridTime('7d')}
                  >7d</button>
                  <button className={`h-full px-4 py-1 rounded-md cursor-pointer ${periodTime === '1m' && 'bg-white text-black'}`}
                  onClick={() => handleChangePeridTime('1m')}
                  >1m</button>
                  <button className={`h-full px-4 py-1 rounded-md cursor-pointer ${periodTime === '3m' && 'bg-white text-black'}`}
                  onClick={() => handleChangePeridTime('3m')}
                  >3m</button>
                  <button className={`h-full px-4 py-1 rounded-md cursor-pointer ${periodTime === '6m' && 'bg-white text-black'}`}
                  onClick={() => handleChangePeridTime('6m')}
                  >6m</button>
                  <button className={`h-full px-4 py-1 rounded-md cursor-pointer ${periodTime === '1y' && 'bg-white text-black'}`}
                  onClick={() => handleChangePeridTime('1y')}
                  >1y</button>
            </div>
          </div>
          
        </CardDescription>
      </CardHeader>
      <CardContent className='p-0'>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={finalArray}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false}/>
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => new Date(value).toLocaleDateString().slice(0, 4)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="value"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  )
}
