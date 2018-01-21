const fse = require('fs-extra')
const path = require('path')

const babel = require('babel-core')


const packageDir = path.resolve(__dirname, '..')
const libDir = path.resolve(packageDir, 'lib')
const srcDir = path.resolve(packageDir, 'src')
const libCommonJsDir = path.resolve(libDir, 'commonjs')
let filenames

function makeOutputFileCallback(outputFilename) {
  return function (err, result) {
    if (err) {
      console.error(err)
    }
    fse.outputFileSync(outputFilename, result.code, { encoding: 'utf8' })
  }
}

filenames = ['get.js', 'index.js']
filenames.forEach((filename) => {
  let inputFilename = path.resolve(srcDir, filename)
  let callback = makeOutputFileCallback(path.resolve(libCommonJsDir, filename))
  babel.transformFile(inputFilename, callback)
})
