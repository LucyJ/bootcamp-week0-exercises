import React from 'react'
import { WelcomeText, HomeContainer } from './styles'
import Weather from './Weather'

const Home = () => {
  const placeholder = 1

  return (
    <HomeContainer>
      <WelcomeText>Hello</WelcomeText>
      <Weather />
    </HomeContainer>
  )
}

export default Home
