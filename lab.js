const http = require("http")
const hostname = '127.0.0.1'
const port = 3000
const sthChars = [
  {
    name: "Sonic",
    species: "hedgehog",
    color: "blue"
  }
]
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-type", "text/plain")
  res.write('<h1 style="color: red">No one expects the spanish inquisition!</h1>');
  res.write('<p>I wonder what else we can send...</p>');
  res.end()
})

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
})