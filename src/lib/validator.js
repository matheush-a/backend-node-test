const validator = {
  validate(file, res) {
    console.log(file);
    if(file.mimetype !== 'text/csv') {
      res.status(422).send("File must be a .csv");
    }
  }
}

module.exports = validator;