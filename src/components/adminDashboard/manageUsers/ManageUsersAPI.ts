import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserTag } from './tagTypes'

export interface TUser {
    id: number;
    full_name: string;
    email: string;
    contact_phone: string;
}
// Define the API slice
const ManageUsersAPI = createApi({
    reducerPath: 'ManageUsersAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    // tagTypes: [UserTag],
    endpoints: (builder) => ({
        getUsers: builder.query<TUser[], Partial<TUser>>({
            query: () => 'users',
            providesTags: ['getUsers'],
        }),
        updateUser: builder.mutation<TUser, Partial<TUser>>({
            query: ({ id, ...rest }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: rest,
                providesTags: ['updateUser'],
            }),
            invalidatesTags: ['getUsers'],
        }),
        deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
                providesTags: ['deleteUser'],
            }),
            invalidatesTags: ['getUsers'],
        }),
    }),
});

// Export the auto-generated hooks
export default ManageUsersAPI