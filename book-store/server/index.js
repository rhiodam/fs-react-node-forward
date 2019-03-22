const http = require('http');
const fs = require('fs');

// event emitters
// streams


const server = http.createServer('request' , (req, res) => {

    // res.write("Hello Node\n");
    // res.end();
    res.end(fs.readFileSync(__dirname + '/../client/index.html'));
});


server.listen(8080);