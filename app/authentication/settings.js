/**
 * Created by xuemingli on 16/5/25.
 */

import { encode } from 'querystring';

export const UNAUTHORIZED_MESSAGE = '未认证用户';
export const FORBIDDEN_MESSAGE = '未授权的访问';
export const ENABLE_AUTH = false;
export const TOKEN_KEY = '_token';
export const TOKEN_HEADER = 'X-Authorization-Token';

// const PASSPORT_CLIENT_NAME = 'ewf-sm';
// const PASSPORT_REDIRECT = 'http://127.0.0.1:9090/redirect';
// const PASSPORT_URL = 'http://192.168.67.27/authorize';


export const LOGIN_URL = '/login';

// export const LOGIN_URL = () => {
//   const params = {
//     next: window.location.href,
//     client: PASSPORT_CLIENT_NAME,
//     redirect: PASSPORT_REDIRECT,
//     state: 'abcd'
//   };
//   return `${PASSPORT_URL}?${encode(params)}`;
// };


export const FORBIDDEN_ACTION = {
  label: '重新登录',
  redirect: '/login'
};

// export const FORBIDDEN_ACTION = {
//   label: '重新登录',
//    redirect: () => {
//      const params = {
//        next: window.location.href,
//        client: PASSPORT_CLIENT_NAME,
//        redirect: PASSPORT_REDIRECT,
//        state: 'abcd'
//      };
//      return `${PASSPORT_URL}?${encode(params)}`;
//    }
// };
