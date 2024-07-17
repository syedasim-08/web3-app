"use client"

import React from 'react'
import Card from '@/design-systems/Organisms/Card'

const ArtPageTemplate = ()=>{
    return (
        <main className='container bg-[#f7f7f7] dark:bg-black'>
<div className='grid grid-cols-5 pt-16 gap-y-6 gap-4'>
            {
                Array.from({length: 100}).map((_,index)=>{
                    return (
                        <Card />
                    )
                })

            }
            
            </div>
        </main>
    )
}

export default ArtPageTemplate