const execa = require('execa')
const Promise = require('promise')
const messages = require('../messages')
const getInstallCmd = require('./get-install-cmd')
const output = require('./output')

const installCmd = getInstallCmd()

module.exports = async function install (opts) {
  const projectName = opts.projectName
  const projectPath = opts.projectPath
  const packages = opts.packages || []
  const devPackages = opts.devPackages || []

  if (packages.length === 0) {
    console.log('Missing packages in `install`, try running again.')
    process.exit(1)
  }

  const installArgs = getInstallArgs(installCmd, packages)
  const installDevArgs = getInstallArgs(installCmd, devPackages)
  
  process.chdir(projectPath)  
  
  await installDependencies(projectName, packages, installArgs)
  await installDependencies(projectName, devPackages, installDevArgs, true)

  return null

}
async function installDependencies(projectName, packages, installArgs, dev = false){
  console.log(messages.installing(packages, true))
  const stopInstallSpinner = output.wait(`Installing ${dev ? 'dev': 'npm'} modules`)
  try{
    //Install Dev Packages
    await execa(installCmd, installArgs)

    output.success(`Installed ${dev ? 'dev': ''} dependencies for ${projectName}`)
    stopInstallSpinner()
  } catch (err) {
      stopInstallSpinner()
      console.log(messages.installError(packages))
      console.log(err)
      return new Error(`${installCmd} installation failed`)
  }
  return null
}

function getInstallArgs (cmd, packages, dev = false) {
  if (cmd === 'npm') {
    const args = dev ? ['install', '--save-dev'] : ['install', '--save', '--save-exact'] 

    return args.concat(packages, ['--verbose'])
  } else if (cmd === 'yarn') {
    const args = dev ? ['add','--dev'] : ['add']
    return args.concat(packages)
  }
}
