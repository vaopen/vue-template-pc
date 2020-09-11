exports.sentryConfig = {
  devDependencies: {
    "@sentry/browser": "^5.20.1",
    "@sentry/cli": "^1.55.1",
    "@sentry/integrations": "^5.20.1",
    "@sentry/tracing": "^5.23.0",
    "@sentry/webpack-plugin": "^1.12.1"
  }
}

exports.extendPackage = {
  scripts: {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "stylelint": "stylelint \"**/*.(scss|vue)\"",
    "lint:fix": "stylelint \"**/*.(scss|vue)\" --fix",
    "jslint": "eslint --ext .tsx,.ts,.vue ./src ./utils ./vue.config.js",
    "fix:js": "eslint --ext .tsx,.ts,.vue --fix ./src ./utils ./vue.config.js"
  },
  devDependencies: {
    "css-properties-sorting": "^1.0.10",
    "lint-staged": "^9.5.0",
    "postcss-html": "^0.36.0",
    "stylelint": "^13.4.0",
    "stylelint-config-recommended-scss": "^4.2.0",
    "stylelint-config-standard": "^20.0.0",
    "stylelint-order": "^4.0.0",
    "stylelint-scss": "^3.17.2",
    "stylelint-webpack-plugin": "^2.0.0"
  },
  gitHooks: {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "src/**/*.{ts,tsx,vue}": [
      "npm run jslint",
      "git add"
    ],
    "*.{scss,vue}": [
      "npm run stylelint",
      "git add"
    ]
  }
}

exports.render = {
  './.eslintrc.js': './template/_eslintrc.js',
  './.eslintignore': './template/_eslintignore',
  './.editorconfig': './template/_editorconfig',
  './.editorconfig': './template/_editorconfig',
  './.gitignore': './template/_gitignore',
  './.prettierignore': './template/_prettierignore',
  './.prettierrc.js': './template/_prettierrc.js',
  './.stylelintignore': './template/_stylelintignore',
  './.stylelintrc.js': './template/_stylelintrc.js'
}