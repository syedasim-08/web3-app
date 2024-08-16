"use client";

import React, { useEffect, useMemo, useState } from "react";
import Card from "@/design-systems/Organisms/Card";
import { useAccount } from "wagmi";
import { useArtsCollection } from "@/hooks/useArtsCollection";
import { ArtsDataCollection } from "@/utils/data";
import { ArtsTemplateProps } from "./interface";
import { ExampleArtsResponse } from "@/api-services/interfaces/arts";
import ArtsSkeleton from "../../ArtsSkeleton";

export const PAGE_SIZE = 5;

interface ArtsSkeletonProps {
  noOfSkeleton?: number;
}
export const ArtsSkeltonList: React.FC<ArtsSkeletonProps> = ({
  noOfSkeleton,
}) => {
  return (
    <>
      {Array(noOfSkeleton ?? PAGE_SIZE)
        .fill("")
        .map((_: string, i: number) => (
          <ArtsSkeleton
            className="card-shadow w-full md:h-[353px] xl:w-[332px]"
            key={i}
          />
        ))}
    </>
  );
};

const ArtPageTemplate: React.FC<ArtsTemplateProps> = ({
  isLoadingNft,
  exampleNftData,
}) => {
  const [artsData, setArtsData] = useState<ArtsDataCollection[]>([]);

  const { isConnected } = useAccount();

  useMemo(() => {
    setArtsData(exampleNftData);
  }, [exampleNftData]);

  // async function fetchArtsData() {
  //   try {
  //       setLoading(true)
  //     const response = await fetch("/api/arts", {
  //       headers: {
  //         Accept: "application/json",
  //         method: "GET",
  //       },
  //     });
  //     if (response) {
  //       setLoading(false)
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //   } catch (error) {
  //       setLoading(false)
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {

  //   // if(isConnected){
  //   //     fetchArtsData()
  //   // }

  //   console.log("data",exampleNftData)

  // }, []);

  return (
    <main className="container h-screen bg-[#f7f7f7] dark:bg-black">
      <div className="grid grid-cols-5 pt-16 gap-y-6 gap-4">
        {/* {Array.from({ length: 100 }).map((_, index) => {
          return <Card key={index} data={exampleNftData} />;
        })} */}
        {isLoadingNft ? (
          <ArtsSkeltonList />
        ) : (
          artsData?.map((item: ArtsDataCollection) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                minting={item.minting}
                url = {item.imgUrl}
              />
            );
          })
        )}
      </div>
    </main>
  );
};

export default ArtPageTemplate;
