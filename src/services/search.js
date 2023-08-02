const csv = require('csv-parser');
const fs = require('fs');
const path = 'storage/files';

async function convertCSVToArray() {
  const users = [];
  const fileStream = fs.createReadStream(`${path}/users.csv`)
    .pipe(csv({}));
  
  for await (const chunk of fileStream) {
    users.push(chunk);
  }

  return users;
}

async function search(query) {
  const usersArray = await convertCSVToArray();
  let filteredUsers = [];

  usersArray.filter(function (user) {
    const matchCondition = user?.name?.toLowerCase() === query 
    || user?.city?.toLowerCase() === query 
    || user?.country?.toLowerCase() === query 
    || user?.favorite_sport?.toLowerCase() === query;

    if(matchCondition) {
      filteredUsers.push(user);
    }
  });

  return filteredUsers;
}

module.exports = search;