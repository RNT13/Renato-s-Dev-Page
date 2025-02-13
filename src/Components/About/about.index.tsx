import { RootState } from '@reduxjs/toolkit/query'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { GlobalContainer, TitleH2, TitleH3 } from '../../Styles/globalStyle'
import { media } from '../../Styles/media'
import { fetchGitHubUser } from '../../redux/userGithubSlice'

const AvatarImg = styled.img`
  position: relative;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  top: -120px;
  z-index: 1;

  ${media.md} {
    width: 220px;
    height: 220px;
  }

  ${media.sm} {
    width: 200px;
    height: 200px;
  }
`
const AvatarName = styled.h2`
  margin-top: -70px;
  margin-bottom: 16px;
  font-size: 3.5em;

  ${media.md} {
    font-size: 3em;
  }

  ${media.sm} {
    font-size: 2.5em;
  }
`
const About: React.FC = () => {
  const dispatch = useDispatch()
  const githubUser = useSelector((state: RootState) => state.userGithub.user)
  const githubStatus = useSelector(
    (state: RootState) => state.userGithub.status
  )

  useEffect(() => {
    dispatch(fetchGitHubUser('RNT13'))
  }, [dispatch])

  if (githubStatus === 'loading') {
    return <div>Loading...</div>
  }

  if (githubStatus === 'failed') {
    return <div>Failed to load user data.</div>
  }

  return (
    <GlobalContainer>
      {githubStatus === 'loading' && <p>Loading...</p>}
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
