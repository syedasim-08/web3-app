'use client'
import React, { useState,useEffect } from 'react'
import { createWeb3Modal, useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect, useSignMessage } from 'wagmi'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { config } from '@/context/wagmiContext/config'

import { SearchIcon } from "@/design-systems/Atoms/Icons";
import Input from "@/design-systems/Atoms/Input";
import Typography from "@/design-systems/Atoms/Typography";
import SunIcon from '@/assets/images/sunIcon.png'
import { MoonIcon } from "@/design-systems/Atoms/Icons";
import Button from "@/design-systems/Atoms/Button";
import { ThemeMode } from './interface'
import { SwitchChainDropDown } from '@/design-systems/Atoms/SwitchChainDropdown';

const Header:React.FC = ()=>{
  const [userAdress, setUserAddress ] = useState<string>("")
  const [chainDropdown, setChainDropdown] = useState<boolean>(false)
  const [isSignedData, setIsSignedData] = useState<boolean>(true)

  const projectId = "8e5776c8f369b3a8490d1677bdc34773"
  const { setTheme, theme } = useTheme()
  const { isConnecting, address, chainId } = useAccount()
  const router = useRouter()

  const mobileSpecificWalletId = 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'
  const otherWalletIds = [
    'e7c4d26541a7fd84dbdfa9922d3ad21e936e13a7a0e44385d44f006139e44d3b',
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
  ]
   // Modify the wallet IDs based on device type
   const includeWalletIds = true ? [...otherWalletIds, mobileSpecificWalletId] : otherWalletIds
   // createWeb3Modal modal
   createWeb3Modal({
     themeMode: theme as ThemeMode,
     themeVariables: {
       '--w3m-font-family': 'Poppins, sans-serif',
       '--w3m-font-size-master': '11px',
     },
     wagmiConfig: config,
     allWallets: 'HIDE',
     projectId,
     enableAnalytics: true,
     includeWalletIds: includeWalletIds,
   })
 

  const { open } = useWeb3Modal()

  console.log("open",open)

  const handleWallet = ()=>{
    open()
  }

  useEffect(() => {
    if (address) {
 
      setUserAddress(`${address.slice(0, 4)}...${address.slice(-4)}`);

    }
  }, [address])


  const handleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }
  const handleChainDropdown = (value: boolean) => {
    setChainDropdown(value)
  }

    return (
<header 
// className='shadow-xl bg-mainThemeLight sticky top-0 z-[999]'
className = "shadow-xl sticky top-0 z-[999] from-18%  to-76%  bg-gradient-to-b  from-gray-100 via-[#c8d18a]  to-[#c8d18a] dark:via-neutral-100 dark:to-neutral-100"


>
    <div className="container">
      <div className="flex py-5 gap-4 items-center justify-between">

      <Typography className="text-xl font-bold cursor-pointer" onClick={()=>router.push("/")}>OpenOcean</Typography>
    <div className="flex w-[30%] flex-row items-center p-3 justify-center gap-2 border-black dark:border-white border rounded-smd">
                <SearchIcon className="!h-[16px] !w-[16px] smd:!h-[24px] smd:!w-[24px]" />
                <Input
                  inWrpClassName="bg-transparent border-0 p-0  "
                  inputClassNames="!p-0"
                  placeholder="Search"
                  type="text"
               
                />
              </div>

              <div className="flex gap-9 pl-3 items-center">

              <Typography className="text-lg pl-2 cursor-pointer" onClick={()=>router.push('/art')}>Art</Typography>
              <Typography className="text-lg cursor-pointer" onClick={()=>router.push('/create')}>Create</Typography>
              <Typography className="text-lg cursor-pointer">Membership</Typography>


              {/* <Image src={SunIcon} alt="icon" /> */}
              {/* <MoonIcon className="cursor-pointer" onClick={handleTheme} /> */}

              <div
                    // className=" hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-800  dark:bg-neutral-400 xxl:flex"
                    onClick={handleTheme}
                  >
                    {theme === 'dark' ? <Image alt="icon" src={SunIcon} className='h-6 w-6' /> : <MoonIcon />}
                     {/* <MoonIcon /> */}

                  </div>

              {/* <EthereumIcon className="cursor-pointer"  /> */}
              <SwitchChainDropDown
                  isChainDropdownOpen={chainDropdown}
                  isSignedData={isSignedData}
                  setIsChainDropdownOpen={handleChainDropdown}
                  // signInWithEthereum={signInWithEthereum}
                />
              {address ?  <Button  onClick={handleWallet} className="border border-black  dark:!border-white rounded-[16px] py-2 px-4">
                
                
                {userAdress}</Button>
                :

                <Button  onClick={handleWallet} className="border border-black dark:!border-white rounded-[16px] py-2 px-4">
                
                
                Connect</Button>
                }
           
              </div>

             

      </div>
 
    </div>
  
</header>
    )
}


export default Header;