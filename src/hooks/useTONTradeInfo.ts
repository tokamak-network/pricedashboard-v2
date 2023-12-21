import { getTONPrice, getUSDInfo } from '@/api';
import { useState, useEffect } from 'react';

export function useTONTradeInfo () {
  const [USD, setUSD] = useState(0)
  const [highPrice, setHighPrice] = useState(0)
  const [lowPrice, setLowPrice] = useState(0)
  const [openingPrice, setOpeningPrice] = useState(0)
  const [closingPrice, setClosingPrice] = useState(0)

  useEffect(() => {
    async function fetch () {
      const ton = await getTONPrice()
      const krwUSD = await getUSDInfo()

      setHighPrice(ton.high_price)
      setLowPrice(ton.low_price)
      setOpeningPrice(ton.opening_price)
      setClosingPrice(ton.prev_closing_price)
      setUSD(krwUSD)
    }
    fetch()
  }, [highPrice, lowPrice])
  return { USD, highPrice, lowPrice, openingPrice, closingPrice }
}