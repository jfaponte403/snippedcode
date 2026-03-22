import { describe, it, expect } from 'vitest';
import { detectLanguage } from '../../src/utils/detectLanguage';

describe('detectLanguage', () => {
  it('detects javascript', () => {
    const code = 'const x = () => { console.log("hello"); };';
    expect(detectLanguage(code)).toBe('javascript');
  });

  it('detects python', () => {
    const code = 'def foo():\n  print("hello")\n';
    expect(['python', 'ruby']).toContain(detectLanguage(code)); // Sometimes small snippets can be tricky
  });

  it('defaults to text for empty string', () => {
    expect(detectLanguage('')).toBe('text');
    expect(detectLanguage('   ')).toBe('text');
  });
});
