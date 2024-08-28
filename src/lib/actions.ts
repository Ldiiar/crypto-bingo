'use server'

const API_KEY = process.env.API_KEY
const BASE_URL = process.env.BASE_URL

export async function searchCoinById(formData: FormData) {
      const coinId = formData.get('coinName');

      async function getCoinById(id: any | null) {
        const coinId = id?.toLowerCase().trim()
        if (coinId === '') {
          return null
        }

        try {
          const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': API_KEY as string}
          };
          
          const response  = await fetch(`${BASE_URL}/coins/markets?vs_currency=usd&ids=${coinId}`, options)
          const data = response.json()
            
          return data
        } catch (error) {
          return null
        }
    }

      const coinData = await getCoinById(coinId)
      return coinData
  }


  export async function fetchAllCoinsByOptions(currency: 'usd' | 'eur' | 'inr', amountPerPage: '10' | '20' | '50' | '100' , page: string) {
      try {
        const options = {
          method: 'GET',
          headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-y4oi4BVxGcw1ZjgsAHb4QF4V'}
        };
        
        const res = await fetch(`${BASE_URL}/coins/markets?vs_currency=${currency}&per_page=${amountPerPage}&page=${page}&price_change_percentage=1h%2C24h%2C7d`, options)
        const data = res.json()
        
        return data
        } catch (error) {
          return null
        }
    }