import { StaticImageData } from "next/image"

export  interface SingleFormValues {
    name: string,
    description: string,
    externalLink: string,
    supply: number,
    file_upload: File | StaticImageData | string
}


export type CustomFile = File & { preview: string; uploaderName?: string }
