import { createSlice } from '@reduxjs/toolkit';

export const counterMenu = createSlice({
    name: 'menu',
    initialState: {
        value: false,
    },
    reducers: {
        show: (state) => {
            state.value = true;
        },
        hide: (state) => {
            state.value = false;
        },
    },
});

export const { show, hide } = counterMenu.actions;

export default counterMenu.reducer;
