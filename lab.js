const http = require("http")
const hostname = '127.0.0.1'
const port = 3000
const sthChars = [
  {
    name: "Sonic",
    species: "hedgehog",
    colors: ["blue"]
  },
  {
    name: "Tais",
    species: "fox",
    colors: ["yellow", "white"]
  },
  {
    name: "Knuckles",
    species: "echidna",
    colors: ["red", "white"]
  },
  {
    name: "Shadow",
    species: "hedgehog",
    colors: ["black", "red", "white"]
  }
]
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-type", "text/plain")
  res.write(JSON.stringify(sthChars))
  res.end()
})

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
})