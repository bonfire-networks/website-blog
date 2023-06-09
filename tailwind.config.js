const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./**/*.{njk,md}', './**.{njk,md}'],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        bonfire: colors.amber,
      }
    }
  },
  daisyui: {
    darkTheme: "bonfire",
    themes: true,
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#1B74E4",
          "primary-content": "#fff",
          "base-300": "#fff",
          "base-200": "#F7F9F9",
          "base-100": "#F0F2F5"
        },
        bonfire: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#fde047",
          "primary-content": "#112A46",
          "base-content": "#e8e8e8",
          "secondary": "#414558",
          "secondary-content": "#C2CBF5"
        }
      },
    ]
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    // require('tailwindcss-debug-screens')
  ],
}
