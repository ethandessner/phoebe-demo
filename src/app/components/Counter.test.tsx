import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Counter from './Counter';

describe('Counter', () => {
  it('should decrease count when minus button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    // Initial count should be 0
    expect(screen.getByText('0')).toBeInTheDocument();

    // Click the minus button
    const minusButton = screen.getByRole('button', { name: '−' });
    await user.click(minusButton);

    // Count should now be -1
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});
