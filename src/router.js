const express = require("express");
const router = express.Router();
const FileController = require('./controllers/file.controller');
const upload = require('./lib/upload');

router.post("/files", upload.single('file'), (req, res) => {
  FileController.StoreCSVFile(req, res);
});

router.get("/users", (req, res) => {
  FileController.GetCSVFile(req, res);
});


module.exports = router;