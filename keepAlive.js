const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
    res.send(OK);
});
 
function keepAlive() {
    server.listen(3000, () => {
        console.log(`${Date.now()} - Server is ready.\n\n-\n\n`);
    });
}
 
module.exports = keepAlive;