import CoinInfoPart from '@/components/coin-info-part';
import { searchCoinById } from '@/lib/actions';

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
            <div className="pl-[2px] lg:w-[70%] bg-green-200">R</div>
        </section>
    </main>
  )
}
