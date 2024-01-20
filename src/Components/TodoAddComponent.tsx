import TaskAddForm from './TodoAddForm';

const TodoAddComponent = () => {
  return (
    <div className='my-5 flex flex-col items-center gap-3'>
      <h1 className='text-2xl font-bold'>Add your todo</h1>
      <TaskAddForm />
    </div>
  );
};

export default TodoAddComponent;
