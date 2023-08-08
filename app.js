const fs = require("fs")

fs.stat("test.txt", (error, stats) => {
    if (error) console.error(error)
    console.log(stats)
})