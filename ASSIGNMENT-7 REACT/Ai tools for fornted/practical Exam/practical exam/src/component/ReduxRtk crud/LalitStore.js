import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import LalitReducer from "./LalitReducer"

const LalitStore = configureStore({
  reducer:{
    "user": LalitReducer
  }
})

export default LalitStore
