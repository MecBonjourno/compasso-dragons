const axios = require('axios');

async function getEndpoint() {
  const response = await axios.get('/');
}

module.exports = getEndpoint;
