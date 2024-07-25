// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const loginUser = createAsyncThunk('user/login', async (credentials: { email: string; password: string }, { rejectWithValue }) => {
//     try {
//         const response = await axios.post('http://localhost:8000/api/auth/login', credentials);
//         return response.data;
//     } catch (err:any) {
//         if (err.response && err.response.data) {
//             return rejectWithValue(err.response.data.error);
//         }
//         return rejectWithValue(JSON.stringify(err.message));
//     }
// });

// interface TUser {
//     id: number;
//     fullname: string;
//     phone: string;
//     address: string;
//     email: string;
//     status: string;
//     role: string;
// }

// const initialUser: TUser = {
//     id: 0,
//     fullname: '',
//     phone: '',
//     address: '',
//     email: '',
//     status: '',
//     role: '',
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         user: initialUser,
//         token: null,
//         loading: false,
//         error: '',
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.pending, (state) => {
//                 state.loading = true;
//                 state.error = '';
//                 state.user = initialUser;
//                 state.token = null;
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = '';
//                 state.user = action.payload.user;
//                 state.token = action.payload.token;
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string;
//                 state.user = initialUser;
//                 state.token = null;
//             });
//     }
// });

// export default userSlice.reducer;