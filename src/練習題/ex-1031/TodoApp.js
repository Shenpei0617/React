import { useState } from 'react'

function TodoApp() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(['買牛奶', '學react'])

  return (
    <>
      <h1>Todo待辨事項</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // 加入輸入的文字到todos陣列中
            // 三步驟的方式(拷貝 -> 加入 -> 設定回state)
            const newTodos = [e.target.value, ...todos]
            setTodos(newTodos)

            // 清空文字輸入框
            setInputValue('')
          }
        }}
      />
      <ul>
        {todos.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp