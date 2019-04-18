import request from "superagent";

const randomPictures = 'https://api.unsplash.com/photos/?client_id=d9542b388f7922420a51b5739d57f04affc18be56c1b39ffb48063aafa003f17';

export function getPictures(callback) {
  request
  .get(randomPictures)
  .end((err, res) => {
    callback(err, res.body);
  });
}

