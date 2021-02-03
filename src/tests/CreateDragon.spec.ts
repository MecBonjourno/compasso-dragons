const getEndpoint = require('./index');
const axios = require('axios');

jest.mock('axios');

it('create dragon', async () => {
  axios.post.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      },
      {
        userId: 1,
        id: 2,
        title: 'Album: The Sequel'
      }
    ]
  });

  const title = await getEndpoint();
  
  expect(title).toEqual('My First Album');
});

export {}