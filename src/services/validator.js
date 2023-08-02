const validator = {
  validate(file) {
    if(file.mimetype !== 'text/csv') {
      return false;
    }

    return true;
  }
}

module.exports = validator;