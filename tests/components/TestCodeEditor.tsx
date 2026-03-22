import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CodeEditor } from '../../src/components/CodeEditor/CodeEditor';

describe('CodeEditor', () => {
  it('renders correctly with given value', () => {
    const handleChange = vi.fn();
    render(<CodeEditor value="console.log('test');" onChange={handleChange} />);
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe("console.log('test');");
  });

  it('calls onChange when typing', () => {
    const handleChange = vi.fn();
    render(<CodeEditor value="" onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');
    
    fireEvent.change(textarea, { target: { value: 'new code' } });
    expect(handleChange).toHaveBeenCalledWith('new code');
  });
});
