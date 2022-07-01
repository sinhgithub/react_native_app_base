import AppConfigs from 'configs/appConfigs';
import { store } from '../../redux/store';
import axios from 'axios';
const { token } = store.getState().auth.memberInfo;
const { END_POINT } = AppConfigs;

function post(uri, postData, callback) {
  return new Promise((resolve, reject) => {
    axios
      .post(uri, postData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        resolve(response);
        callback?.(response);
      })
      .catch(err => {
        reject(err);
        console.log(err, 'errerrerrerr');
      });
  });
}

export const uploadImage = (params, callback) => {
  let formData = new FormData();
  formData.append('file', {
    uri: params.uri,
    name: params.fileName,
    type: params.type
  });
  const url = `${END_POINT}api/file/upload/images`;
  return post(url, formData, callback);
};
