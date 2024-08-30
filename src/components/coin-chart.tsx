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
// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "June", desktop: 214 },
// ]




type CoinChartProps = {
  serachParam: "price" | "totalVolume" | "marketCap"
  handleChangeParam: (value: "price" | "totalVolume" | "marketCap") => void
}

const chartConfig = {
  desktop: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig
export function CoinChart({serachParam, handleChangeParam}: CoinChartProps) {
    const coinFullChartData = useSelector((state: RootState) => state.coinsMarket.chartData)
    const marketCapChartData = coinFullChartData?.market_caps
    const pricesChartData = coinFullChartData?.prices
    const totalVolumeData = coinFullChartData?.total_volumes

    let chartDataToShow: chartData
    switch (serachParam) {
      case 'price':
        chartDataToShow = pricesChartData
        break;
      case 'marketCap':
        chartDataToShow = marketCapChartData
        break;
      case 'totalVolume':
        chartDataToShow = totalVolumeData
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
  

  return (
    <Card className='text-green'>
      <CardHeader>
        {/* <CardTitle></CardTitle> */}
        {/* <CardDescription>{finalArray[0]?.date}January - June 2024</CardDescription> */}
        <CardDescription>
          <div className="flex gap-x-1 items-center bg-zinc-100 w-[50%] h-[35px] rounded-xl font-semibold p-[6px] text-main_secondary">
              <button className={`px-4 py-1 rounded-md cursor-pointer ${serachParam === 'price' && 'bg-white text-black'}`}
              onClick={() => handleChangeParam('price')}
              >Price</button>
              <button className={`px-4 py-1 rounded-md cursor-pointer ${serachParam === 'marketCap' && 'bg-white text-black'}`} 
              onClick={() => handleChangeParam('marketCap')}
              >Market Cap</button>
              <button className={`px-4 py-1 rounded-md cursor-pointer ${serachParam === 'totalVolume' && 'bg-white text-black'}`}
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
              dataKey='price'
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
