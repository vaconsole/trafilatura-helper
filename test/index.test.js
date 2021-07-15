const helper = require('../lib/index')
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
    {
      name: 'head',
      attributes: {
        rend: 'h1',
      },
    },
  ]
  const result = helper.parentTagger(input)
  expect(result).toEqual([
    {
      name: 'p',
      nodeId: 'f202fcad997454230bc946165ab24e7d',
      parentId: '_root',
    },
    {
      name: 'head',
      attributes: { rend: 'h2' },
      nodeId: '8e8dd637d27407eb0b461bdfc242aad2',
      parentId: '_root',
    },
    {
      name: 'p',
      nodeId: '70224293ae284b0bd7a5d236b42c35d2',
      parentId: '8e8dd637d27407eb0b461bdfc242aad2',
    },
    {
      name: 'head',
      attributes: { rend: 'h1' },
      nodeId: '713ade3a9694926d6d02057908d05362',
      parentId: '_root',
    },
    {
      name: 'p',
      nodeId: '22de2ae17545accbc4620580e1d2667a',
      parentId: '713ade3a9694926d6d02057908d05362',
    },
    {
      name: 'head',
      attributes: { rend: 'h3' },
      nodeId: '0e9e8a29cb017093886869c31b5a4c73',
      parentId: '713ade3a9694926d6d02057908d05362',
    },
    {
      name: 'p',
      nodeId: '26eda06730fb7ef5dcce9d7d0bdac017',
      parentId: '0e9e8a29cb017093886869c31b5a4c73',
    },
    {
      name: 'head',
      attributes: { rend: 'h1' },
      nodeId: '4dab540a3dd7c56781e64c1171a8b7a5',
      parentId: '_root',
    },
  ])
})

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
  expect(result).toEqual([
    {
      name: 'p',
      nodeId: 'f202fcad997454230bc946165ab24e7d',
      parentId: '_root',
    },
    {
      name: 'head',
      attributes: { rend: 'h2' },
      nodeId: '8e8dd637d27407eb0b461bdfc242aad2',
      parentId: '_root',
    },
    {
      name: 'p',
      nodeId: '70224293ae284b0bd7a5d236b42c35d2',
      parentId: '8e8dd637d27407eb0b461bdfc242aad2',
    },
    {
      name: 'head',
      attributes: { rend: 'h4' },
      nodeId: 'a36194f894340714797c3afe054b5917',
      parentId: '8e8dd637d27407eb0b461bdfc242aad2',
    },
    {
      name: 'p',
      nodeId: '22de2ae17545accbc4620580e1d2667a',
      parentId: 'a36194f894340714797c3afe054b5917',
    },
    {
      name: 'head',
      attributes: { rend: 'h1' },
      nodeId: '578d8042a882c6c5415583352bf720eb',
      parentId: '_root',
    },
    {
      name: 'p',
      nodeId: '26eda06730fb7ef5dcce9d7d0bdac017',
      parentId: '578d8042a882c6c5415583352bf720eb',
    },
    {
      name: 'head',
      attributes: { rend: 'h3' },
      nodeId: 'b5fe5791359bed8a6d74135006dc9c4e',
      parentId: '578d8042a882c6c5415583352bf720eb',
    },
    {
      name: 'p',
      nodeId: '1cccbb1d6b7910eb8c4c10959de1bbca',
      parentId: 'b5fe5791359bed8a6d74135006dc9c4e',
    },
  ])
})
