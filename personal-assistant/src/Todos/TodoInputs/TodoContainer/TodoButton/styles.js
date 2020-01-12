import styled from 'styled-components'

export const AddButton = styled.button`
    border: none;
    border-radius: 3px;
    flex: 1;
    height: 40px;
    background: #4389fa;
    font-family: ${({ theme }) => theme.fonts.standard};
    font-weight: bold;
    color: white;
    transition: all 0.225s;

    &:hover{
        background: #175fd4;
        flex: 2;
    }
`
