"use client";

import { ExampleArtsResponse } from "@/api-services/interfaces/arts";
import ArtPageTemplate from "@/design-systems/Organisms/Templates/ArtPageTemplate";
import { useArtsCollection } from "@/hooks/useArtsCollection";
import { ArtsDataCollection } from "@/utils/data";

const Art: React.FC = () => {
  const { isLoadingNft, exampleNftData } = useArtsCollection();

  return (
    <>
      <ArtPageTemplate
        isLoadingNft={isLoadingNft}
        exampleNftData={exampleNftData as ArtsDataCollection[]}
      />
    </>
  );
};

export default Art;
