// Part 1: a plain server using Node's built-in http module.
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello");
});

server.listen(PORT, () => {
  console.log(`Plain http server running on http://localhost:${PORT}`);
});
