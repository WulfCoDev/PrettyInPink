module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Lobster',
      secondary: 'Pacifico',
      tertiary: 'Quicksand',
      other: 'Poppins',
      fourth: 'Blue-Style',
      fifth: 'Reglisse',
      sixth: 'Reglisse_Back',
      seventh: 'Reglisse_Fill',
      eighth: 'Retrolight',
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
      boxShadow: {
        neonpink: '0 0 10px rgba(255, 105, 180, 0.7)',
      },
      backgroundImage: {

        site: "url('../src/assets/bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",

      },
    },
  },
  plugins: [],
};