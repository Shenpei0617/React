//待辦事項拆出 編輯狀態
import { useState } from 'react'

function EditForm({ id, updateTodo, inputEditingValue, setInputEditingValue }) {
  return (
    <>
      <input
        type="text"
        value={inputEditingValue}
        onChange={(e) => {
          setInputEditingValue(e.target.value)
        }}
      />
      <button
        onClick={() => {
          updateTodo(id, {
            text: inputEditingValue,
            editing: false,
          })
        }}
      >
        儲存
      </button>
    </>
  )
}
export default EditForm
