const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    const path = req.url;
    let fileLocation = '';

    switch(path) {
        case '/contact-me': 
            fileLocation = 'contact.html';
            break;
        case '/about': 
            fileLocation = 'about.html';
            break;
        case  '/':
            fileLocation = 'index.html';
            break;
        default:
            fileLocation = '404.html';
    }

    fs.readFile(__dirname+'/static/'+fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
        }

        res.writeHead(200);
        res.end(data);
    })
}).listen(3000);