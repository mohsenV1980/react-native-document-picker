const path = require('path')
// const { androidManifestPath } = require('react-native-test-app')

const project = (() => {
  
    return undefined
  
})()

module.exports = {
  dependencies: {
    // Help rn-cli find and autolink this library
    'react-native-document-picker': {
      root: __dirname,
    },
  },
  ...(project ? { project } : undefined),
}
