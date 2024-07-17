import { Metadata } from "next";
import { Suspense } from "react";

export const metadata : Metadata = {
    title: 'OpenOcean | Art',
    description: 'Art Collection',
}

export interface ArtLayoutProps {
    children : React.ReactNode
}


const ArtLayout : React.FC<ArtLayoutProps> = ({children})=>{
    return <Suspense fallback="loading..">{children}</Suspense>
}

export default ArtLayout