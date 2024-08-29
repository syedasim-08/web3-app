import { useMutation } from "@tanstack/react-query";

import CollectionService from "@/api-services/ArtService";
import { postDataType } from "@/design-systems/Organisms/Templates/CreateNFTTemplate/interface";

export const useCreateArts = () => {
  const {
    isPending: isSubmitArtsLoading,
    data: createArtsData,
    mutateAsync: createArtsMutateAsync,
  } = useMutation({
    mutationFn: (payload: postDataType) =>
      CollectionService.postArtsCollection(payload),
  });

  return {
    isSubmitArtsLoading,
    createArtsData,
    createArtsMutateAsync,
  };
};
