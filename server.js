// server creation
const http = require("http");

const port = 8081;

const todoList = ["Need to learn", "Need to code"];

// http methods
// GET -> getting certain details fromserver / default method / directly work on any browser
// PUT -> Override, fully update
// POST -> Sending data to the server
// DELETE -> Delete data from server
// PATCH -> Update a very few or certain fields


http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h4>Hello this is from my new server</h4>");
    res.end();
}).listen(port, () => {
    console.log(`My NodeJs server started on port ${port}`)
})

// http://localhost:8081
// http://localhost:8081/
// http://localhost:8081/home
// http://localhost:8081/aboutUs
// http://localhost:8081/contactUs

