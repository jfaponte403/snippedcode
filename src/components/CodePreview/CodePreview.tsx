import { useMemo } from 'react';
import hljs from 'highlight.js';
import githubLightUrl from 'highlight.js/styles/github.css?url';
import githubDarkUrl from 'highlight.js/styles/github-dark.css?url';
import './CodePreview.css';

interface CodePreviewProps {
  code: string;
  theme: 'light' | 'dark';
  language: string;
}

export function CodePreview({ code, theme, language }: CodePreviewProps) {
  const highlightedCode = useMemo(() => {
    if (!code.trim()) return ' ';
    try {
      if (language && language !== 'text') {
        return hljs.highlight(code, { language, ignoreIllegals: true }).value;
      }
      return hljs.highlightAuto(code).value;
    } catch (e) {
      return code; // Fallback to raw code
    }
  }, [code, language]);

  return (
    <div className={`preview-container ${theme}`} id="code-preview-capture">
      <link rel="stylesheet" href={theme === 'dark' ? githubDarkUrl : githubLightUrl} />
      <div className="mac-buttons">
        <span className="mac-btn close"></span>
        <span className="mac-btn minimize"></span>
        <span className="mac-btn maximize"></span>
      </div>
      <pre>
        <code 
          className={`hljs language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
}
