const fs = require('fs')
const path = require('path')

const pathName = path.resolve(__dirname, './cat-names.json');

fs.readFile(pathName, (err, data) => {
  const catNames = JSON.parse(data)
  console.log(
    'My cat names are:',
    catNames.map(cat => cat.name).join(', ')
  )
})

