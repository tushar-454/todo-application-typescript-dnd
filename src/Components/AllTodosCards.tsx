import Todo from '../Model/Todo';
import SingleTodoCard from './SingleTodoCard';

interface AllTodosCardsProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AllTodosCards: React.FC<AllTodosCardsProps> = ({ todos, setTodos }) => {
  return (
    <div className='mt-10 grid w-full grid-cols-1 justify-between  gap-5 px-4 md:grid-cols-2 lg:grid-cols-3 xl:w-2/3 xl:px-0'>
      {/* todo container  */}
      <div className='w-full border'>
        <h1 className='m-0 bg-slate-100 p-4 text-2xl font-black'>Todo</h1>
        <div>
          {todos
            .filter((todo) => todo.isDone === 'todo')
            .map((todo) => (
              <SingleTodoCard
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
        </div>
      </div>
      {/* ongoing container  */}
      <div className='w-full border'>
        <h1 className='m-0 bg-slate-100 p-4 text-2xl font-black'>Ongoing</h1>
        <div>
          {todos
            .filter((todo) => todo.isDone === 'ongoing')
            .map((todo) => (
              <SingleTodoCard
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
        </div>
      </div>
      {/* completed container  */}
      <div className='w-full border'>
        <h1 className='m-0 bg-slate-100 p-4 text-2xl font-black'>Completed</h1>
        <div>
          {todos
            .filter((todo) => todo.isDone === 'completed')
            .map((todo) => (
              <SingleTodoCard
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllTodosCards;
