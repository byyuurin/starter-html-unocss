// @ts-check
import { defineConfig, presetIcons, presetWind } from 'unocss'

export default defineConfig({
  cli: {
    entry: {
      patterns: ['src/**/*.html'],
      outFile: 'src/styles/uno.css',
    },
  },
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],
  shortcuts: [],
})
