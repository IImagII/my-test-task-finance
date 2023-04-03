import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { io } from 'socket.io-client'

import { paths } from '../../paths'

export const fetchTickerData = createAsyncThunk(
  'ticker/fetchTickerData',
  async () => {
    return new Promise((resolve) => {
      const socket = io(`${paths.url}`)
      socket.emit('start')
      socket.on('ticker', (response) => {
        // console.log('🚀 ~ response:', response)
        resolve(response)
      })
    })
  }
)

const tickerSlice = createSlice({
  name: 'ticker',
  initialState: {
    data: []
  },
  reducers: {},
  extraReducers: {
    [fetchTickerData.fulfilled]: (state, action) => {
      state.data = action.payload
      console.log('🚀 ~ state.data:', state.data)
    }
  }
})

export default tickerSlice.reducer
