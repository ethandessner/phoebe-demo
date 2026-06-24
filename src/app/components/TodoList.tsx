'use client';

import { useState } from 'react';

export default function TodoList() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleAdd = () => {
    if (todoText.trim()) {
      setTodos([...todos, todoText]);
      // BUG: Not clearing the input field after adding
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Todo List</h2>
      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
            placeholder="Enter a todo item"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
        {todos.length > 0 && (
          <ul className="space-y-2 mt-3">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 rounded text-gray-900 dark:text-gray-100"
              >
                {todo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
