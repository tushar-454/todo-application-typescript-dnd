const TodoAddForm = () => {
  return (
    <form className='flex w-full items-center justify-center gap-5 md:w-2/3 xl:w-1/2'>
      <input
        type='text'
        name='todo'
        id='todo'
        placeholder='Today I will learn TypeScript'
        className={`w-full rounded border-none bg-slate-100 px-3 py-2 text-xl outline-none focus:border focus:border-slate-300`}
      />
      <button
        type='submit'
        className='rounded bg-orange-500 px-5 py-2 text-xl font-bold text-white transition duration-75 active:scale-95'
      >
        Add
      </button>
    </form>
  );
};

export default TodoAddForm;
