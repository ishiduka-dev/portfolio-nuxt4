import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    files: ['**/*.{js,ts,vue}'],
    rules: {
      'vue/block-lang': [
        'error',
        {
          script: { lang: 'ts' }
        }
      ],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always'
          }
        }
      ]
    }
  }
])
