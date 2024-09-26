import { Metadata } from "next";
import { Suspense } from "react";

export const metadata : Metadata = {
    title: 'OpenOcean | NFT',
    description: 'Art Collection',
}

export interface ArtLayoutProps {
    children : React.ReactNode
}


const NFTPageLayout : React.FC<ArtLayoutProps> = ({children})=>{
    return <Suspense fallback={<div className="flex items-center justify-center">Loading....
    </div>}>{children}</Suspense>
}

export default NFTPageLayout