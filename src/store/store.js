import { configureStore } from '@reduxjs/toolkit'

import ticker from './Slice/tickerSlice.js'

export const store = configureStore({
  reducer: { ticker }
})
