const csvMock = {
  fieldname: 'file',
  originalname: 'users.csv',
  encoding: '7bit',
  mimetype: 'text/csv',
  buffer: Buffer.from(__dirname + '../__tests__/users.csv', 'utf8'),
  size: 51828,
};

const txtMock = {
  fieldname: 'file',
  originalname: 'users.txt',
  encoding: '7bit',
  mimetype: 'text/plain',
  buffer: Buffer.from(__dirname + '../__tests__/users.txt', 'utf8'),
  size: 51828,
};

module.exports = {txtMock, csvMock};