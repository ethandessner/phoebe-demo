'use client';

import { useState } from 'react';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');

  const convertToFahrenheit = () => {
    const c = parseFloat(celsius) || 0;
    const f = (c * 9) / 5 + 32;
    return f.toFixed(1);
  };

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Temperature Converter</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Celsius
          </label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
            placeholder="0"
          />
        </div>
        <div className="pt-2">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Fahrenheit: {convertToFahrenheit()}°F
          </p>
        </div>
      </div>
    </div>
  );
}
