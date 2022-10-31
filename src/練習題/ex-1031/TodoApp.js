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
            // 三步驟的方式(拷貝 ->  加入到新陣列中 -> 設定回state)
            // id: Number(new Date()) 把ID設為現在加入的時間
            const newTodoId = { id: Number(new Date()), text: e.target.value }
            const newTodos = [newTodoId, ...todos]
            setTodos(newTodos)

            // 清空文字輸入框
            setInputValue('')
          }
        }}
      />
      <ul>
        {todos.map((v, i) => {
          // 因為TODO不像日期一樣是固定的，所以key值會因索引值變後會變化，不能用索引值當key
          return <li key={v.id}>{v.text}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
