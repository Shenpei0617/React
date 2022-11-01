import { useState } from 'react'
import EditForm from './EditForm'
import TodoItem from './TodoItem'

function TodoList({
  todos,
  toggleTodoCompleted,
  toggleTodoEditing,
  updateTodo,
  deleteTodo,
}) {
  const [inputEditingValue, setInputEditingValue] = useState('')

  return (
    <>
      <ul>
        {todos.map((v, i) => {
          //  重要！ key值會因索引值變後也會改變，這裡不能用索引值當key
          return (
            <li
              key={v.id}
              className={v.completed ? 'completed' : 'not-completed'}
            >
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  toggleTodoCompleted(v.id, 'completed')
                }}
              />
              {v.editing ? (
                <EditForm
                  id={v.id}
                  updateTodo={updateTodo}
                  inputEditingValue={inputEditingValue}
                  setInputEditingValue={setInputEditingValue}
                />
              ) : (
                <TodoItem
                  id={v.id}
                  text={v.text}
                  toggleTodoEditing={toggleTodoEditing}
                  setInputEditingValue={setInputEditingValue}
                />
              )}
              <button
                onClick={() => {
                  deleteTodo(v.id)
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default TodoList
