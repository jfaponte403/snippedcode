import './CodeEditor.css';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function CodeEditor({ value, onChange }: CodeEditorProps) {
  return (
    <div className="editor-container">
      <textarea
        className="code-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste or type your code here..."
        spellCheck="false"
      />
    </div>
  );
}
