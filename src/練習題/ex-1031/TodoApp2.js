import { useState } from 'react'
import './TodoApp.css'

import AddForm from './AddForm'
import TodoList from './TodoList'

function TodoApp() {
  // 編輯用
  const [inputEditingValue, setInputEditingValue] = useState('')

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: true,
      editing: false,
    },
    { id: 2, text: '學react', completed: false, editing: false },
  ])

  const addTodo = (text) => {
    // id
    // 1. 用加入當下的時間微秒值(ps. 不適合多人使用系統)
    // 2. id是均是數字，可求出最大值後遞增
    // 3. 隨機產生函式庫 例如 uuid/nanoid 等函式庫
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    }
    // 加入輸入的文字到todos陣列中
    // 三步驟的方式(拷貝 -> 加入到新陣列中 -> 設定回state)
    const newTodos = [newTodo, ...todos]

    setTodos(newTodos)
  }

  // 用在某個id項目，切換completed屬性true/false
  const toggleTodoCompleted = (id) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, completed: !v.completed }

      return { ...v }
    })

    setTodos(newTodos)
  }

  // 用在某個id項目，切換editing屬性true/false
  const toggleTodoEditing = (id) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, editing: !v.editing }
      //這裡要設定其它項目 editing:false，同時間只有一個被編輯
      return { ...v, editing: false }
    })

    setTodos(newTodos)
  }

  // 用在某個id項目改變為某值用，儲存新的值用
  const updateTodo = (id, objectValue) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, ...objectValue }

      return { ...v }
    })

    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((v, i) => {
      return v.id !== id
    })

    setTodos(newTodos)
  }

  return (
    <>
      <h1>Todo待辨事項</h1>
      <AddForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        toggleTodoEditing={toggleTodoEditing}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default TodoApp
