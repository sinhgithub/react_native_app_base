import axios from 'axios';
import { handleErrorMessage } from 'helpers/handleError';
import qs from 'qs';
import { store } from '../redux/store';

const REQUEST_TIMEOUT = 60000;

axios.interceptors.request.use(config => {
  const { token } = store.getState().auth.memberInfo;
  config.headers.Authorization = 'Bearer ' + token;
  return config;
});

export default class APIUtils {
  static get(uri, params, headers, callback) {
    return new Promise((resolve, reject) => {
      axios
        .get(uri, { params })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          callback?.(err);
          reject(handleErrorMessage(err));
        });
    });
  }

  static getWithoutAcceptText(uri, params, headers) {
    return new Promise((resolve, reject) =>
      axios
        .get(uri, {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            ...headers
          },
          timeout: REQUEST_TIMEOUT,
          params
        })
        .then(response => {
          console.log('>>>>>>> Response>>>>>> : ', response);
          resolve(response);
        })
        .catch(err => {
          reject(handleErrorMessage(err));
        })
    );
  }

  static post(uri, postData, headers, callback) {
    return new Promise((resolve, reject) => {
      axios
        .post(uri, postData, {
          timeout: REQUEST_TIMEOUT,
          headers: {
            'Content-Type': 'application/json',
            ...headers
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          console.log('errr 3', { err });
          callback?.();
          reject(handleErrorMessage(err));
        });
    });
  }

  static delete(uri, deleteBody, headers) {
    console.log('deleteBody', deleteBody);
    return new Promise((resolve, reject) => {
      axios
        .delete(uri, {
          timeout: REQUEST_TIMEOUT,
          headers: {
            'Content-Type': 'application/json',
            ...headers
          },
          data: deleteBody
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          console.log('errr 4', { err });
          reject(handleErrorMessage(err));
        });
    });
  }

  static postFormData(uri, postData, headers) {
    console.log('>>>>>>> Request>>>>>> : ', postData);
    return new Promise((resolve, reject) => {
      axios
        .post(uri, postData, {
          timeout: REQUEST_TIMEOUT,
          headers: {
            'Content-Type': 'multipart/form-data',
            ...headers
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          console.log('[error 5]', { err });
          reject(handleErrorMessage(err));
        });
    });
  }

  static put(uri, updateData, handleErr) {
    return new Promise((resolve, reject) =>
      axios
        .put(uri, updateData, {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: REQUEST_TIMEOUT
        })
        .then(response => {
          console.log('response', response);
          resolve(response);
        })
        .catch(err => {
          console.log('err', err);
          handleErr?.(err);
          // console.log('[error]', { err });
          reject(handleErrorMessage(err));
        })
    );
  }

  static getMultiple(listGetRequest) {
    return new Promise((resolve, reject) => {
      axios
        .all(listGetRequest)
        .then(
          axios.spread((...responses) => {
            resolve(responses);
          })
        )
        .catch(errors => {
          reject(handleErrorMessage(errors));
        });
    });
  }

  static postUrlencoded = (uri, postData, headers) => {
    let config = {
      method: 'post',
      url: uri,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(postData)
    };

    return new Promise((resolve, reject) => {
      axios(config)
        .then(response => {
          console.log('postUrlencoded', response);
          resolve(response);
        })
        .catch(err => {
          //  console.log('[error]', { err });
          console.log('errr 3', { err });
          reject(handleErrorMessage(err));
        });
    });
  };
}
