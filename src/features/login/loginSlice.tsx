import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginInitialState {
    user_info: any,
    user_token: string,
    loading: boolean,
    error: any,
    success: boolean
}

const initialState: LoginInitialState = {
    user_info: null,
    user_token: "",
    loading: false,
    error: null,
    success: false
}

export const loginSlice = createSlice({
  name: 'auth_login_authenticate',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = loginSlice.actions

export default loginSlice.reducer