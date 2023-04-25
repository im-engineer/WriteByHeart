import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice ({

    name:'login',
    initialState:{
        isLoggedIn:false,
        data: {}
    },

    reducers:{
        adminLogin(state,payload) {
            console.log("payload",payload.payload)
            state.isLoggedIn = true;
            state.data = payload.payload;
        },
        
        adminLogout(state) {
            state.isLoggedIn = false;
            state.data = {}
        },
    }
})

export const {adminLogin,adminLogout} = loginSlice.actions;
export default loginSlice.reducer;