import React from "react"
import { IconProps } from "./interface"

export const MoonIcon: React.FC<IconProps> = ({ width = '24', height = '24' }) => {
    return (
      <svg fill="none" height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          d="M11.535 3.51901C11.6097 3.35499 11.6387 3.17384 11.6189 2.99471C11.5991 2.81558 11.5312 2.64512 11.4225 2.50137C11.3138 2.35763 11.1683 2.24593 11.0013 2.17809C10.8344 2.11026 10.6522 2.08881 10.474 2.11601C5.675 2.85201 2 6.99601 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C21.9999 11.9067 21.9986 11.8133 21.996 11.72C21.991 11.5397 21.9373 11.3641 21.8407 11.2118C21.7441 11.0596 21.608 10.9363 21.447 10.855C21.286 10.7737 21.106 10.7375 20.9261 10.7502C20.7462 10.7628 20.573 10.824 20.425 10.927C19.3461 11.6784 18.0503 12.0546 16.7367 11.9978C15.4232 11.9409 14.1647 11.4543 13.1547 10.6125C12.1447 9.77079 11.4392 8.62062 11.1466 7.33885C10.8539 6.05708 10.9904 4.71466 11.535 3.51801"
          fill="black"
          fillRule="evenodd"
        />
      </svg>
    )
  }


  export const SearchIcon: React.FC<IconProps> = ({ className }) => {
    return (
      <svg
        className={`stroke-[#3B3B3B] dark:stroke-white ${className} `}
        fill="none"
        height="18"
        viewBox="0 0 18 18"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.92 13.92L17 17M16.111 8.581C16.111 12.768 12.728 16.162 8.556 16.162C4.383 16.162 1 12.768 1 8.582C1 4.393 4.383 1 8.555 1C12.728 1 16.111 4.394 16.111 8.581Z"
          id="Vector"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    )
  }

  export const PolygonIcon: React.FC<IconProps> = ({ width = '32', height = '32', className }) => {
    return (
      <svg
        className={`fill-[#3B3B3B] dark:fill-white ${className} `}
        fill="none"
        height={height && 32}
        viewBox="0 0 32 32"
        width={width && 32}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="matic (2) 1">
          <path
            d="M21.3806 11.395L10.6306 17.6075C10.4327 17.7206 10.2086 17.7801 9.98063 17.7801C9.75263 17.7801 9.52858 17.7206 9.33063 17.6075L5.88813 15.625C5.69295 15.5094 5.53142 15.3447 5.41958 15.1474C5.30774 14.95 5.2495 14.7268 5.25063 14.5V10.535C5.25077 10.3069 5.31091 10.0829 5.425 9.88546C5.53909 9.68799 5.70312 9.52401 5.90063 9.40999L9.33313 7.42749C9.53108 7.31436 9.75513 7.25485 9.98313 7.25485C10.2111 7.25485 10.4352 7.31436 10.6331 7.42749L14.0656 9.40999C14.2631 9.52401 14.4272 9.68799 14.5413 9.88546C14.6553 10.0829 14.7155 10.3069 14.7156 10.535V12.4375C14.7157 12.4943 14.7306 12.55 14.759 12.5992C14.7873 12.6484 14.828 12.6894 14.877 12.7179C14.9261 12.7465 14.9818 12.7617 15.0386 12.7621C15.0953 12.7625 15.1512 12.7479 15.2006 12.72L16.9881 11.6875C17.0866 11.6304 17.1682 11.5483 17.2249 11.4495C17.2815 11.3508 17.3111 11.2388 17.3106 11.125V9.03499C17.3105 8.80722 17.2506 8.58348 17.137 8.38608C17.0234 8.18868 16.86 8.02452 16.6631 7.90999L10.6206 4.42999C10.4231 4.31564 10.1989 4.25543 9.97063 4.25543C9.74238 4.25543 9.51817 4.31564 9.32063 4.42999L3.29062 7.90999C3.09312 8.02401 2.92909 8.18799 2.815 8.38546C2.70091 8.58292 2.64077 8.80693 2.64062 9.03499V16C2.64077 16.228 2.70091 16.452 2.815 16.6495C2.92909 16.847 3.09312 17.011 3.29062 17.125L9.32063 20.605C9.51817 20.7193 9.74238 20.7795 9.97063 20.7795C10.1989 20.7795 10.4231 20.7193 10.6206 20.605L21.3706 14.3925C21.5686 14.2794 21.7926 14.2199 22.0206 14.2199C22.2486 14.2199 22.4727 14.2794 22.6706 14.3925L26.1031 16.375C26.3006 16.489 26.4647 16.653 26.5788 16.8505C26.6928 17.0479 26.753 17.2719 26.7531 17.5V21.465C26.753 21.693 26.6928 21.917 26.5788 22.1145C26.4647 22.312 26.3006 22.476 26.1031 22.59L22.6806 24.5725C22.4827 24.6856 22.2586 24.7451 22.0306 24.7451C21.8026 24.7451 21.5786 24.6856 21.3806 24.5725L17.9481 22.59C17.7506 22.476 17.5866 22.312 17.4725 22.1145C17.3584 21.917 17.2983 21.693 17.2981 21.465V19.56C17.2984 19.5031 17.2836 19.4472 17.2553 19.3979C17.227 19.3486 17.1861 19.3077 17.1369 19.2793C17.0876 19.2508 17.0318 19.2359 16.9749 19.2361C16.918 19.2362 16.8622 19.2513 16.8131 19.28L15.0256 20.31C14.9273 20.3673 14.8458 20.4494 14.7892 20.5482C14.7326 20.6469 14.7029 20.7587 14.7031 20.8725V22.965C14.7033 23.1927 14.7631 23.4165 14.8768 23.6139C14.9904 23.8113 15.1538 23.9755 15.3506 24.09L21.3806 27.57C21.5782 27.6843 21.8024 27.7445 22.0306 27.7445C22.2589 27.7445 22.4831 27.6843 22.6806 27.57L28.7106 24.09C28.9081 23.976 29.0722 23.812 29.1863 23.6145C29.3003 23.417 29.3605 23.193 29.3606 22.965V16C29.3605 15.7719 29.3003 15.5479 29.1863 15.3505C29.0722 15.153 28.9081 14.989 28.7106 14.875L22.6806 11.395C22.4831 11.2806 22.2589 11.2204 22.0306 11.2204C21.8024 11.2204 21.5782 11.2806 21.3806 11.395Z"
            id="Vector"
          />
        </g>
      </svg>
    )
  }
  

  export const EthereumIcon: React.FC<IconProps> = ({ width = '24', height = '24', className }) => {
    return (
      <svg
        className={`fill-[#3B3B3B] dark:fill-white ${className} `}
        height={height && 24}
        viewBox="0 0 24 24"
        width={width && 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_93_3419)">
          <path d="M18.2573 16.0317L12.3378 23.8324C12.1683 24.0559 11.8315 24.0557 11.6621 23.8324L5.74262 16.0317C5.60472 15.8503 5.8105 15.609 6.01098 15.7161L11.8005 18.8007C11.9236 18.8665 12.0716 18.867 12.1951 18.8029L17.9889 15.7161C18.1894 15.609 18.3952 15.8503 18.2573 16.0317Z" />
          <path d="M18.2573 16.0317C18.2573 16.0317 12.3362 23.8346 12.3353 23.8357C12.2268 23.9759 12 23.8911 12 23.7139V19.0207C12 18.9506 12.0387 18.8862 12.1005 18.8533L17.989 15.7161C18.1894 15.609 18.3952 15.8503 18.2573 16.0317Z" />
          <path d="M18.5809 10.2119L12.1973 13.5665C12.0756 13.6315 11.9246 13.6316 11.8027 13.5665L5.41914 10.2119C5.19532 10.0942 5.12372 9.80776 5.26533 9.59826L11.6489 0.18627C11.8162 -0.0615202 12.1825 -0.0621567 12.3506 0.18574L18.7347 9.59826C18.8763 9.80776 18.8047 10.0942 18.5809 10.2119Z" />
          <path d="M18.5809 10.2119C18.5809 10.2119 12.1961 13.5671 12.1954 13.5675C12.1066 13.6143 12 13.5449 12 13.4445V0.170237C12 0.0711637 12.1042 0.00104843 12.1925 0.0458119C12.2536 0.0767856 12.3083 0.123405 12.3505 0.185724L18.7346 9.59825C18.8763 9.80775 18.8047 10.0941 18.5809 10.2119Z" />
          <path d="M11.8026 16.6979L4.8017 13.0187C4.59427 12.9097 4.5145 12.6532 4.62349 12.4458C4.73259 12.2383 4.98913 12.1586 5.19651 12.2676L12 15.843L18.8035 12.2675C19.0109 12.1584 19.2675 12.2383 19.3765 12.4457C19.4855 12.6532 19.4058 12.9097 19.1983 13.0187L12.1974 16.6979C12.0738 16.7629 11.9262 16.7629 11.8026 16.6979Z" />
          <path d="M12.1782 0.039368C12.0933 0.00860639 12 0.076388 12 0.170264V7.23737C12 7.49439 11.8827 7.73645 11.6834 7.8988C10.3695 8.96957 8.7532 9.3045 7.08979 9.10657C6.4605 9.03168 6.13735 8.3126 6.49302 7.78811L11.6488 0.186281C11.771 0.00531809 12.0013 -0.0441127 12.1782 0.039368Z" />
          <path d="M11.2062 18.8907C10.9249 19.6813 10.282 20.2955 9.43247 20.4912C9.27235 20.5281 9.10576 20.4635 9.00642 20.3327L5.74262 16.0317C5.60472 15.8503 5.8105 15.609 6.01098 15.7161L11.0045 18.377C11.189 18.4753 11.2763 18.6939 11.2062 18.8907Z" />
        </g>
        <defs>
          <clipPath id="clip0_93_3419">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  export const CircleIcon: React.FC<IconProps> = ({ className, width = '25', height = '24' }) => {
    return (
      <svg
        className={className}
        fill="none"
        height={height}
        viewBox="0 0 25 24"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_444_9427)">
          <path
            d="M12 24C5.388 24 0 18.612 0 12C0 9.756 0.624 7.572 1.8 5.676C2.148 5.112 2.892 4.944 3.456 5.292C4.02 5.64 4.188 6.38399 3.84 6.94799C2.904 8.45999 2.4 10.212 2.4 12C2.4 17.292 6.708 21.6 12 21.6C17.292 21.6 21.6 17.292 21.6 12C21.6 6.708 17.292 2.4 12 2.4C11.34 2.4 10.8 1.86 10.8 1.2C10.8 0.54 11.34 0 12 0C18.612 0 24 5.388 24 12C24 18.612 18.612 24 12 24Z"
            fill="url(#paint0_linear_444_9427)"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_444_9427"
            x1="12"
            x2="12"
            y1="4.49032"
            y2="19.2"
          >
            <stop stopColor="#C433FF" />
            <stop offset="1" stopColor="#9B00FF" />
          </linearGradient>
          <clipPath id="clip0_444_9427">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    )
  }