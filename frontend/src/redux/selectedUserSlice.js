import { createSlice } from "@reduxjs/toolkit";
 import { useSelector } from "react-redux";
const selectedUserSlice= createSlice({
    name:"selectedUserSlice" ,
    initialState :{
       selectedUser: null   
    },
    
    reducers:{
        selectUser:(state,action)=>{
           state.selectedUser=  action.payload ;
        }
    }
})
export const {selectUser}= selectedUserSlice.actions 
export default selectedUserSlice.reducer