import { getTONPrice, getUSDInfo } from '@/api';
import { useState, useEffect } from 'react';

export function useTONPrice () {
  const [tonPriceUSD, setTonPriceUSD] = useState(0)
  const [tonPriceKRW, setTonPriceKRW] = useState(0)

  useEffect(() => {
    async function fetch () {
      const tonKRW = await getTONPrice()
      const krwUSD = await getUSDInfo()

      const tonUSD = tonKRW.trade_price * krwUSD

      setTonPriceKRW(tonKRW.trade_price)
      setTonPriceUSD(tonUSD)
    }
    fetch()
    setInterval(() => fetch(), 60000)
  }, [tonPriceKRW, tonPriceUSD])
  return { tonPriceUSD, tonPriceKRW }
}