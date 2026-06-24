'use client';

import { useState } from 'react';

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('');

  const calculateTotal = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = parseFloat(tipPercent) || 0;
    // BUG: Forgot to divide tip by 100
    const total = bill + (bill * tip);
    return total.toFixed(2);
  };

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Tip Calculator</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Bill Amount ($)
          </label>
          <input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Tip (%)
          </label>
          <input
            type="number"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
            placeholder="15"
          />
        </div>
        <div className="pt-2">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Total: ${calculateTotal()}
          </p>
        </div>
      </div>
    </div>
  );
}
