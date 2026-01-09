import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props
    const hasTasks = true;

    if (!hasTasks) {
        return <div className="todo__empty-message"></div>
    }

    return (
      <ul className="todo__list">
        {tasks.map((task) => (
          <TodoItem 
            className="todo-item"
            key={task.id}
            task={task}
            onDeleteTaskButtonClick={() => onDeleteTaskButtonClick(task.id)}
            onTaskCompleteChange={onTaskCompleteChange}
            {...task}
          />
        ))}       
      </ul>
    )
}

export default TodoList