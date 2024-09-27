"use client";
import Typography from "@/design-systems/Atoms/Typography";
import Image from "next/image";
import NFTBanner from "@/assets/images/NFTbannerImg.jpg";
import NFTProfile from "@/assets/images/nftProfile.png";
import { LuUpload } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import Button from "@/design-systems/Atoms/Button";
import { useParams } from "next/navigation";
import { useArtsCollection } from "@/hooks/useArtsCollection";

export const NFTPageTemplate = () => {
  const { id } = useParams<{ id: string }>();

  const artsDataPayload = { id: id };

  const { isLoadingNft, exampleNftData } = useArtsCollection(
    artsDataPayload.id
  );


  return (
    <div className="container mt-6">
      <div className="relative w-full h-[300px]">
        <div className="absolute z-0 w-full h-full inset-0 bg-bannerGray rounded-sm">
          {/* <Image
            alt="banner-image"
            // height="2000"
            // width="2000"
            layout="fill"
            src={NFTBanner}
            objectFit="cover"
            className="object-cover rounded-sm"
          /> */}
        </div>
        <div className="absolute z-10 bottom-[-30px] left-[24px]">
          <Image
            alt="banner-image"
            height="100"
            width="100"
            // layout="fill"
            src={exampleNftData[0]?.imgUrl}
            objectFit="cover"
            className="object-cover rounded-sm rounded-[14px] w-[132px] h-[132px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-[auto,328px] mt-14 mb-5 w-full">
        <div className="">
          <div>
            <Typography className="text-xxl font-semibold">{exampleNftData[0]?.name}</Typography>
            <div className="flex items-center gap-3 mt-2">
              <Typography className="text-body font-medium text-grayColor dark:text-[#ffffff99]">
                Created by{" "}
                <span className="text-black dark:text-white">
                  0x54815...f69a
                </span>
              </Typography>
              <Typography className="text-body text-grayColor dark:text-[#ffffff99]">
                Royalties{" "}
                <span className="text-md font-medium bg-[#FEDA03] text-black px-1 py-[0.5px] rounded ml-1">
                  0%
                </span>{" "}
              </Typography>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <Button className="dark:bg-grayPrimary dark:hover:bg-graySecondary hover:bg-bannerGrayDark transition-all duration-300 ease-in-out bg-bannerGray text-md font-bold rounded-sm py-3 px-4 shadow">
                Place Floor Bid
              </Button>

              <div className="dark:bg-grayPrimary dark:hover:bg-graySecondary hover:bg-bannerGrayDark transition-all duration-300 ease-in-out bg-bannerGray p-4 rounded-sm shadow">
                <LuUpload />
              </div>
              <div className="dark:bg-grayPrimary dark:hover:bg-graySecondary hover:bg-bannerGrayDark transition-all duration-300 ease-in-out bg-bannerGray p-4 rounded-sm shadow">
                <BsThreeDots />
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-[15px] flex-col gap-3 border rounded-md border-solid dark:border-white border-grayColor p-6 w-[328px]">
          <div className="flex justify-between">
            <Typography className="text-grayColor dark:text-[#ffffff99] font-medium">
              Floor
            </Typography>
            <Typography>_</Typography>
          </div>
          <div className="flex justify-between">
            <Typography className="text-grayColor dark:text-[#ffffff99] font-medium">
              Volume
            </Typography>
            <Typography>4.11 APT</Typography>
          </div>
          <div className="flex justify-between">
            <Typography className="text-grayColor dark:text-[#ffffff99] font-medium">
              Items
            </Typography>
            <Typography>555</Typography>
          </div>

          <div className="flex justify-between">
            <Typography className="text-grayColor dark:text-[#ffffff99] font-medium">
              Owners
            </Typography>
            <Typography>338</Typography>
          </div>

          <div className="flex justify-between">
            <Typography className="text-grayColor dark:text-[#ffffff99] font-medium">
              Owners
            </Typography>
            <Typography>338</Typography>
          </div>

          <div className="flex justify-between">
            <Typography className="text-grayColor dark:text-[#ffffff99] font-medium">
              Blockchain
            </Typography>
            <Typography>Aptos</Typography>
          </div>

          <div className="flex justify-between">
            <Typography className="text-grayColor dark:text-[#ffffff99] font-medium">
              Address
            </Typography>
            <Typography>0x588...170c</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPageTemplate;
