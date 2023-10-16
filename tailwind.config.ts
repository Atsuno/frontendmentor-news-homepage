import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        'primary-one': 'hsl(35, 77%, 62%)',
        'primary-two': 'hsl(5, 85%, 63%)',
        'neutral-one': 'hsl(36, 100%, 99%)',
        'neutral-two': 'hsl(233, 8%, 79%)',
        'neutral-three': 'hsl(236, 13%, 42%)',
        'neutral-four': 'hsl(240, 100%, 5%)',
        specific: '#F0F0F0',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {},
    }],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
