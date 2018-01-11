const path = require('path')
const fs = require('fs')
const output = require('./utils/output')
const copyDir = require('./utils/copy-dir')
const install = require('./utils/install')
const loadExample = require('./utils/load-example')
const messages = require('./messages')

module.exports = async function createNitroApp (opts) {
  const projectName = opts.projectName

  if (!projectName) {
    console.log(messages.missingProjectName())
    process.exit(1)
  }

  if (fs.existsSync(projectName) && projectName !== '.') {
    console.log(messages.alreadyExists(projectName))
    process.exit(1)
  }

  const projectPath = opts.projectPath = process.cwd() + '/' + projectName

  if (opts.example) {
    await loadExample({
      projectName: projectName,
      example: opts.example
    })
    installWithMessageFactory(opts)
  } else {
    const templatePath = path.resolve(__dirname, './templates/default')

    await copyDir({
      templatePath: templatePath,
      projectPath: projectPath,
      projectName: projectName
    })
    installWithMessageFactory(opts).catch(function (err) {
      throw err
    })
  }
}

async function installWithMessageFactory (opts) {
  const projectName = opts.projectName
  const projectPath = opts.projectPath
  const done = await install({
    projectName: projectName,
    projectPath: projectPath,
    packages: ['react', 'react-dom', 'next', 'material-ui', 'styled-components'],
    devPackages: [
      "autoprefixer",
      "glob",
      "babel-cli",
      "babel-eslint",
      "babel-plugin-module-resolver",
      "babel-plugin-styled-components",
      "babel-plugin-wrap-in-js",
      "babel-plugin-inline-react-svg",
      "babel-plugin-transform-flow-strip-types",
      "babel-plugin-transform-replace-object-assign",
      "babel-preset-flow",
      "eslint",
      "eslint-config-airbnb",
      "eslint-config-airbnb-flow",
      "eslint-plugin-flowtype",
      "eslint-plugin-import",
      "eslint-plugin-jsx-a11y",
      "eslint-plugin-react",
      "flow-bin",
      "postcss-easy-import", "postcss-loader",
      "raw-loader"
    ]
  }).catch(function (err) {
    throw err
  })
  console.log(messages.start(projectName))
  return done;
}
