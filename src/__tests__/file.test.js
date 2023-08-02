
const axios = require('axios');
const FormData = require('form-data');
const { txtMock, csvMock } = require('../mocks/users.mock');

describe('CSV File Store', () => {
  it('should sucessfully post a csv file', async () => {
    let form = new FormData();
    form.append('file', JSON.stringify(csvMock));
    let formHeaders = form.getHeaders();

    const response = await axios.post('http://127.0.0.1:3000/api/files', form, {
      headers: {
        ...formHeaders,
      },
    }).catch(error => {
      return error.response
    });

    expect(response.status).toBe(201);
  });

  it('should fail on post a non csv file', async () => {
    let form = new FormData();
    form.append('file', JSON.stringify(txtMock));
    let formHeaders = form.getHeaders();

    const response = await axios.post('http://127.0.0.1:3000/api/files', form, {
      headers: {
        ...formHeaders,
      },
    }).catch(error => {
      return error.response
    });

    expect(response.status).toBe(422);
  });
});