import ArtService from '@/api-services/ArtService'
import { QUERIES_KEY } from '@/utils/api-integration'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'


export const useArtsCollection = () => {
 
  const { isLoading: isLoadingNft, data } = useQuery({
    queryKey: [QUERIES_KEY.PUBLIC.GET_ART_NFT],
    queryFn: () => ArtService.getArtsCollection(),
    
  })

  const exampleNftData = useMemo(() => {
    console.log("data",data?.data)
    return data
  }, [data])

  return {
    isLoadingNft,
    exampleNftData:data?.data,
  }
}
