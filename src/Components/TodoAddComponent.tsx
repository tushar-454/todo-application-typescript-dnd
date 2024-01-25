import { useState } from 'react';
import Todo from '../Model/Todo';
import AllTodosCards from './AllTodosCards';
import TaskAddForm from './TodoAddForm';

const TodoAddComponent = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: 'todo' }]);
      setTodo('');
    }
  };
  return (
    <div className='my-5 flex flex-col items-center gap-3'>
      <h1 className='text-2xl font-bold'>Add your todo</h1>
      <TaskAddForm
        todo={todo}
        setTodo={setTodo}
        handleAddTodo={handleAddTodo}
      />
      <AllTodosCards todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoAddComponent;
