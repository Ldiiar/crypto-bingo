import { getTopFiveCoins } from '@/lib/actions';
import Top5ListRow from './top-5-list-row';

export default async function TopCryptosBlock() {
    const topCoinsData = await getTopFiveCoins()

    const renderCoinsMarket = topCoinsData?.map(item => {
        return <Top5ListRow data={item} key={item.id}/>
    })

  return (
<div className='bg-main_primary text-main_fourth mary w-1/2 min-w-[350px] max-w-[500px] rounded-xl lg:rounded-3xl min-h-40 px-4 py-2 md:px-10 md:py-4 mb-4'>
        <Top5ListRow type='description'/>
          {renderCoinsMarket}
      </div>
  )
}
