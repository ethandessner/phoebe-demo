import Counter from './components/Counter';
import TipCalculator from './components/TipCalculator';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-zinc-950 py-8 px-4">
      <main className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Phoebe Demo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Counter />
          <TipCalculator />
          <TemperatureConverter />
          <TodoList />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
