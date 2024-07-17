"use client";
import React, { useState, useMemo } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import Button from "@/design-systems/Atoms/Button";
import Input from "@/design-systems/Atoms/Input";
import TextAreaInput from "@/design-systems/Atoms/TextAreaInput";
import Typography from "@/design-systems/Atoms/Typography";
import { FaUpload } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { useAccount } from "wagmi";
import { getMintContractAddress, ipfsHash } from "@/utils/contract";
import ABIS from "@/app/abi";
import { CustomFile, SingleFormValues } from "./interface";
import { validationSchema } from "./utils";
import { useToast } from "@/hooks/useToast";
import { toast } from 'react-toastify'
const CreateNFTTemplate: React.FC = () => {
  const [file, setFile] = useState<CustomFile | undefined>();
  const { writeContract } = useWriteContract();
  const { isConnected, chainId, address } = useAccount();
  const { warningToast } = useToast()
  const mintContractAddress = useMemo(
    () => getMintContractAddress(chainId),
    [chainId]
  );

  const [name, setName] = useState<string>("");
  const [supply, setSupply] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const selectedFile = event.target.files?.[0];
    const files = event.target.files;

    if (files && files.length > 0) {
      const selectedFile = files[0];

      if (selectedFile) {
        // const reader = new FileReader();
        // reader.onloadend = () => {
        //   setPreview(reader.result as string);
        // };
        // reader.readAsDataURL(selectedFile);
        const fileWithPreview = Object.assign(selectedFile, {
          preview: URL.createObjectURL(selectedFile),
        });
        console.log("file", fileWithPreview);
        setFieldValue("file_upload", selectedFile);
        setFile(fileWithPreview);
      }
    } else {
      setFieldValue("file_upload", null);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files?.[0];
    console.log("image", selectedFile);
    if (selectedFile) {
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setPreview(reader.result as string);
      // };
      // reader.readAsDataURL(selectedFile);

      const fileWithPreview = Object.assign(selectedFile, {
        preview: URL.createObjectURL(selectedFile),
      });

      setFieldValue("file_upload", selectedFile);
      setFile(fileWithPreview);
      setFile(fileWithPreview);
    } else {
      setFieldValue("file_upload", null);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setFile(undefined);
    setFieldValue("file_upload", null);
  };

  // const createNFT = async () => {
  //   try {
  //     if (name && supply && desc && url) {
  //       const response = await writeContract({
  //         abi: ABIS.createNFT as any,
  //         address: mintContractAddress as any,
  //         functionName: "mint",
  //         args: [
  //           String(address),
  //           `https://gateway.pinata.cloud/ipfs/${ipfsHash}`,
  //         ],
  //       });

  //       console.log("response", response);

  //       const result = await useWaitForTransactionReceipt({
  //         hash: response as any,
  //       });

  //       console.log("result", result);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const initialValues: SingleFormValues = {
    name: "",
    description: "",
    externalLink: "",
    supply: 1,
    file_upload: "",
  };

  const {
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    getFieldProps,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log("values", values);
      if (!isConnected || !address) {
        return warningToast('please login')
      // return toast.error("please login")
      }

      try {
   
          const response = await writeContract({
            abi: ABIS.createNFT as any,
            address: mintContractAddress as any,
            functionName: "mint",
            args: [
              String(address),
              `https://gateway.pinata.cloud/ipfs/${ipfsHash}`,
            ],
          });
  
          console.log("response", response);
  
          // const result = await useWaitForTransactionReceipt({
          //   hash: response as any,
          // });
  
          // console.log("result", result);
        
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="container">
      <div className="font-Inter mt-12 w-full">
        <Typography className="text-xl font-medium">Create an NFT</Typography>
        <Typography className="text-body font-normal w-1/2">
          Once your item is minted you will not be able to change any of its
          information.
        </Typography>
        <div className="mt-8 mb-12 !w-full grid grid-cols-2 gap-12">
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <Typography className="font-bold my-4">Name*</Typography>
              <Input
                placeholder="Name of your NFT"
                inWrpClassName="bg-transparent border border-black p-3"
                inputClassNames="!p-0"
                error={errors.name && touched.name ? errors.name : ""}
                type="text"
                //  onChange={(e)=>setName((e.target as HTMLInputElement).value)}
                {...getFieldProps("name")}
              />
              <Typography className="font-bold my-4">Supply*</Typography>
              <Input
                inWrpClassName="bg-transparent border border-black p-3"
                inputClassNames="!p-0"
                type="number"
                error={errors.supply && touched.supply ? errors.supply : ""}
                {...getFieldProps("supply")}
              />
              <Typography className="font-bold my-4">Description*</Typography>
              <TextAreaInput
                placeholder="Enter a description"
                rows={5}
                error={
                  errors.description && touched.description
                    ? errors.description
                    : ""
                }
                type="text"
                {...getFieldProps("description")}
              />
              <Typography className="font-bold my-4">External link*</Typography>
              <Input
                placeholder="https://collection.io/item/123"
                inWrpClassName="bg-transparent border border-black p-3"
                inputClassNames="!p-0"
                error={
                  errors.externalLink && touched.externalLink
                    ? errors.externalLink
                    : ""
                }
                type="text"
                {...getFieldProps("externalLink")}
              />

              <Button
                type="submit"
                className="border border-black dark:border-white py-1 px-3 rounded-sm mt-5 text-center"
              >
                Create
              </Button>
            </form>
          </div>

          <div className="w-full flex">
            <div
              className="relative cursor-pointer border rounded-sm border-dashed border-[#12121252] dark:border-white flex items-center gap-2 flex-col justify-center !w-full transition-all ease-in-out duration-300 hover:bg-lightGray hover:border-solid"
              onClick={() =>
                document.getElementById(!file ? "file-upload" : "")?.click()
              }
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                accept=".jpg,.png,.gif,.svg,.mp4"
                style={{ display: "none" }}
                id="file-upload"
                onChange={handleFileChange}
              />

              {!file ? (
                <>
                  <FaUpload />

                  <Typography className="font-medium">
                    Drag and drop media
                  </Typography>
                  <Typography className="text-[#03a5fc]">
                    Browse files
                  </Typography>
                  <Typography className="text-md">Max size:50MB</Typography>
                  <Typography className="text-md">JPG,PNG,GIF,SVG</Typography>
                </>
              ) : (
                file && (
                  <div className="w-full h-full">
                    <GrClose
                      className="absolute right-2 top-2 z-10"
                      onClick={handleClose}
                    />
                    {/* <RiDeleteBin6Line className='absolute right-0 top-0 z-10' /> */}

                    <Image
                      src={file?.preview as string}
                      alt="Preview"
                      height={100}
                      width={100}
                      className="rounded-sm hover:opacity-20 max-h-full h-full w-full"
                    />
                  </div>
                )
              )}

              {errors.file_upload && touched.file_upload && (
                <p className="absolute bottom-[-25px] text-error-800">
                  A File is required
                </p>
              )}
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFTTemplate;
