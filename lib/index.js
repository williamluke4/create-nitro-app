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
    packages: ['react', 'react-dom', 'next', 'styled-components'],
    devPackages: [
      "autoprefixer",
      "glob",
      "babel-cli",
      "babel-eslint",
      "babel-plugin-module-resolver",
      "babel-plugin-styled-components",
      "babel-plugin-inline-react-svg",
      "babel-preset-flow",
      "eslint",
      "eslint-config-airbnb",
      "eslint-plugin-import",
      "eslint-plugin-jsx-a11y",
      "eslint-plugin-react",
      "postcss-easy-import", "postcss-loader",
      "raw-loader",
      "@types/next",
      "@types/react",
      "@zeit/next-typescript",
      "@zeit/next-css"
    ]
  }).catch(function (err) {
    throw err
  })
  console.log(messages.start(projectName))
  return done;
}
