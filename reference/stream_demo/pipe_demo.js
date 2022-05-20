const fs = require("fs");
const path = require("path");

let readStream = fs.createReadStream(path.join(__dirname, "./read_file.txt"));

let writeStream = fs.createWriteStream(path.join(__dirname, "./write_file.txt"));

readStream.pipe(writeStream)
