const http = require("http");
const fs = require("fs");
const url = require("url");
const PORT = 8000;

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  const log = `${new Date()}: New request received at ${req.url} \n`;
  
  fs.appendFile("./log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const user = myUrl.query.name;
        res.end(`Hi there ${user}`);
        break;
      case "/community":
        res.end("HACKAUT");
        break;
      default:
        res.end("Page under contruction...");
    }
  });
});

myServer.listen(PORT, () =>
  console.log(
    `Server listening at PORT: ${PORT}.\n Visit: http://localhost:${PORT}`
  )
);
