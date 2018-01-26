console.log(`Copying all the contents of /build to package root.`)

const fse = require('fs-extra')
const path = require('path')


let inputDir = path.resolve(__dirname, '..', 'build')
let outputDir = path.resolve(__dirname, '..')
fse.copy(inputDir, outputDir)
