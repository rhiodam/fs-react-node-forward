// const http = require('http');
// const fs = require('fs');

// event emitters
// streams
// cluster


// const server = http.createServer('request' , (req, res) => {
//     // res.write("Hello Node\n");
//     // res.end();
//     res.end(fs.readFileSync(__dirname + '/../client/index.html'));
// });
//
// server.listen(8080);

// -----------------
// Use express

const express = require('express');

const app = express();

app.use(express.static('client'));

app.listen(8080)