import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getData = createAsyncThunk(
  'data/getData',
  async () => {
    // try {
      const response = await fetch("http://console-api.tracmobility.com/test/vehicles")
      const data = await response.json()
      return data
    // } catch (error) {
    //   return console.log(error)
      
    // }
  }
)
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    vehicleData: [],
    status: null,
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.status = 'loading'
    },
    [getData.fulfilled]: (state, action) => {
      state.vehicleData.push(action.payload)
      state.status = 'success'
    },
    [getData.rejected]: (state) => {
      state.status = 'rejected'
    },
  },
  // reducers: {
  //   increment: (state) => {
  //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //     // doesn't actually mutate the state because it uses the Immer library,
  //     // which detects changes to a "draft state" and produces a brand new
  //     // immutable state based off those changes
  //     state.vehicleData += 1
  //   },
  //   decrement: (state) => {
  //     state.vehicleData -= 1
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.vehicleData += action.payload
  //   },
  // },
})

// Action creators are generated for each case reducer function
export const { status } = dataSlice.actions

export default dataSlice.reducer