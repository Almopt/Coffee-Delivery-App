/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-dark': '#C47F17',
        yellow: '#DBAC2C',
        'yellow-ligth': '#F1E9C9',
        'purple-dark': '#4B2995',
        purple: '#8047F8',
        'purple-light': '#EBE5F9',
        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574F4D',
        'base-label': '#8D8686',
        'base-hover': '#D7D5D5',
        'base-button': '#E6E5E5',
        'base-input': '#EDEDED',
        'base-card': '#F3F2F2',
        background: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        // Baloo 2 Titles
        'title-xl': ['48px', { lineHeight: '130%', fontWeight: 800 }], // ExtraBold
        'title-l': ['32px', { lineHeight: '130%', fontWeight: 800 }], // ExtraBold
        'title-m': ['24px', { lineHeight: '130%', fontWeight: 800 }], // ExtraBold
        'title-s': ['20px', { lineHeight: '130%', fontWeight: 700 }], // Bold
        'title-xs': ['18px', { lineHeight: '130%', fontWeight: 700 }], // Bold

        // Roboto Text
        'text-l': ['20px', { lineHeight: '130%' }], // Regular & Bold
        'text-m': ['16px', { lineHeight: '130%' }], // Regular & Bold
        'text-s': ['14px', { lineHeight: '130%' }], // Regular
        'text-xs': ['12px', { lineHeight: '130%' }], // Bold

        // Special Elements
        tag: ['10px', { lineHeight: '130%', fontWeight: 700 }], // Bold
        'button-g': ['14px', { lineHeight: '160%', fontWeight: 700 }], // Bold
        'button-m': ['12px', { lineHeight: '160%', fontWeight: 400 }], // Regular
      },
    },
  },
  plugins: [],
};
