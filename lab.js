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
  res.setHeader("Content-type", "application/json")
  switch(req.url) {
    case "/":
      res.write(JSON.stringify(sthChars))
      break
    case "/sonic":
      res.write(JSON.stringify(sthChars[0]))
      break
    case "/tails":
      res.write(JSON.stringify(sthChars[1]))
      break
    case "/knuckles":
      res.write(JSON.stringify(sthChars[2]))
      break
    case "/shadow":
      res.write(JSON.stringify(sthChars[3]))
      break
      case "/test":
      res.setHeader("Content-type", "text/plain")
      res.write("You've reached the test endpoint.")
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-type", "text/plain")
      res.write("Error: 404 Not Found")
      break;
  }
  res.end()
})

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
})