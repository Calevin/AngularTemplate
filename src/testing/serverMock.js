//server.js

const http = require("http");

const HOST = "localhost";
const PORT = 8080;

listEntityExample = [
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
];

const server = http.createServer(async (req, res) => {
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Request on server received :  " + req.method + " : " + req.url);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        console.log('>>>>>>>>>>>>> OPTIONS');

        res.writeHead(200);
        res.end();
        console.log('<<<<<<<<<<<<< OPTIONS');
    } else if (req.url === "/" && req.method === "GET") {
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

    else if (validateRequestUrlEstricta(req, "/auth/login", "POST")) {
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

    else if (validateRequestUrlEstricta(req, "/entityExample", "GET")) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(listEntityExample));
    }

    else if (validateRequestUrlEstricta(req, "/entityExample", "POST")) {

        res.setHeader('Content-Type', 'application/json');

        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {

            console.log(JSON.parse(data));

            const newId = listEntityExample.length+1;

            const newEntityExample = Object.assign({ id: newId }, JSON.parse(data));
    
            console.log("newProduct: ", newEntityExample);
    
            listEntityExample.push(newEntityExample);

            const { id, name, description } = newEntityExample;

            res.write(JSON.stringify({ id, name, description }));

            res.end();
        });
    }    

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ message: `Route: ` + req.url + ` is not implemented` })
        );
    }
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");    
});

function validateRequestUrlEstricta(req, url, method) {    
    return (req.url === url) && (req.method === method);
}

function validateRequestUrlConParametro(req, url, method) {    
    console.log("substring: ", req.url.substring(0, url.length));

    return((req.url.substring(0,10) === url) && (req.method === method));
}

function getParametroUrl(req, url){
    return req.url.substring(url.length, req.url.length);
}

server.listen(PORT, () => {
  console.log(`server started on : ${HOST}  port: ${PORT}`);
});