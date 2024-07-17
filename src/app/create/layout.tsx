import { Metadata } from "next";
import { Suspense } from "react";

export const metadata : Metadata = {
    title : 'OpenOcean | Create',
    description : 'Create NFT'
}

export interface CreateNFTLayoutProps  {
 children : React.ReactNode
}


const CreateNFTLayout: React.FC<CreateNFTLayoutProps> = ({children})=>{
    return <Suspense fallback="loading...">{children}</Suspense>
}

export default CreateNFTLayout