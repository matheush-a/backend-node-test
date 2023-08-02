const express = require("express");
const router = express.Router();
const FileController = require('./controllers/file.controller');
const upload = require('./services/upload');
const { validate } = require('./services/validator');

router.post("/files", upload.single('file'), (req, res) => {
  validate(req.file, res);
  
  FileController.StoreCSVFile(req, res);
});

router.get("/users", (req, res) => {
  FileController.GetCSVFile(req, res);
});


module.exports = router;