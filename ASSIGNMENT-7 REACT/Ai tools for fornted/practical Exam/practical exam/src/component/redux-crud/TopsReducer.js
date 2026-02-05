import React from 'react'
import { del, edi, ins, upd } from './TopsAction'

const initialstate = {
  data:[]
}

const TopsReducer = (state=initialstate,action) => {
  switch (action.type) {
    case ins:
      return {
        ...state,
        data:[...state,action.payload]
      }
      case upd:
        return {
          ...state,
          data:state.data.map((i,index)=>{
            (index==action.payload.id)?action.payload.data:i
          })
        }

      case del:
        return {
          ...state,
          data:state.data.filter((i,index)=>{
            index !== action.payload

          })
        }

      case edi:
        return {
          ...state,
          data:state.data.find((i,index)=>{
            index === action.payload
          })
        }
     
  
    default:
     
  }
  
}

export default TopsReducer
