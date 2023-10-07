/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0C1D72",
          "secondary": "#d926a9",
          "accent": "#1fb2a6",
          "neutral": "#2a323c",
          "base-100": "#FFFFFF",
          "info": "#3abff8",
          "success": "#00C3CB",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}

