import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LanguageBadge } from '../../src/components/LanguageBadge/LanguageBadge';

describe('LanguageBadge', () => {
  it('renders the language correctly', () => {
    render(<LanguageBadge language="typescript" />);
    expect(screen.getByText('typescript')).toBeInTheDocument();
  });
});
