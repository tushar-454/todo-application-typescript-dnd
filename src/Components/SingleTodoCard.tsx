import Todo from '../Model/Todo';

interface SingleTodoCardProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  todos: Todo[];
}

const SingleTodoCard: React.FC<SingleTodoCardProps> = ({
  todo,
  setTodos,
  todos,
}) => {
  const handleDone = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone:
            todo.isDone === 'todo'
              ? 'ongoing'
              : todo.isDone === 'ongoing'
                ? 'completed'
                : 'todo',
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1 className={todo.isDone === 'completed' ? 'line-through' : ''}>
        {todo.todo}
      </h1>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
      <button onClick={() => handleDone(todo.id)}>
        {todo.isDone === 'todo'
          ? 'Ongoing'
          : todo.isDone === 'ongoing'
            ? 'Done'
            : ''}
      </button>
    </div>
  );
};

export default SingleTodoCard;
