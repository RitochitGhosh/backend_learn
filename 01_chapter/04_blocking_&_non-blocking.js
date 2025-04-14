const fs = require("fs");

// Example of a blocking process(Sync)

// 1
console.log("This will be printed before execution.\n");

// 2
const res = fs.readFileSync("./test_sync.txt", "utf-8");
console.log("Contents of .txt file: ", res);

// 3
console.log("\nThis will be printed after execution.");


console.log("\n\n");


// Example of a non-blocking process (Async)

// 1
console.log("This will be printed before execution.\n");

// 2
fs.readFile("./test_sync.txt", "utf-8", (err, res) => {
    console.log("Contents of .txt file: ", res);
});

// 3
console.log("This will also be printed before execution.\n");
