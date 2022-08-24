import { createSlice } from '@reduxjs/toolkit';

export const counterItem = createSlice({
    name: 'item',
    initialState: {
        value: [],
    },
    reducers: {
        like: (state) => {
            state.value += true;
        },
        dislike: (state) => {
            state.value -= false;
        },
    },
});

export const { like, dislike } = counterItem.actions;

export default counterItem.reducer;
