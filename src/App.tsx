import { useState } from 'react';
import { CodeEditor } from './components/CodeEditor/CodeEditor';
import { CodePreview } from './components/CodePreview/CodePreview';
import { LanguageBadge } from './components/LanguageBadge/LanguageBadge';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { DownloadButton } from './components/DownloadButton/DownloadButton';
import { useLanguageDetection } from './hooks/useLanguageDetection';
import { useTheme } from './hooks/useTheme';
import './App.css';

const INITIAL_CODE = `// Welcome to SnippedCode!
// 1. Paste your code here
// 2. Select a theme below
// 3. Click Download to share your snippet

function createSnippet(code, theme) {
  const element = document.getElementById('code-preview-capture');
  return captureImage(element, { theme });
}`;

function App() {
  const [code, setCode] = useState(INITIAL_CODE);
  const detectedLanguage = useLanguageDetection(code, 200);
  const { theme, changeTheme } = useTheme();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>SnippedCode</h1>
        <div className="header-actions">
          <LanguageBadge language={detectedLanguage} />
          <ThemeToggle theme={theme} onChangeTheme={changeTheme} />
          <DownloadButton elementId="code-preview-capture" />
        </div>
      </header>

      <main className="app-main">
        <section className="editor-section">
          <CodeEditor value={code} onChange={setCode} />
        </section>
        
        <section className="preview-section">
          <CodePreview code={code} theme={theme} language={detectedLanguage} />
        </section>
      </main>
    </div>
  );
}

export default App;
