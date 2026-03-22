import { describe, it, expect, vi } from 'vitest';
import { captureImage } from '../../src/utils/captureImage';
import html2canvas from 'html2canvas';

vi.mock('html2canvas', () => ({
  default: vi.fn().mockResolvedValue({
    toDataURL: vi.fn().mockReturnValue('data:image/png;base64,mocked')
  })
}));

describe('captureImage', () => {
  it('handles capture properly', async () => {
    const div = document.createElement('div');
    div.id = 'test-capture-id';
    document.body.appendChild(div);

    vi.spyOn(document, 'createElement');

    await captureImage('test-capture-id');

    expect(html2canvas).toHaveBeenCalledWith(div, expect.any(Object));
    expect(document.createElement).toHaveBeenCalledWith('a');
    
    document.body.removeChild(div);
  });
});
