import { captureImage } from '../../utils/captureImage';
import './DownloadButton.css';

interface DownloadButtonProps {
  elementId: string;
}

export function DownloadButton({ elementId }: DownloadButtonProps) {
  const handleDownload = async () => {
    await captureImage(elementId);
  };

  return (
    <button 
      className="download-button" 
      onClick={handleDownload}
    >
      Download Image
    </button>
  );
}
