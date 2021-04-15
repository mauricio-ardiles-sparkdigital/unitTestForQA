const axios = require('axios');


async function getFirstAlbumTitleWithoutMocking() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data[0].title;
}



async function getFirstAlbumTitleMocking() {
    return await axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(function (resp){
            console.log('entre en el then');
            return  resp.data[0].title
        })
        .catch(function (err) {
            console.log('entre en el catch');
            return err.response.statusText;
        });
}


async function getFirstAlbumTitleModifiedMocking() {
  return await axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(function (resp){
      return  resp.data[0].title + ':Modified'
    })
    .catch(function (err) {
      return err.response.statusText + ':Modified';
    });
}



module.exports = {
  getFirstAlbumTitleWithoutMocking,
  getFirstAlbumTitleMocking,
  getFirstAlbumTitleModifiedMocking
};