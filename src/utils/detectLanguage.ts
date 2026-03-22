import hljs from 'highlight.js';

export function detectLanguage(code: string): string {
  if (!code.trim()) {
    return 'text';
  }
  try {
    const COMMON_LANGUAGES = ['javascript', 'typescript', 'python', 'java', 'c', 'cpp', 'ruby', 'go', 'rust', 'html', 'css', 'json', 'bash'];
    const result = hljs.highlightAuto(code, COMMON_LANGUAGES);
    return result.language || 'text';
  } catch (e) {
    return 'text';
  }
}
