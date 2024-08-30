
"use client"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
import { useState } from 'react'
import { RootState } from '@/features/store'
// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]
const chartConfig = {
  desktop: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig
export function COinChartAxes() {
    const [chartData, setChartData] = useState<chartData | []>([])
    const coinChartData = useSelector((state: RootState) => state.coinsMarket.chartData)
    const marketCapChartData = coinChartData?.market_caps
    const pricesChartData: any = coinChartData?.prices
    const totalVolumeData = coinChartData?.total_volumes
    console.log('Prices data', pricesChartData);

  
    let finalArray: chartData = [{date: 'Aug', price: null}]
    async function getChartValue() {
    pricesChartData?.map((item: any) => {
      finalArray.push({date: `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, price: item[1]})
    })
  }
  if (pricesChartData) {
    getChartValue()
    console.log(finalArray);
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Axes</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="price"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
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
      </CardFooter>
    </Card>
  )
}