const mocked = require('../src/mocked');
const axios = require('axios');

jest.mock('axios');

it('returns the title of the fist album (mocked)', async () => {
    jest.resetAllMocks();

    axios.get.mockResolvedValue({
        data: [
            {
                userId: 1,
                id: 1,
                title: 'My first Album'
            },
            {
                userId: 1,
                id: 2,
                title: 'Album: The Sequel'
            }
        ]
    });

    const title = await mocked.getFirstAlbumTitleMocking();
    expect(title).toEqual('My first Album');

});


it('returns Not Found error (mocked)', async () => {
    jest.resetAllMocks();

    axios.get.mockRejectedValue({
        "response":
            {
                "data": {},
                "status": 404,
                "statusText": "Not Found"
            }
    });

    const title = await mocked.getFirstAlbumTitleMocking();
    expect(title).toEqual('Not Found');

});


it('returns the title of the fist album (mocked and modified)', async () => {
    jest.resetAllMocks();

    axios.get.mockResolvedValue({
        data: [
            {
                userId: 1,
                id: 1,
                title: 'My first Album'
            },
            {
                userId: 1,
                id: 2,
                title: 'Album: The Sequel'
            }
        ]
    });

    const title = await mocked.getFirstAlbumTitleModifiedMocking();
    expect(title).toEqual('My first Album:Modified');

});


it('returns Not Found error (mocked and modified)', async () => {
    jest.resetAllMocks();

    axios.get.mockRejectedValue({
        "response":
          {
              "data": {},
              "status": 404,
              "statusText": "Not Found"
          }
    });

    const title = await mocked.getFirstAlbumTitleModifiedMocking();
    expect(title).toEqual('Not Found:Modified');

});