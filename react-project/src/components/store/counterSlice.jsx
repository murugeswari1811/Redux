import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data:{
        firstName:"",
        lastName:"",
        email:"",
        subject:"",
        message:""
        
    }
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setData: (state, action) => {
        state.data = action.payload
      },
  },
})

export const { increment, decrement, incrementByAmount,setData } = counterSlice.actions

export default counterSlice.reducer