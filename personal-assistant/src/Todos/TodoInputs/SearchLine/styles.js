import styled from 'styled-components'

export const Line = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 30px;
    padding: 10px;
    margin-top: 10px;
`
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
export const Search = styled.input`
    border: 1px solid grey;
    border-radius: 3px;
    flex: 4;
    height: 40px;
    margin-right: 10px;
    padding-left: 10px;
`
