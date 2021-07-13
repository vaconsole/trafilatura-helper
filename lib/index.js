const { nanoid } = require('nanoid')

function parentTagger(elementArray) {
  let parentId = null
  let parentRank = 10
  return elementArray.map((element) => {
    element.nodeId = nanoid(3)
    element.parentId = parentId
    if (element.name === 'head') {
      headingRank = parseInt(element.attributes.rend.slice(1, 2))
      parentId = element.nodeId
      if (headingRank <= parentRank) {
        element.parentId = element.nodeId
        parentId = element.nodeId
        parentRank = headingRank
      }
    }
    return element
  })
}

module.exports = {
  parentTagger,
}
