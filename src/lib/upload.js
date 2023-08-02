const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'storage/files')
  },
  filename: function (req, file, cb) {
    cb(null, 'users.csv')
  }
});

const upload = multer({ storage });
module.exports = upload;