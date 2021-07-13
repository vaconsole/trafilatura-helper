const helper = require('../lib/index')

// test('basic', () => {
//   const input = [
//     {
//       name: 'p',
//     },
//     {
//       name: 'head',
//       attributes: {
//         rend: 'h2',
//       },
//     },
//     {
//       name: 'p',
//     },
//     {
//       name: 'head',
//       attributes: {
//         rend: 'h1',
//       },
//     },
//     {
//       name: 'p',
//     },
//     {
//       name: 'head',
//       attributes: {
//         rend: 'h3',
//       },
//     },
//     {
//       name: 'p',
//     },
//     {
//       name: 'head',
//       attributes: {
//         rend: 'h1',
//       },
//     },
//   ]
//   const result = helper.parentTagger(input)
//   expect(result[1].parentId).toEqual(result[1].nodeId)
//   expect(result[1].parentId).toEqual(result[2].parentId)
//   expect(result[2].parentId).not.toEqual(result[3].parentId)
//   expect(result[6].parentId).toEqual(result[5].nodeId)
//   expect(result[6].parentId).not.toEqual(result[7].parentId)
//   console.log(result)
// })

test('basic', () => {
  const input = [
    {
      name: 'p',
    },
    {
      name: 'head',
      attributes: {
        rend: 'h2',
      },
    },
    {
      name: 'p',
    },
    {
      name: 'head',
      attributes: {
        rend: 'h4',
      },
    },
    {
      name: 'p',
    },
    {
      name: 'head',
      attributes: {
        rend: 'h1',
      },
    },
    {
      name: 'p',
    },
    {
      name: 'head',
      attributes: {
        rend: 'h3',
      },
    },
    {
      name: 'p',
    },
  ]
  const result = helper.parentTagger(input)
  console.log(result)
  expect(result[0].parentId).toEqual(null)

  expect(result[2].parentId).toEqual(result[1].nodeId)
  expect(result[5].parentId).toEqual(result[5].nodeId)
  expect(result[8].parentId).toEqual(result[7].nodeId)

  console.log(result)
})
