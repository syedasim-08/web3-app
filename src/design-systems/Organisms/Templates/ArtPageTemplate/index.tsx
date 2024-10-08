"use client";

import React, { useEffect, useMemo, useState } from "react";
import Card from "@/design-systems/Organisms/Card";
import { useAccount } from "wagmi";
import { ArtsDataCollection } from "@/utils/data";
import { ArtsTemplateProps } from "./interface";
import ArtsSkeleton from "../../ArtsSkeleton";
import Typography from "@/design-systems/Atoms/Typography";
import Link from "next/link";

export const PAGE_SIZE = 10;

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
  const { isConnected } = useAccount();



  return (
    <main className="container h-full bg-[#f7f7f7] dark:bg-black">
      <div className="grid grid-cols-5 pt-16 pb-5 gap-y-6 gap-4">
        {isLoadingNft ? (
          <ArtsSkeltonList />
        ) : exampleNftData && exampleNftData.length > 0 ? (
          exampleNftData?.map((item: ArtsDataCollection) => {
            return (
              <Link key={item.id}href={`/art/${item.id}`}>
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                minting={item.minting}
                url={item.imgUrl}
              />
              </Link>
            );
          })
        ) : (
          <div className="flex min-h-[90vh] items-center justify-center gap-y-[22px] pb-5 pt-5">
            <Typography>No data found</Typography>
          </div>
        )}
      </div>
    </main>
  );
};

export default ArtPageTemplate;
