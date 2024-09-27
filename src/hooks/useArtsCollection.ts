import ArtService from "@/api-services/ArtService";
import { QUERIES_KEY } from "@/utils/api-integration";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useArtsCollection = (payload?:string) => {
  console.log("payload", payload)
  const { isLoading: isLoadingNft, data } = useQuery({
    queryKey: payload? [QUERIES_KEY.PUBLIC.GET_ART_NFT, payload]:[QUERIES_KEY.PUBLIC.GET_ART_NFT],
    queryFn: payload? () => ArtService.getArtsCollectionByID(payload) : () => ArtService.getArtsCollection(),
  
  });

  const exampleNftData = useMemo(() => {
    if(!data) return []
    return Array.isArray(data) ? data : [data]
  }, [data]);

  return {
    isLoadingNft,
    exampleNftData,
  };
};
