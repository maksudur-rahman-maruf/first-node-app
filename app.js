const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/info/') {
        res.write(JSON.stringify({
            id: 1,
            name: 'Maruf',
            team: 'InfoImage'
        }));
        res.end();
    }
});


server.listen(3002);

console.log('Listening on port 3002');
