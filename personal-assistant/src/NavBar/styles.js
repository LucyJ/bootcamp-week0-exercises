import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    background: ${({ theme }) => theme.colors.grey};
`
