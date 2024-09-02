import { CoinChart } from '@/components/coin-chart';
import CoinChartPart from '@/components/coin-chart-part';
import CoinInfoPart from '@/components/coin-info-part';
import { searchCoinById } from '@/lib/actions';
import { shortenNumber } from '@/lib/utils';

type CoinPageProps = {
    params: any
}

export default async function CoinPage({params}: CoinPageProps) {
    const coinData: Coin[] = await searchCoinById(params.id)

    //to change the color of th chart depending on its value: negative or positive
    const changeIn24h = shortenNumber(coinData?.[0]?.price_change_percentage_24h, 1)
    
    
  return (
    <main className='mt-[50px]  w-full text-main_fourthborder border-purple-500'>
        <section className='lg:flex w-full mb-[80px]'>
            <CoinInfoPart data={coinData} />
            <CoinChartPart id={params.id} changeIn24h={changeIn24h}/>
        </section>
    </main>
  )
}
