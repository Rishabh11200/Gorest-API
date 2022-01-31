import {create} from 'apisauce';

export const api = create({
  baseURL: 'https://gorest.co.in/public/v1',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization:
      'Bearer 6bd4c3788f7222a8f3ba8a43d7a57528d4e45728bc3d1a3e7e70d4f94a283c4e',
  },
});
