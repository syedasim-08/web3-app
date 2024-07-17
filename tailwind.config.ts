/* eslint-disable sort-keys */
/**
 * Dont add if size is smaller than 10px.
 * Dont use `em` or `rem`. Use correct `px` instead.
 */
const sizes = {
  26: '26px',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js,jsx,ts,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    screens: {
      xs: '321px',
      sm: '390px',
      smd: '480px',
      md: '650px',
      lmd: '768px',
      slg: '980px',
      lg: '1024px',
      xlg: '1200px',
      xl: '1300px',
      xxl: '1400px',
      mslg: { max: '1023px' },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      light: '#595959',
      yellow: '#ECAD09',
      customColor: 'rgba(196, 51, 255, 0.20)',
      gray: '#CCCCCC',
    },
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      piazzolla: ['var(--font-piazzolla)'],
    },
    fontSize: {
      'h1': '64px',
      'h2': '48px',
      'h3': '38px',
      'h4': '28px',
      'title': '32px',
      'subtitle': '24px',
      'paragraph': '18px',
      'body': '16px',
      'xs': '10px',
      'heading': '24px',
      'small': '16px',
      'sm': '12px',
      'md': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '30px',
      'xxl': '32px',
      '4xl': '36px',
      '5xl': '48px',
    },
    lineHeight: {
      h1: '90%',
      h2: '90%',
      h3: '90%',
      h4: '90%',
      h5: '80%',
      title: '125%',
      subtitle: '120%',
      paragraph: '148%',
      body: '140%',
      caption: '120%',
      small: '100%',
      smd: '110%',
      sm: '150%',
      md: '150%',
      lg: '150%',
      xlg: '160%',
    },
    letterSpacing: {
      h1: '-0.8px',
      h2: '-0.5px',
      h3: '-0.5px',
      h4: '-0.5px',
      title: '0.32px',
      subtitle: '-0.2px',
      paragraph: '0.18px',
      body: '-0.2px',
      caption: '0.24px',
      small: '0px',
      sm: '0px',
      md: '0px',
      lg: '0px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        // mainThemeLight : "rgba(197, 222, 22, 0.1)",
        mainThemeLight : "rgba(228, 245, 100, 0.2)",
        
        neutral: {
          100: '#141414',
          200: '#1A1A1A',
          300: '#333333',
          400: '#595959',
          500: '#666666',
          600: '#E2E2E1',
          700: '#F6F6F6',
          800: '#808080',
          900: '#707070',
          1000: '#E6E6E6',
        },
        brand: {
          800: '#EAFB06',
          500: '#F8FF99',
        },
        secondary: {
          800: '#0809EC',
          700: '#041624',
          500: '#8A8BFF',
          600: '#FFFCF6',
        },
        warning: {
          800: '#EBA013',
          500: '#FFCF76',
        },
        error: {
          800: '#F35858',
          500: '#FF9292',
        },
        orange: {
          500: '#FF2EAB',
        },
        pink: {
          400: '#9B00FF',
          500: '#C433FF',
          600: '#D368FF',
          700: '#BA5AF9',
          900: '#F1E3FF',
        },
        gray: {
          100: '#f9f2ff00',
          200: '#f9f2ff',
          300: '#232323',
          400: '#cccccc',
          500: '#B3B3B3',
        },
        green: {
          400: '#48BB78',
          500: '#38A169',
          600: '#2F855A',
          700: '#276749',
          800: '#12B52C',
          900: '#1C4532',
        },
      },
      width: sizes,
      height: sizes,
      minWidth: sizes,
      minHeight: sizes,
      maxWidth: sizes,
      maxHeight: sizes,
      spacing: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
        '64': '64px',
        '110': '110px',
        '133': '133px',
      },
      borderRadius: {
        'xs': '8px',
        'sm': '16px',
        'smd': '18px',
        'md': '24px',
        'lg': '32px',
        'xl': '40px',
        '2xl': '48px',
        '6xl': '80px',
        '20': '20px',
        'full': '100px',
      },
      backgroundColor: {
        light: '#f6f6f6',
        dark: '#292929',
        yellow: '#ECAD09',
        naviBlue: '#041624',
        disable: '#DDDDDD',
        modalOpverlay: 'rgba(0, 0, 0, 0.70)',
        lightGray: 'rgba(18, 18, 18, 0.08)'
      },
    
      backgroundImage: () => ({
        defaultGradient: 'linear-gradient(180deg, #C433FF 18.71%, #9B00FF 80%)',
      }),
      dropShadow: {
        'card': ' 0px 4px 48px 0px rgba(0, 0, 0, 0.48)',
        'card-dark':
          'box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.06), 0px 4px 14px 0px rgba(255, 255, 255, 0.08) inset, 0px -4px 44px 0px rgba(255, 255, 255, 0.08) inset',
      },
      boxShadow: {
        'box-lg': '0px 4px 16px rgba(0, 0, 0, 0.08)',
        'box-xl': '0px 6px 24px rgba(0, 0, 0, 0.12)'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        'fade-in-left': 'fadeLeft 400ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-right': 'fadeRight 400ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-up': 'fadeUp 400ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-down': 'fadeDown 400ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'flashing': 'flashing 2.5s ease-in-out infinite',
        'blink': 'blink 3s infinite',
      },
      boxShadow: {
        'card-shadow': `0px 4px 48px 0px rgba(0, 0, 0, 0.08)`,
        'hover-shadow': 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
        'xl': 'inset 0 -.5px 0 0 #d7d7d7',

      },
    },

    backgroundPosition: {
      leftCenter: 'left 24px center',
    },
  },
  plugins: [],
}
