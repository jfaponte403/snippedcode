import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CodePreview } from '../../src/components/CodePreview/CodePreview';
import hljs from 'highlight.js';

vi.mock('highlight.js', () => ({
  default: {
    highlight: vi.fn().mockReturnValue({ value: 'mocked_html' }),
    highlightAuto: vi.fn().mockReturnValue({ value: 'mocked_html' }),
  }
}));

describe('CodePreview', () => {
  it('applies the correct theme class', () => {
    const { container } = render(<CodePreview code="console.log();" theme="dark" language="javascript" />);
    // The main container has preview-container and dark
    const div = container.querySelector('.preview-container');
    expect(div?.classList.contains('dark')).toBe(true);
  });

  it('calls highlight.js on mount and code change', () => {
    const { rerender } = render(<CodePreview code="first" theme="light" language="javascript" />);
    expect(hljs.highlight).toHaveBeenCalled();
    
    rerender(<CodePreview code="second" theme="light" language="javascript" />);
    expect((hljs.highlight as import('vitest').Mock).mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
