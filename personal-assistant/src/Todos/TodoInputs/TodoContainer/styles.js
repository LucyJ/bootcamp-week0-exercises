import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 30px;
    padding: 10px;
    margin-top: 30px;
`
export const InputStyle = styled.input`
  background: lightgrey;
  border: none;
  border-radius: 2px;
  height: 40px;
  flex: 2;
  margin-right: 5px;
  padding-left: 10px;
  
`
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
