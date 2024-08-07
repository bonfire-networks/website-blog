const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./**/*.{njk,md}', './**.{njk,md}'],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Geist', 'sans-serif'],
      //   'mono': ['GeistMono', 'mono']
      // },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'ui-sans-serif', 'system-ui'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia']
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
          ...require("daisyui/src/theming/themes")["light"],
        }
      },
      {
        bonfire: {
          ...require("daisyui/src/theming/themes")["black"],
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
