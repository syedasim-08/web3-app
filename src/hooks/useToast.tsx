import React from 'react'
import { toast , Id} from 'react-toastify'
import { CircleCheckIcon, WarningIcon } from '@/design-systems/Atoms/Icons'


export function useToast() {
    const loadingToast = (text:string)=>{
        return toast.loading(text,{
            className: 'text-neutral-100 bg-neutral-700 ',
        })
    }

    const updateToast = (text:string, type: 'success' | 'warning',toastId:Id) =>{
        toast.update(toastId, {
            render: text,
            type: type,
            isLoading: false,
            autoClose: 2000,
            className: 'text-neutral-100 bg-neutral-700 ',
            progressClassName: '!bg-brand-800 !border-brand-800',
            icon: type === 'success' ? <CircleCheckIcon /> : <WarningIcon />,
          })
    }

    const warningToast = (text: string) => {
        console.log("tex", text)
        toast.warn(text, {
          autoClose: 2000,
          className: 'text-black bg-white ',
          progressClassName: '!bg-brand-800 !border-brand-800',
          icon: <WarningIcon />,
        })
      }
    
      const successToast = (text: string) => {
        toast.success(text, {
          autoClose: 2000,
          className: 'text-neutral-100 bg-neutral-700 ',
          progressClassName: '!bg-brand-800 !border-brand-800',
          icon: <CircleCheckIcon />,
        })
      }

      return { loadingToast, updateToast, warningToast, successToast }

}