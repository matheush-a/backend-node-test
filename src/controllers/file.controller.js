const { validate } = require('../lib/validator');

const FileController = {
  StoreCSVFile(req, res) {
    validate(req.file, res);

    res.status(201).json({ msg: 'F' });
  },

  GetCSVFile(req, res) {
    res.send('Get ROUTE');
  }
}

module.exports = FileController;