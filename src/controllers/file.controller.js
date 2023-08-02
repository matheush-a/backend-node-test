const search = require('../services/search');

const FileController = {
  StoreCSVFile(req, res) {
    return res.status(201).json({ message: 'Your file was successfully stored.' });
  },

  async GetCSVFile(req, res) {
    const query = req.query.q;
    
    if(query === undefined) {
      return res.status(400).json({ message: 'Invalid query provided, the key must be named as "q".' });
    }

    const filteredUsers = await search(query.toLowerCase());

    if(!filteredUsers || filteredUsers.length === 0) {
      return res.status(404).json({ message: `Unable to find user matches for ${query ? query : 'the empty query'}.` });
    }

    return res.status(200).send(filteredUsers);
  }
}

module.exports = FileController;