import { useState, useEffect } from 'react';
import { 
  getTotalSupply, 
  getCirculateSupply,
  getTONPrice,
  getCirculationSupply
} from '@/api'

export function useSupply () {
  const [totSupply, setTotSupply] = useState('');
  const [circulSupply, setCirculSupply] = useState('');
  const [circul, setCircul] = useState({})

  useEffect(() => {
    async function fetch() {
      const totalSupply = await getTotalSupply();
      const circulatedSupply = await getCirculateSupply();
      const circulation = await getCirculationSupply();
    
      // await getTONPrice()
      setCircul(circulation);
      setTotSupply(totalSupply);
      setCirculSupply(circulatedSupply)
    }
    fetch()
  }, [totSupply, circulSupply,])
  return { 
    totSupply, 
    circulSupply ,
    circul
  };
}