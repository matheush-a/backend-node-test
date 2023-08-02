const express = require('express');
const app = express();
const port = 3000;
const routes = require('./router.js');

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/api`);
});

app.use('/api', routes);

app.use((error, req, res, next) => {
  const message = `Unexpected file key: ${error.field}, you must define it as "file"`;

  return res.status(400).json({ message });
});