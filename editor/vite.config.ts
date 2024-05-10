import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from 'unocss/vite'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  plugins: [
    vue(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    process.env.NODE_ENV !== 'production' && VueDevTools(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores', 'src/utils'],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [
        ElementPlusResolver(),
      ],
      dts: 'src/components.d.ts',
      dirs: ['src/components'],
      deep: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],
})
