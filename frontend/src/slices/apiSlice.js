import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { logout } from './authSlice';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

//handle when JWT and cookie expire, intercept 401 and logout
// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#customizing-queries-with-basequery
async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  // Dispatch the logout action on 401.
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: () => ({}),
});
