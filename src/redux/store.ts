import { configureStore } from '@reduxjs/toolkit'
import userGithubReducer from './slices/UserGithubSlice'

const Store = configureStore({
  reducer: {
    userGithub: userGithubReducer
  }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

export default Store
