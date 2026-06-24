'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Counter</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          −
        </button>
        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 min-w-[3rem] text-center">
          {count}
        </span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}
