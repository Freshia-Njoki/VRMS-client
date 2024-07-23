import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {apiDomain} from "../../../utils/utils"

export interface IUser {
    full_name: string,
    contact_phone: string,
    role: string,
    address: string,
    email: string,
    userId: number,
    password: string
}
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiDomain }),
  endpoints: (builder) => ({
   login: builder.mutation({
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user,
      }),
    }),
    register: builder.mutation({
        query: (user) => ({
            url: '/register',
            method: 'POST',
            body: user
        })
    })
  }),
});
