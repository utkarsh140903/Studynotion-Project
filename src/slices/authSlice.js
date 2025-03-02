import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    signupData: null,
    loading: false,
    // localStorage k bina bhi chalaya ja skta hai
    token : localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')): null,
};
 
const authSlice = createSlice({
    name : 'auth',
    initialState: initialState,
    reducers: {
        setToken(state,value){
            state.token = value.payload;
        },
        setLoading(state,value){
            state.loading = value.payload;
        },
        setSignupData(state,value){
            state.signupData= value.payload;
        }
    },
});

export const {setToken , setSignupData,setLoading} = authSlice.actions;
export default authSlice.reducer;
