//server.js

const http = require("http");

const HOST = "localhost";
const PORT = 8020;

const getAllentityExample = JSON.stringify([
    {
        id: 1,
        name: "Club Atlético Boca Juniors",
        categoryName: "Primera División de Argentina"
    },
    {
        id: 2,
        name: "Club Atlético River Plate",
        categoryName: "Primera División de Argentina"
    }
]);

const server = http.createServer(async (req, res) => {
console.log("Request on server received :  " + req.method + " : " + req.url);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.url === "/" && req.method === "GET") {
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        // send the response data as text
        res.end("If you see this message, your API server is all set , Welcome !");
    }

    else if (req.url === "/health" && req.method === "GET") {
        const healthcheck = {
            uptime: process.uptime(),
            message: "OK",
            timestamp: Date.now(),
        };
        res.end(JSON.stringify(healthcheck));
    }

    else if (validateRequest(req, "/auth/login", "POST")) {
        const loginOk = {
            "username": "admin",
            "roles": [
                "USER",
                "ADMIN"
            ],
            "token": "token_example"
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(loginOk));
    }

    else if (validateRequest(req, "/entityExample", "GET")) {
        res.setHeader('Content-Type', 'application/json');
        res.end(getAllentityExample);
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ message: `Route: ` + req.url + ` is not implemented` })
        );
    }
});

function validateRequest(req, url, method) {
    return ((req.url === url || req.url === url + `/` ) 
                 && (req.method === method || req.method === "OPTIONS"))
}

server.listen(PORT, () => {
  console.log(`server started on : ${HOST}  port: ${PORT}`);
});