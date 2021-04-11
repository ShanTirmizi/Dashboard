import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getData = createAsyncThunk(
  'data/getData',
  async () => {
    const response = await fetch("http://console-api.tracmobility.com/test/vehicles")
    const data = await response.json()
    return data
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
})

export const { status } = dataSlice.actions

export default dataSlice.reducer