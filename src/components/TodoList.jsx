import React, { useState } from "react"
import TodoForm from "./TodoForm"
import Todo from "./Todo"

function TodoList() {
  const spaceRegex = /^\s*$/
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text || spaceRegex.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || spaceRegex.test(newValue.text)) {
      return
    }

    setTodos(prevTodo =>
      prevTodo.map(item => {
        return item.id === todoId ? newValue : item
      })
    )
  }

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removedArr)
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  )
}

export default TodoList
