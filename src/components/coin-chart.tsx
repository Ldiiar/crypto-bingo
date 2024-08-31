"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
import { useSelector } from 'react-redux'
import { RootState } from '@/features/store'
import { useState } from 'react'
// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "June", desktop: 214 },
// ]




// type CoinChartProps = {
//   serachParam: "price" | "totalVolume" | "marketCap"
//   handleChangeParam: (value: "price" | "totalVolume" | "marketCap") => void
// }

const chartConfig = {
  desktop: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig
export function CoinChart() {
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
  
    let finalArray: chartData = [{date: '2024', value: null}]
    async function getChartValue() {
      await chartDataToShow?.map((item: any) => {
        finalArray.push({date: `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, value: item[1]})
      })
      return
    }

  if (pricesChartData) {
    getChartValue().then()
  }
  

  return (
    <Card className='text-green'>
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
          <LineChart
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
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey='value'
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing data for the last 1 months
        </div>
      </CardFooter>
    </Card>
  )
}
