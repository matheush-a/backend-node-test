
const axios = require('axios');
const FormData = require('form-data');
const { txtMock, csvMock } = require('../mocks/users.mock');

describe('Search query in .csv file', () => {
  it('should sucessfully find a register by name', async () => {
    const response = await axios.get('http://localhost:3000/api/users?q=John Doe')
      .catch(error => {
        return error.response
      });

    expect(response.status).toBe(200);
  });

  it('should sucessfully find a register by city', async () => {
    const response = await axios.get('http://localhost:3000/api/users?q=London')
      .catch(error => {
        return error.response
      });

    expect(response.status).toBe(200);
  });

  it('should sucessfully find a register by country', async () => {
    const response = await axios.get('http://localhost:3000/api/users?q=France')
      .catch(error => {
        return error.response
      });

    expect(response.status).toBe(200);
  });

  it('should sucessfully find a register by favorite_sport', async () => {
    const response = await axios.get('http://localhost:3000/api/users?q=Basketball')
      .catch(error => {
        return error.response
      });

    expect(response.status).toBe(200);
  });

  it('should not find a register by any query', async () => {
    const response = await axios.get('http://localhost:3000/api/users?q=Basketballs')
      .catch(error => {
        return error.response
      });

    expect(response.status).toBe(404);
  });

  it('should receive a bad request error on wrong named query key', async () => {
    const response = await axios.get('http://localhost:3000/api/users?query=Basketballs')
      .catch(error => {
        return error.response
      });

    expect(response.status).toBe(400);
  });
});

describe('Store .csv file', () => {
  it('should sucessfully post a csv file', async () => {
    const response = await axios.post('http://localhost:3000/api/files', { file: JSON.stringify(csvMock) }, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).catch(error => {
      return error.response
    });

    expect(response.status).toBe(201);
  });

  it('should fail on post a non csv file', async () => {
    const response = await axios.post('http://localhost:3000/api/files', { file: JSON.stringify(txtMock) }, {
      headers: {
        'content-type': 'multipart/form-data'
      },
    }).catch(error => {
      return error.response
    });

    expect(response.status).toBe(422);
  });

  it('should fail on post a null file', async () => {
    const response = await axios.post('http://localhost:3000/api/files', { file: JSON.stringify(null) }, {
      headers: {
        'content-type': 'multipart/form-data'
      },
    }).catch(error => {
      return error.response
    });

    expect(response.status).toBe(422);
  });

  it('should fail on post a file with an unexpected key', async () => {
    const response = await axios.post('http://localhost:3000/api/files', { files: JSON.stringify(csvMock) }, {
      headers: {
        'content-type': 'multipart/form-data'
      },
    }).catch(error => {
      return error.response
    });

    expect(response.status).toBe(400);
  });
});