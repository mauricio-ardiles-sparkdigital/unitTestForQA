const mocked = require('../src/mocked');

it('returns the title of the first album using real api', async () => {
  const title = await mocked.getFirstAlbumTitleWithoutMocking();  // Run the function
  expect(title).toEqual('quidem molestiae enim');  // Make an assertion on the result
});