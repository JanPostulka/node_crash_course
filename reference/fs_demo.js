const fs = require('fs');
const path = require('path');

fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed...');
  }
);

const users = [
  { name: "Kaddy" },
  { name: "Marc" },
  { name: "Prince" },
  { name: "Kally" }
]

fs.mkdir(path.join(__dirname, "/data"), {}, err => {
  if (err) throw err;

  console.log("Folder created ...");

  fs.writeFile(path.join(__dirname, "/data", "name.json"), JSON.stringify(users), err => {
    if (err) throw err;

    console.log("File created and data written ...")

    fs.readFile(path.join(__dirname, "/data", "name.json"), "utf8", (err, users) => {
      if (err) throw err;

      JSON.parse(users).forEach(user => {
        console.log(user.name);
      });

      console.log("Users name displayed ...")

      fs.rename(path.join(__dirname, "/data", "name.json"), path.join(__dirname, "/data", "users.json"), err => {
        if (err) throw err;

        console.log("File rename completed ...");
      });

    });
  });
})

fs.rmdir(path.join(__dirname, "/myFolderToDelete"), (err) => {
  if (err) throw err;

  console.log("Folder deleted ...");
});

fs.readdir(__dirname, (err, files) => {
  if (err) throw err
  console.log(files)
}) 

fs.copyFile('source.txt', 'destination.txt', err => {
  if (err) throw err;
  console.log('File copied...')
})