import html2canvas from 'html2canvas';

export async function captureImage(elementId: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 2,
    });
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'snipped-code.png';
    link.href = url;
    link.click();
  } catch (error) {
    console.error('Error capturing image:', error);
  }
}
