import { AVAILABLE_THEMES } from '../../hooks/useTheme';
import './ThemeToggle.css';

interface ThemeToggleProps {
  theme: string;
  onChangeTheme: (theme: string) => void;
}

export function ThemeToggle({ theme, onChangeTheme }: ThemeToggleProps) {
  return (
    <div className="theme-toggle-wrapper">
      <span>Theme:</span>
      <select 
        className="theme-select" 
        value={theme}
        onChange={(e) => onChangeTheme(e.target.value)}
        aria-label="Select theme"
      >
        {AVAILABLE_THEMES.map(t => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
