import styled from 'styled-components'

export const WelcomeText = styled.h1`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: black;
    padding: 10px;
    text-align: center;

`

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`
