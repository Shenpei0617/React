import TodoItem from './TodoItem'

function TodoList({
  todos,
  toggleTodoCompleted,
  toggleTodoEditing,
  updateTodo,
  deleteTodo,
}) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          // 重要！ key值會因索引值變後也會改變，這裡不能用索引值當key
          return (
            <TodoItem
              key={v.id}
              todo={v}
              toggleTodoCompleted={toggleTodoCompleted}
              toggleTodoEditing={toggleTodoEditing}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList