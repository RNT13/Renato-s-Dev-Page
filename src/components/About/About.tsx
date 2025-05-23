import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGitHubUser } from "../../redux/slices/userGithubSlice"
import { AppDispatch, RootState } from "../../redux/store"
import { GlobalContainer, TitleH2, TitleH3 } from "../../styles/globalStyle"
import { AvatarImg, AvatarName } from "./AboutStyles"


const About: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const githubUser = useSelector((state: RootState) => state.userGithub.user)
  const githubStatus = useSelector(
    (state: RootState) => state.userGithub.status
  )
  const githubError = useSelector((state: RootState) => state.userGithub.error)

  useEffect(() => {
    dispatch(fetchGitHubUser('RNT13'))
  }, [dispatch])

  if (githubStatus === 'loading') {
    return <div>Loading...</div>
  }

  if (githubStatus === 'failed') {
    return <div>Failed to load user data: {githubError}</div>
  }

  return (
    <GlobalContainer>
      {githubUser && (
        <>
          <AvatarImg src={githubUser.avatar_url} alt={githubUser.login} />
          <AvatarName>{githubUser.name}</AvatarName>
          <TitleH2>{`Public Repos: ${githubUser.public_repos}`}</TitleH2>
          <TitleH3>{`Followers: ${githubUser.followers} | Following: ${githubUser.following}`}</TitleH3>
          <TitleH2>Full stack python developer</TitleH2>
          <TitleH3>{githubUser.bio}</TitleH3>
        </>
      )}
    </GlobalContainer>
  )
}

export default About
