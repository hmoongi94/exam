import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        mainColor:'#E8E8E8'
      },
      width:{
        151:"151px",
        500:'500px'
      },
      height: {
        81:"81px",
        121:"121px",
        238:'238px',
        500:"500px",
        638:"638px"
      },
    },
  },
  plugins: [],
}
export default config
