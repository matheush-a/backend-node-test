const validator = {
  async validate(file, res) {
    if(file.mimetype !== 'text/csv') {
      return res.status(422).json({ message: "File must be a .csv" });
    }
  }
}

module.exports = validator;