import { getTONPrice, getUSDInfo } from '@/api';
import { useState, useEffect } from 'react';

export function useTONPrice () {
  const [tonPrice, setTonPrice] = useState(0)
  useEffect(() => {
    async function fetch () {
      const tonKRW = await getTONPrice()
      const krwUSD = await getUSDInfo()
      const tonUSD = tonKRW * krwUSD
      setTonPrice(tonUSD)
    }
    fetch()
  }, [])
  return { tonPrice }
}