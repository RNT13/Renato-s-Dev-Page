import { configureStore } from '@reduxjs/toolkit'
import userGithubReducer from './slices/UserGithubSlice'

const store = configureStore({
  reducer: {
    userGithub: userGithubReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
