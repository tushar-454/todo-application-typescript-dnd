import SingleTodoCard from './SingleTodoCard';

const AllTodosCards = () => {
  return (
    <div className='mt-10 grid w-full grid-cols-1 justify-between  gap-5 px-4 md:grid-cols-2 lg:grid-cols-3 xl:w-2/3 xl:px-0'>
      {/* todo container  */}
      <div className='w-full border'>
        <h1 className='m-0 bg-slate-100 p-4 text-2xl font-black'>Todo</h1>
        <div>
          <SingleTodoCard />
        </div>
      </div>
      {/* ongoing container  */}
      <div className='w-full border'>
        <h1 className='m-0 bg-slate-100 p-4 text-2xl font-black'>Ongoing</h1>
        <div>
          <SingleTodoCard />
        </div>
      </div>
      {/* completed container  */}
      <div className='w-full border'>
        <h1 className='m-0 bg-slate-100 p-4 text-2xl font-black'>Completed</h1>
        <div>
          <SingleTodoCard />
        </div>
      </div>
    </div>
  );
};

export default AllTodosCards;
