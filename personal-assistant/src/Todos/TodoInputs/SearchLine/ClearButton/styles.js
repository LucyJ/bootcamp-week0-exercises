import styled from 'styled-components'

export const Clear = styled.button`
    flex: 3;
    border: none;
    border-radius: 3px;
    background-color: #d13232;
    height: 40px;
    font-family: ${({ theme }) => theme.fonts.standard};
    font-weight: bold;
    color: white;
    transition: all 0.225s;

    &:hover{
        background-color: #8c0404;
        cursor: pointer;
        color: white;
        flex: 4;
    }
`
