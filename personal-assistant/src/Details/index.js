import React from 'react'
import { useParams } from 'react-router-dom'


const Details = ({ todos, setTodos }) => {
  const { id } = useParams()
  return (
    todos.filter(t => t.key === id).map(t => <p>{t.todo}</p>)
  )
}

export default Details
