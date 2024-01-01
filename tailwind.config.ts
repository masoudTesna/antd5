import type { Config } from 'tailwindcss';

const config: Config = {
  corePlugins: {
    preflight: false
  },
  content: [ './src/**/*.{js,jsx,ts,tsx}' ],
  theme: {},
  plugins: []
};

export default config;
