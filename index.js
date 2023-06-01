const fs = require('fs');
const http = require('http');

let Your_Name = 'Shubham';

let data = `<h1> Hello World </h1>
<p> This is ${Your_Name}... </p>`
fs.writeFile('index.html', data, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Html created successfully`);
    }
});

const readFile = fs.readFileSync('./index.html', 'utf-8');
const server = http.createServer((req, res) => {
    res.end(readFile);
})
server.listen(5000);