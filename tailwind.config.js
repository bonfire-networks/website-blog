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
          "primary": "#fde047", 
          "secondary": "#fb923c",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#1E293B",
          "base-300": "#0F172A",
          "base-content": "#E2E8F0",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#f15b5b",
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
