import { useState } from 'react';
import { CodeEditor } from './components/CodeEditor/CodeEditor';
import { CodePreview } from './components/CodePreview/CodePreview';
import { LanguageBadge } from './components/LanguageBadge/LanguageBadge';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { DownloadButton } from './components/DownloadButton/DownloadButton';
import { useLanguageDetection } from './hooks/useLanguageDetection';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const detectedLanguage = useLanguageDetection(code, 500);
  const { theme, changeTheme } = useTheme();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>SnippedCode</h1>
        <ThemeToggle theme={theme} onChangeTheme={changeTheme} />
      </header>

      <main className="app-main">
        <section className="editor-section">
          <CodeEditor value={code} onChange={setCode} />
        </section>
        
        <section className="preview-section">
          <CodePreview code={code} theme={theme} language={detectedLanguage} />
        </section>
      </main>

      <footer className="app-footer">
        <LanguageBadge language={detectedLanguage} />
        <DownloadButton elementId="code-preview-capture" />
      </footer>
    </div>
  );
}

export default App;
