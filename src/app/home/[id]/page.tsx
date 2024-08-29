import { CoinChart } from '@/components/coin-chart';
import CoinChartPart from '@/components/coin-chart-part';
import CoinInfoPart from '@/components/coin-info-part';
import { getChartdata, searchCoinById } from '@/lib/actions';

type CoinPageProps = {
    params: any
}

export default async function CoinPage({params}: CoinPageProps) {
    const coinData: Coin[] = await searchCoinById(params.id)
    console.log(coinData);
    
    
  return (
    <main className='mt-[50px]  w-full text-main_fourth'>
        <section className='lg:flex w-full'>
            <CoinInfoPart data={coinData}/>
            <CoinChartPart id={params.id}/>
        </section>
    </main>
  )
}
