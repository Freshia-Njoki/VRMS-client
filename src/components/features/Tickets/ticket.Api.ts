import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiDomain } from "../../../utils/utils"

export interface ITicket {
  subject: string;
 status: string;
 description: string
}

export const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiDomain }),
  endpoints: (builder) => ({
    getTickets: builder.query<ITicket[], void>({
      query: () => 'customerSupportTickets',
    }),
    addTicket: builder.mutation<ITicket, Partial<ITicket>>({
      query: (tickets) => ({
        url: '/customerSupportTickets',
        method: 'POST',
        body: tickets,
      }),
    })
  }),
});

export default ticketApi;