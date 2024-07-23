// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { apiDomain } from "../../utils/utils"

// export interface ILocationBranch {
//   updated_at: string;
//   id: number | null | undefined;
//   name: string;
//   address: string;
//   contact_phone: string;
// }

// export const locationBranchApi = createApi({
//   reducerPath: 'locationBranchApi',
//   baseQuery: fetchBaseQuery({ baseUrl: apiDomain}),
//   endpoints: (builder) => ({
//     getLocationBranch: builder.query<ILocationBranch[], void>({
//       query: () => '/locationBranch',
//     })   
//   })
// });

// export default locationBranchApi;