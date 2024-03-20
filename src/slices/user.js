import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState:{
        condition: 'not found'
    },
    reducers: {
        find:(state) => {
            state.condition = 'found'
        },
        lose: (state) => {
            state.condition = 'lost'
        }
    }
})

export const userActions = userSlice.actions;
export const reducer = userSlice.reducer;