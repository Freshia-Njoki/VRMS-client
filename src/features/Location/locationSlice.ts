// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import locationBranchApi, { ILocationBranch } from './location.Api'
// import { createSelector } from 'reselect';
// import { RootState } from '../../app/store'
// interface LocationBranchState {
//   locationBranch: ILocationBranch[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: LocationBranchState = {
//   locationBranch: [],
//   loading: false,
//   error: null,
// };

// const LocationBranchSlice = createSlice({
//   name: 'locationBranch',
//   initialState,
//   reducers: {
//     setLocationBranches(state, action: PayloadAction<ILocationBranch[]>) {
//       state.locationBranch = action.payload;
//     },
//   },
// });

// export const { setLocationBranches } = LocationBranchSlice.actions;

// const selectLocationBranchState = (state: RootState) => state.locationBranch;

// export const selectLocationBranch = createSelector(
//   [selectLocationBranchState],
//   (locationBranchState) => locationBranchState.locationBranch
// );
// export default LocationBranchSlice.reducer;