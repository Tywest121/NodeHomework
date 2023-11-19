const http= require('http');
const fs= require('fs');
const _ = require('lodash');

const server= http.createServer((req,res) => {
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('Hello');
    });

    greet();
    greet();


res.setHeader('Content-Type','text/html');

let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about.html':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();    
        default:
            path += '404.html';
            res.statusCode = 404;
            break        
    }

fs.readFile('./views/index.html', (err,data) => {
    if(err){
        console.log(err);
    }else{
        res.write(data);
        res.end();
    }
})

// res.write('<head><link rel ="stylesheet" href="#"></head>')
// res.write("<p>Hello,class</p>");
// res.write("<p>Hello,again Class</p>");
// res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening to request on port 3000');
});