import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useLanguageDetection } from '../../src/hooks/useLanguageDetection';

describe('useLanguageDetection', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('detects language after debounce', () => {
    // javascript detection
    const { result } = renderHook(() => useLanguageDetection('const x = 1;', 300));
    
    expect(result.current).toBe('text'); // initial state

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // highlight.js will likely detect it as javascript or typescript
    expect(['javascript', 'typescript']).toContain(result.current);
  });
});
