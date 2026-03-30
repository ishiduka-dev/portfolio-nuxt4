import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/block-lang': [
      'error',
      {
        script: { lang: 'ts' }
      }
    ]
  }
})
