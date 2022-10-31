function TodoItem({ id, text, toggleTodoEditing, setInputEditingValue }) {
  return (
    <>
      {text}
      <button
        onClick={() => {
          // 切換編輯state
          toggleTodoEditing(id)
          //編輯文字輸入框中文字設為text
          setInputEditingValue(text)
        }}
      >
        編輯
      </button>
    </>
  )
}

export default TodoItem
