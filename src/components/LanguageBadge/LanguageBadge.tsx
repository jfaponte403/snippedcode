import './LanguageBadge.css';

interface LanguageBadgeProps {
  language: string;
}

export function LanguageBadge({ language }: LanguageBadgeProps) {
  return (
    <div className="language-badge">
      Language: <span className="language-name">{language}</span>
    </div>
  );
}
