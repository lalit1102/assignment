import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  data: [],
};

const LalitReducer = createSlice({
  name:"user",
  initialState,
  reducers:{
    ins:(state,action)=>{
      state.data = [...state.data,action.payload]
    },
    upd:(state,action)=>{
      state.data = state.data.map((i,index)=>
      index == action.payload.id 
      ? i= action.payload.data
      : i
      )
    },
     del:(state,action)=>{
      state.data = state.data.filter((i,index)=>index!=action.payload)
    },
  }
});

export const {ins,del,upd} = LalitReducer.actions
export default LalitReducer.reducer
