import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useTheme } from '../../src/hooks/useTheme';

describe('useTheme hook', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.className = '';
  });

  it('initializes with default light theme if no media query match', () => {
    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
      })),
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    expect(document.body.className).toBe('theme-light');
  });

  it('changes theme properly', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.changeTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.body.className).toBe('theme-dark');
  });
});
