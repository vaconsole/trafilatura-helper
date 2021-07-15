const { nanoid } = require('nanoid')
var crypto = require('crypto')

function parentTagger(elementArray) {
  let parentId = '_root'
  let parentRank = 10
  return elementArray.map((element, index) => {
    element.nodeId = crypto
      .createHash('md5')
      .update(`${JSON.stringify(element)}${index}`)
      .digest('hex')
    element.parentId = parentId
    if (element.name === 'head') {
      headingRank = parseInt(element.attributes.rend.slice(1, 2))
      parentId = element.nodeId
      if (headingRank <= parentRank) {
        element.parentId = '_root'
      }
      parentRank = headingRank
    }
    return element
  })
}

module.exports = {
  parentTagger,
}
