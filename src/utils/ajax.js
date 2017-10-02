import { ajax } from 'rxjs/observable/dom/ajax';

const API_URL = 'http://172.17.10.102/Anakin/api';
const defaultHeaders = setDefaultHeaders();

export const get = (url) => ajax.getJSON(`${API_URL}${url}`, defaultHeaders);
export const post = (url, body = {}) => ajax.post(`${API_URL}${url}`, body, defaultHeaders);
export const put = (url, body = {}) => ajax.put(`${API_URL}${url}`, body, defaultHeaders);

// ---

function setDefaultHeaders() {
  const authToken = localStorage.getItem('eco_token');
  const authTokenExist = !!authToken
  const headers = {
    'Content-type': 'application/json',
  };

  if (!authTokenExist) { return headers };

  return Object.assign({}, headers, { 'Authorization': `Bearer ${authToken}` });

}
