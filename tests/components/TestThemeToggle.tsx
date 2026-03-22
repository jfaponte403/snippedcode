import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeToggle } from '../../src/components/ThemeToggle/ThemeToggle';

describe('ThemeToggle', () => {
  it('renders all available theme options', () => {
    render(<ThemeToggle theme="light" onChangeTheme={() => {}} />);
    const select = screen.getByRole('combobox');
    expect(select.children.length).toBeGreaterThan(0);
    // Should have light, dark, dracula
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('Dracula')).toBeInTheDocument();
  });

  it('calls onChangeTheme when a new option is selected', () => {
    const handleChange = vi.fn();
    render(<ThemeToggle theme="light" onChangeTheme={handleChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'dracula' } });
    
    expect(handleChange).toHaveBeenCalledWith('dracula');
  });
});
