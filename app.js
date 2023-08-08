const fs = require("fs");

fs.stat("test.txt", (error, stats) => {
  if (error) console.error(error);
  console.log(stats);
  console.log(stats.isFile());
  console.log(stats.isDirectory())
  console.log(stats.isSymbolicLink())
  console.log(stats.size)
});
