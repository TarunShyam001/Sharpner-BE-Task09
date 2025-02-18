const http = require('http');

const route = require('./routes');

const server = http.createServer(route.handler);

const PORT = 7200;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
