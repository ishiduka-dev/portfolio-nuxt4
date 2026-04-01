import withNuxt from './.nuxt/eslint.config.mjs'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default withNuxt({
  files: ['**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser
    }
  },
  rules: {
    'vue/block-lang': [
      'error',
      {
        script: { lang: 'ts' }
      }
    ]
  }
})
