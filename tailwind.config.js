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
    themes: [
      {
        bonfire: {
          ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
          "primary": "#fde047"
        },
      },
    ]
  },

  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    // require('tailwindcss-debug-screens')
  ],
}
