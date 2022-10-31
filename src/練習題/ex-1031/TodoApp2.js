//待辦事項
//整理統一API
//增加編輯功能

import { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
  const [inputValue, setInputValue] = useState('')
  // 處理要避開輸入法拼字用Enter的指標
  const [isComposition, setIsComposition] = useState(false)

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
    // 2. id是均是數字，可求出最大值遞增
    // 3. 隨機產生函式庫 例如 uuid/nanoid 等函式庫
    // id: Number(new Date()) 把ID設為現在加入的時間
    const newTodoId = {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    }

    // 加入輸入的文字到todos陣列中
    // 三步驟的方式(拷貝 ->  加入到新陣列中 -> 設定回state)
    const newTodos = [newTodoId, ...todos]
    setTodos(newTodos)
  }

  // 用在某個id項目 true/false互換
  const toggleTodoCompleted = (id) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, completed: !v.completed }

      return { ...v }
    })

    setTodos(newTodos)
  }

  // 用在某個id項目 true/false互換
  const toggleTodoEditing = (id) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, editing: !v.editing }
      //這裡要關掉其它編輯中的，同時間只有一個被編輯
      return { ...v, editing: false }
    })

    setTodos(newTodos)
  }

  // 用在某個id項目改變為某值用，合併物件值
  const updateTodo = (id, objectValue) => {
    // step1:  拷貝出新的物件陣列
    // step2: 在新的物件陣列上修改
    const newTodos = todos.map((v, i) => {
      //  computed property names: [property]:xxx
      // v.completed = v["completed"]
      if (v.id === id) return { ...v, ...objectValue }

      return { ...v }
    })

    // step3: 設定回state
    setTodos(newTodos)
  }
  const deleteTodo = (id) => {
    // step1:  拷貝出新的物件陣列
    // step2: 在新的物件陣列上修改
    const newTodos = todos.filter((v, i) => {
      return v.id !== id
    })

    // step3: 設定回state
    setTodos(newTodos)
  }

  return (
    <>
      <h1>Todo待辨事項</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        // 中文輸入法用
        onCompositionStart={() => {
          setIsComposition(true)
        }}
        onCompositionEnd={() => {
          setIsComposition(false)
        }}
        onKeyDown={(e) => {
          // 中文輸入期間不會加入到列表中
          if (e.key === 'Enter' && isComposition === false) {
            addTodo(e.target.value)
            // 清空文字輸入框
            setInputValue('')
          }
        }}
      />
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
                <input
                  type="text"
                  value={inputEditingValue}
                  onChange={(e) => {
                    setInputEditingValue(e.target.value)
                  }}
                />
              ) : (
                v.text
              )}
              {v.editing ? (
                <button
                  onClick={() => {
                    updateTodo(v.id, {
                      text: inputEditingValue,
                      editing: false,
                    })
                  }}
                >
                  儲存
                </button>
              ) : (
                <button
                  onClick={() => {
                    toggleTodoEditing(v.id, 'editing')
                    setInputEditingValue(v.text)
                  }}
                >
                  編輯
                </button>
              )}
              <button
                onClick={() => {
                  deleteTodo(v.id)
                }}
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
