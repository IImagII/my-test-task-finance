import { configureStore } from '@reduxjs/toolkit'

import space from './slice/spaceSlice'

export const store = configureStore({
  reducer: { space }
})
