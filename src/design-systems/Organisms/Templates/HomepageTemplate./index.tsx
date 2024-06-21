"use client"

import Typography from '@/design-systems/Atoms/Typography'
import React from 'react'

const HomepageTemplate = ()=>{
    return (
        <main>
            <div>
                <div 
                className='video-back relative d-flex items-center justify-center'
                >
                <div className="banner_video_wrap">
            <video autoPlay className="banner_video hidden md:block" id="myVid1241eo" loop muted>
              <source src={'videos/animation4.mp4'} type="video/mp4" />
            </video>

            <div className="video_gradient from-18%  to-76%  bg-gradient-to-b  from-gray-100 via-[#c8d18a]  to-[#c8d18a] dark:via-neutral-100 dark:to-neutral-100"></div>
          </div>
<div className='container relative z-[3] !h-screen flex items-center'>
       <div className='text-xl font-bold text-xxl'>
                    <Typography><span className="text-[#657a05] !text-[40px] font-extrabold">Explore </span>
                        
                        
                    NFTs from creators worldwide   
                        
                        </Typography>
                </div>
                </div>
             



                </div>
            </div>

        </main>
    )
}

export default HomepageTemplate