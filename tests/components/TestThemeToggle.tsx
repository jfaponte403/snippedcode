import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeToggle } from '../../src/components/ThemeToggle/ThemeToggle';

describe('ThemeToggle', () => {
  it('displays correct text for light theme', () => {
    render(<ThemeToggle theme="light" onToggle={() => {}} />);
    expect(screen.getByText('🌙 Dark Mode')).toBeInTheDocument();
  });

  it('displays correct text for dark theme', () => {
    render(<ThemeToggle theme="dark" onToggle={() => {}} />);
    expect(screen.getByText('☀️ Light Mode')).toBeInTheDocument();
  });

  it('calls onToggle when clicked', () => {
    const handleToggle = vi.fn();
    render(<ThemeToggle theme="light" onToggle={handleToggle} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleToggle).toHaveBeenCalled();
  });
});
