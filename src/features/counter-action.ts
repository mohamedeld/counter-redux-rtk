import { createAction, createReducer } from "@reduxjs/toolkit";

type CountState = {
  count:number;
}

// type CountAction = ReturnType<typeof increment> | ReturnType<typeof decrement> | ReturnType<typeof reset>
type CountAction = 
  | {type:'INCREMENT' | 'DECREMENT'; payload:number}
  | {type:"RESET"};

export const increment = createAction('INCREMENT',(mount:number)=>{
  return {
    payload:mount
  }
})

export const counterReducer = createReducer({count:0},builder=>{
  builder.addCase(increment,(state,action)=>{
    state.count += action.payload;
  });
  builder.addCase(decrement,(state,action)=>{
    state.count -= action.payload;
  });
  builder.addCase(reset,(state,action)=>{
    state.count = 0;
  })
})

export const decrement = createAction('DECREMENT',(mount:number)=>{
  return {
    payload:mount
  }
})
export const reset = createAction('RESET');
export const reducer = (state:CountState,action:CountAction)=>{
  if(action.type === increment.type){
    return {
      count: state.count + action.payload
    }
  }
  if(action.type === decrement.type){
    return {
      count: state.count - action.payload
    }
  }
  if(action.type === reset.type){
    return {
      count:0 
    }
  }
}
