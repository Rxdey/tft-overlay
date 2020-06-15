import request from 'request';
import api from '../api/api';

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
};

const http = (config) => {
  config.headers = headers;
  return new Promise((resolve, reject) => {
    request(config, (error, res, body) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(body);
    });
  });
};
const data = Object.keys(api).reduce((prev, next) => {
  // eslint-disable-next-line no-param-reassign
  prev[next] = (...arg) => http.call(null, api[next], ...arg);
  return prev;
}, {});

export default data;
