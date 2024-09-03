import { StaticImageData } from "next/image"

export  interface SingleFormValues {
    name: string,
    description: string,
    externalLink: string,
    price: string,
    file_upload: File | StaticImageData | string
}


export type CustomFile = File & { preview: string; uploaderName?: string }


export interface postDataType  {
    name: string,
    minting: string,
    price: string | number,
    imgUrl: string ,
    description: string,
    link: string,
  };
