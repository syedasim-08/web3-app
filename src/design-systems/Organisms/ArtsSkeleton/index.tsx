import React from "react";

interface ArtsSkeletonProps {
  className?: string;
}

const ArtsSkeleton: React.FC<ArtsSkeletonProps> = () => {
  return (
    <div className="flex flex-col bg-white rounded-[12px]">
      <div
        className={`dark:drop-shadow-card-dark relative w-full h-[120px] flex max-h-[277px] w-full rounded-tr-[12px] rounded-tl-[12px] w-full shadow-lg animate-pulse cursor-pointer flex-col items-center border-[#D2D2D2] bg-neutral-800 p-6  drop-shadow-card dark:bg-gray-300 `}
      >
        
      </div>

      <div className="text-body text-black dark:text-white p-3 mt-4">
        <div>
          <div className="h-[12px] w-[120px] rounded-full bg-neutral-600 animate-pulse"></div>
          <div className="flex gap-5 mt-5">
            <div className="flex flex-col gap-3">
              <div className="h-[12px] w-[80px] rounded-full bg-neutral-600 animate-pulse"></div>
              <div className="h-[12px] w-[80px] rounded-full bg-neutral-600 animate-pulse"></div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-normal h-[12px] w-[80px] rounded-full bg-neutral-600 animate-pulse"></div>
              <div className="h-[12px] w-[80px] rounded-full bg-neutral-600 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtsSkeleton;
