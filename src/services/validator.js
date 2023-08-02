const validator = {
  validate(file) {
    if(file.mimetype !== 'text/csv') {
      return false;
    }
  }
}

module.exports = validator;