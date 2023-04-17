import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice ({

    name:'login',
    initialState:{
        isLoggedIn:false,
        data: {}
    },

    reducers:{
        writerLogin(state,payload) {
            console.log("payload",payload.payload)
            state.isLoggedIn = true;
            state.data = payload.payload;
        },
        
        writerlogout(state) {
            state.isLoggedIn = false;
            state.data = {}
        },
    }
})

export const {writerLogin,writerlogout} = loginSlice.actions;
export default loginSlice.reducer;