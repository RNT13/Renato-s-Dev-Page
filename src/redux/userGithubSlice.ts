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
}

// Definir o estado inicial
const initialState: UserState = {
  user: null,
  status: 'idle',
  isAuthenticated: false
}

// Thunk assíncrono para buscar informações do usuário no GitHub
export const fetchGitHubUser = createAsyncThunk(
  'userGithub/fetchGitHubUser',
  async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    return data
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
        console.log('GitHub user loading...')
        state.status = 'loading'
      })
      .addCase(fetchGitHubUser.fulfilled, (state, action) => {
        console.log('GitHub user fetched successfully:', action.payload)
        state.status = 'idle'
        state.user = action.payload
      })
      .addCase(fetchGitHubUser.rejected, (state) => {
        console.log('GitHub user fetch failed')
        state.status = 'failed'
      })
  }
})

// Exportando as ações
export const { setUser, logout } = userGithubSlice.actions

// Exportando o reducer
export default userGithubSlice.reducer
