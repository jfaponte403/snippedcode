import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeToggle } from '../../src/components/ThemeToggle/ThemeToggle';

describe('ThemeToggle', () => {
  it('renders all available theme options', () => {
    render(<ThemeToggle theme="light" onChangeTheme={() => {}} />);
    const select = screen.getByRole('combobox');
    expect(select.children.length).toBe(2);
    // Should have light, dark
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.queryByText('Dracula')).not.toBeInTheDocument();
  });

  it('calls onChangeTheme when a new option is selected', () => {
    const handleChange = vi.fn();
    render(<ThemeToggle theme="light" onChangeTheme={handleChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'dark' } });
    
    expect(handleChange).toHaveBeenCalledWith('dark');
  });
});
