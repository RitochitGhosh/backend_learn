const fs = require("fs"); // fs is a built-in package, allows interacting with files.

let time = new Date().toLocaleString();


// Synchronous Function call
fs.writeFileSync("./test_sync.txt", `Hello this is done using synchronous function call [from ${__filename}] ...\n`)

const res = fs.readFileSync("./test_sync.txt", "utf-8");
console.log("Synchronous read output: ", res);

fs.appendFileSync("./test_sync.txt", `\n ${time}`);


// Asynchronous Function call
fs.writeFile("./test_async.txt", `Hello this is done using synchronous function call [from ${__filename}] ...\n`, (err) => {})


fs.readFile("./test_async.txt", "utf-8", (err, res) => {
  if (err) console.error("Error: ", err);
  else console.log("Asynchronous read output: ", res);
});

fs.appendFile("./test_async.txt", `\n Log Time: ${time}`, (err) => {})


// Other operations
// fs.cpSync("./test_sync.txt", "./copy.txt");
// fs.unlinkSync("./copy.txt"); // Run one at a time to see it working...
console.log((fs.statSync("./test_sync.txt")));

// fs.mkdirSync("new-dir");
// fs.rmdirSync("./new-dir") // Run one at a time to see it working