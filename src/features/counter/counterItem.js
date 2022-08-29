import { createSlice } from '@reduxjs/toolkit';

export const counterItem = createSlice({
    name: 'item',
    initialState: {
        value: [],
    },
    reducers: {
        decrement: (state, action) => {
            state.value -= action.payload;
        },
        increment: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { decrement, increment } = counterItem.actions;

export default counterItem.reducer;
