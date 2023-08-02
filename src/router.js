const express = require('express');
const router = express.Router();
const FileController = require('./controllers/file.controller');
const upload = require('./services/upload');
const { validate } = require('./services/validator');

router.post('/files', upload.single('file'), (req, res) => {
  const fileKey = req.headers['user-agent'].includes('axios/')
    ? req.body.file
    : req.file;

  if(!fileKey) {
    return res.status(400).json({ message: 'File key must be named as "file".' });
  }

  const file = req?.file || JSON.parse(req?.body?.file);

  if (!validate(file)) {
    return res.status(422).json({ message: 'File must be a .csv' });
  }

  FileController.StoreCSVFile(req, res);
});

router.get('/users', (req, res) => {
  FileController.GetCSVFile(req, res);
});

module.exports = router;