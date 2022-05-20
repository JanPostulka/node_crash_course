const path = require('path');

console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename).base);

console.log(path.join(__dirname, 'test', 'hello.html'));

const platSpec = path.delimiter;

console.log(platSpec);

const pathformat = path.format({
  dir: pathjoin,
  root: pathjoin,
  base: pathjoin,
  name: pathjoin,
  ext: pathjoin,
});

console.log(pathformat);

const parentDir = path.dirname(__dirname);

console.log(parentDir);
