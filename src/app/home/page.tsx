import CurrencySelector from '@/components/currency-selector';
import Dashboard from '@/components/dashboard';
import H1 from '@/components/h1';
import PerPageSelector from '@/components/per-page-selector';
import SearcCoinForm from '@/components/search-coin-form';
import { TextEffect } from '@/components/ux/text-effect';
import Wrapper from '@/components/wrapper';


export default async function Home() {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-y4oi4BVxGcw1ZjgsAHb4QF4V'}
    };
    
    const response: any = await fetch('https://api.coingecko.com/api/v3/global', options)
    const data = await response.json()
    const totalCoinData: number = data.data.active_cryptocurrencies
    


    return (
    <main className=''>
      <H1>
          <TextEffect per='char' as='span' preset='fade'>
              Crypto Marketplace
         </TextEffect>     
      </H1>
        <div className="mb-16"></div>
        <section className='flex flex-col sm:justify-between sm:flex-row gap-8 mb-8'>
            <SearcCoinForm />
          <div className="flex justify-center sm:justify-normal gap-2">
            <CurrencySelector />
            <PerPageSelector />
          </div>
        </section>
        <Wrapper >
            <Dashboard totalCoinData={totalCoinData}/>
        </Wrapper>   
    </main>
  )
}
