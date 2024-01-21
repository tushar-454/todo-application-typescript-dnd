import { Resolver, useForm } from 'react-hook-form';
import AllTodosCards from './AllTodosCards';
type FormValues = {
  todo: string;
};
const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.todo ? values : {},
    errors: !values.todo
      ? {
          todo: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : values.todo.length < 5
        ? {
            todo: {
              type: 'required',
              message: 'Must need 5 cherecters',
            },
          }
        : {},
  };
};

const TodoAddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  // handle form submit
  const onSubmit = handleSubmit((event) => console.log(event));
  return (
    <>
      <form
        onSubmit={onSubmit}
        className='flex w-full items-start justify-center gap-5 md:w-2/3 xl:w-1/2'
      >
        <div>
          <input
            {...register('todo')}
            type='text'
            name='todo'
            id='todo'
            placeholder='Today I will learn TypeScript'
            className={`w-full rounded border-none bg-slate-100 px-3 py-2 text-xl outline-none focus:border focus:border-slate-300`}
          />
          {errors.todo && (
            <p className='font-semibold text-red-500'>{errors.todo.message}</p>
          )}
        </div>
        <button
          type='submit'
          className='rounded bg-orange-500 px-5 py-2 text-xl font-bold text-white transition duration-75 active:scale-95'
        >
          Add
        </button>
      </form>
      <AllTodosCards />
    </>
  );
};

export default TodoAddForm;
