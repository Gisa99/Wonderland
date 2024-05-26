/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient':  'linear-gradient(to right, #F29441, #BF3B91, #674D8C)',
        'gradient2':  'linear-gradient(to bottom, #FFE0B2, #E57373, #9575CD)',
      },
      colors: {
        fundo: '#EFDAFF',
        laranja: '#F2913D',
        roxoIntenso: '#351C59',
        lilas: '#674D8C',
        roxo: '#BF3B91',
        transparent: '#4713726e;',
        roxoEscuro: '#281740',
        
        dark: {
          roxoEscuro: '#281740',
        }
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
     
      },
    },
  },
  plugins: [],
}
