module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Lobster',
      secondary: 'Pacifico',
      tertiary: 'Pixelify Sans',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {

        site: "url('../src/assets/pink.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",

      },
    },
  },
  plugins: [],
};