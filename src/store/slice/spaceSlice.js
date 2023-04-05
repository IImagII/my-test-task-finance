import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const axiosData = createAsyncThunk('space/axiosData', async () => {
  try {
    const { data } = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles`
    )

    return data.slice(0, 6)
  } catch (error) {
    return console.log(error)
  }
})

const initialState = {
  items: [],
  status: false
}

export const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(axiosData.pending, (state) => {
        state.status = false
      })
      .addCase(axiosData.fulfilled, (state, action) => {
        state.status = true
        state.items = action.payload
      })
      .addCase(axiosData.rejected, (state) => {
        state.status = true
      })
  }
})

export default spaceSlice.reducer
