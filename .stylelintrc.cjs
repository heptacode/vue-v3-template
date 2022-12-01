module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: ['**/*.js', '**/*.cjs', '.*.cjs'],
  defaultSeverity: 'warning',
};
