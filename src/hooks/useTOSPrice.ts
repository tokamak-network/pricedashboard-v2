import { getTosPrice } from '@/api'
import { useQuery } from '@tanstack/react-query'
import { useKrwPrice } from './useKrwPrice'

export function useTOSPrice() {
  const { data: krwPrice } = useKrwPrice()
  const { data: tosPriceUSD } = useQuery({
    queryKey: ['tosPrice'],
    queryFn: async () => {
      return await getTosPrice()
    },
    refetchInterval: 1000 * 5,
    enabled: !!krwPrice,
    initialData: 0,
  })

  return { tosPriceUSD, tosPriceKRW: tosPriceUSD / krwPrice }
}
