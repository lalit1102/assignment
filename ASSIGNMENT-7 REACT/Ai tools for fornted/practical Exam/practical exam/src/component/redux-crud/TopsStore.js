import React from 'react'
import { createStore } from 'redux'
import TopsReducer from './TopsReducer'

const TopsStore = createStore(TopsReducer)
 
export default TopsStore
