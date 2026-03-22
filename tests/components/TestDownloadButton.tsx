import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DownloadButton } from '../../src/components/DownloadButton/DownloadButton';
import * as captureUtils from '../../src/utils/captureImage';

vi.mock('../../src/utils/captureImage');

describe('DownloadButton', () => {
  it('calls captureImage with elementId when clicked', async () => {
    const mockCapture = vi.spyOn(captureUtils, 'captureImage').mockResolvedValue();
    render(<DownloadButton elementId="test-id" />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockCapture).toHaveBeenCalledWith('test-id');
  });
});
