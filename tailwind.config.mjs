/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}','./src/pages/**/*.{astro,ts}',"./public/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        customGray: '#c9d1d9',
        bluecleare: '#79c0ff',
        BlueText: '#58a6ff',
        selectBtn: '#1e4273 ',
        bgPrimary: '#0d1117',
        OrageText: '#ec8e2c',
        PurpleText: '#bc8cff',
        hoverBtn: '#141a24',
      },
      screens: {
        '450mp':'450px',
        '510mp':'510px',
        'sm':'650px',
        'md':'780px',
        '12mp':'1200px',
        '1050':'1050px',
        'xl': '1270px',
      },
    },
  },
  plugins: [

  ],
  corePlugins: {},
  safelist:[
    'dark:bg-bgPrimary',
    'dark:text-bluecleare',
    'visited:bg-selectBtn',
    'active',
    'text-red-500',
  ]
};
