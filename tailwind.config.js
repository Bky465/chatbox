/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xxs: "482px",
      xs: "550px",
      // nav_logo: "550px",
      sm: "640px",
      md: "768px",
      base: "884px",
      md_link: "980px",
      lg: "1080px",
      lg1: "1180px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1650px",
      "4xl": "1850px",
      "5xl": "2140px",
    },
    backgroundImage: {
      chat_bg: `url(/assets/chatbox.png)`,
      chatui_bg: `url(/assets/chatui.png)`,
      message: `url(/assets/message.png)`,
    },


  },
  plugins: [],
}
