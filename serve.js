import { build } from '@unocss/cli'
import live from 'live-server'
import config from './unocss.config.js'

function run() {
  live.start({
    root: 'src',
  })

  build({
    ...config.cli.entry,
    watch: true,
  })
}

run()
