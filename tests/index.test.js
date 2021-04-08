const getFirstAlbumTitle = require('../src/index');
const axios = require('axios');

/*
it('returns the title of the first album', async () => {
    const title = await getFirstAlbumTitle();  // Run the function
    expect(title).toEqual('quidem molestiae enim');  // Make an assertion on the result
});
*/

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

    const title = await getFirstAlbumTitle();
    expect(title).toEqual('My first Album');

});