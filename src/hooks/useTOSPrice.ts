import { getTosPrice, getUSDInfo } from '@/api';
import { useState, useEffect } from 'react';

export function useTOSPrice () {
  const [tosPriceUSD, setTosPriceUSD] = useState(0)
  const [tosPriceKRW, setTosPriceKRW] = useState(0)

  useEffect(() => {
    async function fetch () {
      const tosUSD = await getTosPrice()
      const krwUSD = await getUSDInfo()

      const tosKRW = tosUSD / krwUSD
      
      setTosPriceKRW(tosKRW)
      setTosPriceUSD(tosUSD)
    }
    fetch()
  }, [tosPriceKRW])
  return { tosPriceUSD, tosPriceKRW }
}