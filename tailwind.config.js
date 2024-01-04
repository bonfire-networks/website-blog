const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./**/*.{njk,md}', './**.{njk,md}'],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Geist', 'sans-serif'],
        'mono': ['GeistMono', 'mono']
      },
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
          ...require("daisyui/src/theming/themes")["nord"],
          "primary": "#fde047"
        }
      },
      {
        bonfire: {
          ...require("daisyui/src/theming/themes")["dracula"],
          "primary": "#fde047"
        }
      },
      "cupcake", "dark", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"
    ]
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    // require('tailwindcss-debug-screens')
  ],
}
