import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shortenNumber(num: number | undefined, decimalPlaces: number) {
  return num?.toFixed(decimalPlaces);
}

export function checkNumberSign(value: string) {
  const number = parseFloat(value);

  if (isNaN(number)) {
    return "Invalid input: Not a number";
  } else if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

export function changeColor (number: string | undefined,) {
  if(number === undefined){
    return ''
  }
  
  const sign = checkNumberSign(number)
  switch(sign) {
    case 'Negative':
      return 'text-red-500'
    case 'Positive':
      return 'text-green-500'
    case 'Zero':
      return 'text-green-500'
    default:
      return ''
  }
}

export function changeBareColor(number: string | undefined) {
  if (number) {
    const sign = checkNumberSign(number)
    switch(sign) {
      case 'Negative':
        return '#eb0101'
      case 'Positive':
        return '#01a101'
      case 'Zero':
        return '#289f00'
      default:
        return ''
    }
}

}

export function getSearchedCoin(allCoins: Coin[] | null, prompt: string){
  const filteredCoins = allCoins?.filter(coin => coin.name.toLowerCase().includes(prompt.trim()))
  return filteredCoins
}

export const validatePageValue = (number: string) => {
  let newNumber = parseInt(number)
  if (newNumber < 1) {
    newNumber = 1
    return `${newNumber}`
  } 
    return `${newNumber}`
}

export function getCurrencySign(currency: "usd" | "eur" | "inr") {
  switch (currency) {
    case 'usd':
      return '$'
    case 'eur':
      return '€'
    case 'inr':
      return '₹'
  }
}