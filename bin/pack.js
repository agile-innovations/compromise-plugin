var pack = require('../pack');
var fs = require('fs');

let file = process.argv[2]
if (!file) {
  console.warn('pass in a file to read as a second param')
}

fs.readFile(file, (err, r) => {
  let str = r.toString()
  console.log(pack(str))
})
