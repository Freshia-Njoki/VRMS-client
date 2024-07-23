import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITicket } from "./ticket.Api"

interface TicketState {
  tickets: ITicket[];
}

const initialState: TicketState = {
  tickets: [],
};

const TicketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<string>) => {
      state.tickets.push({
        status: action.payload,
        description: action.payload
      });
    }
  },
});

export const { addTicket } = TicketSlice.actions;
export default TicketSlice.reducer;