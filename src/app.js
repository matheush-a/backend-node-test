const express = require('express');
const app = express();
const port = 3000;
const routes = require('./router.js');

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}/api`);
});

app.use('/api', routes);