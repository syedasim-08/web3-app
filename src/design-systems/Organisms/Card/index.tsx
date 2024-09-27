"use client"
import Typography from "@/design-systems/Atoms/Typography";
import Image from "next/image";
import CardImage from "@/assets/images/nftImage.webp";
import { CardsProps } from "./interface";
import Pic from '@/assets/images/logo.svg'

const Card: React.FC<CardsProps> = ({name,price,minting,url}) => {
  return (
    <div className="relative bg-white dark:bg-[#262525] max-h-[277px] w-full shadow-lg rounded-[12px] hover:-translate-y-[6px] transition-all duration-500 ease-in-out ">
      <Image
        src={url}
        loading="lazy"
        alt="card-image"
        width="100"
        height="100"
        className="rounded-tr-[12px] rounded-tl-[12px] w-full h-[150px] max-h-[150px]"
      />
      <div className="text-body text-black dark:text-white p-3 mt-4">
        <div>
          <Typography className="font-bold">
           {name}
          </Typography>
          <div className="flex gap-5 mt-3">
            <div className="flex flex-col">
              <Typography className="font-normal text-gray">Minting</Typography>
              <Typography className="font-bold">{minting}</Typography>
            </div>

            <div className="flex flex-col">
              <Typography className="font-normal text-gray">Price</Typography>
              <Typography className="font-bold">{price} ETH</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
