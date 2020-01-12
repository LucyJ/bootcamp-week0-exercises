import styled from 'styled-components'
import {
  Link,
} from 'react-router-dom'

export const NaviButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.grey};
    height: 50px;
    flex: 1;
    width:100%;
    padding: 2px;
    color: white;
    font-family: ${({ theme }) => theme.fonts.standard};
    font-weight: bold;
    font-size: 20px;
    transition: all 0.5s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.greyClick};
        font-size: 40px;
        cursor: pointer;
    }
`

export const NavLink = styled(Link)`
    flex: 1;
`
