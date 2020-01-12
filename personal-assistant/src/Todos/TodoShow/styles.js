import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: 3px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  transition: all 0.25s;

  &.collapse {
    width: 10%;
    opacity: 0.0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.greyClick};
    width: 70%;
  }
`

export const SmallClearButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  text-align: center;
  height: 30px;
  width: 30px;
  border: none;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.redClick};
    cursor: pointer;
  }
`

export const TodoText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: large;
  color: white;
  align-self: flex-end;
  margin-left: 20px;
`
export const Li = styled.li`
  &.show {
  opacity: 1;
  transform: none;
  transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
}
`

export const TodoLink = styled(Link)`
    text-decoration: none;
    flex: 1;


`
