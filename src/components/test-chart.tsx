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
}

export function TestChart({changeIn24h}: CoinChartProps) {
    const [searchParam, setSearchParam] = useState<'price' | 'totalVolume' | 'marketCap'>('price')
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

  let finalArray: chartData = [{date: '2024', price: null}]
  async function getChartValue() {
    await chartDataToShow?.map((item: any) => {
      finalArray.push({date: `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, price: item[1]})
    })
    return
  }

  if (pricesChartData) {
  getChartValue().then()
  }

  const chartConfig = {
    desktop: {
      label: "Price",
      color: `${changeBareColor(changeIn24h)}`,
    },
  } satisfies ChartConfig

  return (
    <Card className='bg-white border-0'>
      <CardHeader>
        <CardTitle>Chart data</CardTitle>
        <CardDescription>This is our gathered data about this coin represented as a chart.</CardDescription>
        <CardDescription>
          <div className="flex gap-x-1 items-center bg-zinc-100 min-w-[300px] w-[50%] min-h-[35px] rounded-xl font-semibold p-[6px] text-main_secondary">
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
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={finalArray}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="price"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            {/* <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div> */}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
