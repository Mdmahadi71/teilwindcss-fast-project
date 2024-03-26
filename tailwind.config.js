/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1120px"
      },
      backgroundColor:{
        hbag:'#282828'
      },
      fontFamily:{
        'poppen' :['Poppins' ,'sans-serif'],
      },
      backgroundImage:{
        blog1:"url(./src/assets/blog1.png)",
        blog2:"url(./src/assets/blog2.png)",
        blog3:"url(./src/assets/blog3.png)",
        comp:"url(./src/assets/comp.png)",
        hbgimgss:"url(./src/assets/banner.png)",

      },
    },
  },
  plugins: [],
}