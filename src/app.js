const express = require('express');
const app = express();
const port = 3000;
const routes = require('./router.js');

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/api`);
});

app.use('/api', routes);