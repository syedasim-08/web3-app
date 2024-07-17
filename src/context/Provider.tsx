'use client'

import { WagmiProvider, cookieToInitialState } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { config } from './wagmiContext/config'


export default function Providers({ children, cookie }: { children: ReactNode; cookie: string | null }) {
  const initialState = cookieToInitialState(config)
  const queryClient = new QueryClient()

  return (
    <ThemeProvider attribute="class" defaultTheme="light" storageKey="solav-theme">
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
         
           
              {children}
           
        
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  )
}
