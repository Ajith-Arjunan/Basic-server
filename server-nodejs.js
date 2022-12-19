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


http
    .createServer((req, res) => {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.write("<h4>Hello this is from my new server</h4>");
        // res.end();

        // const { method, url } = req;
        // console.log(method, url);
        // res.end();

        const { method, url } = req;
        if (url === "/todos") {
            // http://localhost:8081/todos
            if (method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(todoList.toString());

            } else if (method === "POST") {
                let body = "";
                req.on('error', (err) => {
                    console.log(err);

                }).on('data', (dataBits) => {
                    body += dataBits; //data chunks
                    // console.log(dataBits);
                }).on('end', () => {
                    // console.log("body data", body);
                    body = JSON.parse(body);
                    let newTodo = todoList;
                    newTodo.push(body.item);
                    console.log(newTodo);
                    res.writeHead(201);
                });
            } else if (method === "DELETE") {
                let body = "";
                req.on('error', (err) => {
                    console.error(err);
                }).on('data', (chunks) => {
                    body += chunks;
                }).on('end', () => {
                    body = JSON.parse(body);
                    let DeleteItem = body.item;
                    for (let i = 0; i < todoList.length; i++) {
                        if (todoList[i] === DeleteItem) {
                            todoList.splice(i, 1);
                            break;
                        }
                    }
                    res.writeHead(204);
                })
            } else {
                res.writeHead(501);
            }

        } else {
            res.writeHead(404);
        }
        res.end();


    }).listen(port, () => {
        console.log(`My NodeJs server started on port ${port}`)
    });

// http://localhost:8081
// http://localhost:8081/c
// http://localhost:8081/home
// http://localhost:8081/aboutUs
// http://localhost:8081/contactUs

// CSR Client side rendered


// SSR Seerver side rendered