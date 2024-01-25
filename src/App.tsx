import HeadTitle from './Components/HeadTitle';
import TaskAddComponent from './Components/TodoAddComponent';

const App: React.FC = () => {
  return (
    <main className='h-screen w-screen bg-sky-300 px-4 lg:px-0'>
      <HeadTitle />
      <TaskAddComponent />
    </main>
  );
};

export default App;
