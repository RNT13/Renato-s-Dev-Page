import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Definindo o tipo do usuário do GitHub
interface GitHubUser {
  login: string
  name: string
  bio: string
  avatar_url: string
  public_repos: number
  followers: number
  following: number
}

// Definindo o tipo do estado do usuário
interface UserState {
  user: GitHubUser | null
  status: 'idle' | 'loading' | 'failed'
  isAuthenticated: boolean
  error: string | null
}

// Definir o estado inicial
const initialState: UserState = {
  user: null,
  status: 'idle',
  isAuthenticated: false,
  error: null
}

// Thunk assíncrono para buscar informações do usuário no GitHub
export const fetchGitHubUser = createAsyncThunk(
  'userGithub/fetchGitHubUser',
  async (username: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }
      const data = await response.json()
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      } else {
        return rejectWithValue('An unknown error occurred')
      }
    }
  }
)

// Criando o slice com reducers e extraReducers
const userGithubSlice = createSlice({
  name: 'userGithub',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout(state) {
      state.user = null
      state.isAuthenticated = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubUser.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchGitHubUser.fulfilled, (state, action) => {
        state.status = 'idle'
        state.user = action.payload
      })
      .addCase(fetchGitHubUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload as string
      })
  }
})

export const { setUser, logout } = userGithubSlice.actions

export default userGithubSlice.reducer
