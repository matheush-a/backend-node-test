const multer = require('multer');

const storage = multer.diskStorage({
  storage: {
    destination: function (req, file, cb) {
      cb(null, 'storage/files')
    },
    filename: function (req, file, cb) {
      cb(null, 'users.csv')
    },
  },
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'text/csv') {
      return cb(new Error('File is not allowed'))
    }

    cb(null, true)
  }
});

const upload = multer({ storage });
module.exports = upload;