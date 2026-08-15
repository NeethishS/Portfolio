import React from 'react';
import { Download } from 'lucide-react';
import { analytics } from '../utils/analytics';

interface DownloadCVProps {
  variant?: 'button' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const DownloadCV: React.FC<DownloadCVProps> = ({
  variant = 'button',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const resumeUrl = 'https://drive.google.com/file/d/1xtgD5Mf0zccBgTH-SLA5lB7AeGFfhj_F/view?usp=drive_link';

  const handleDownload = () => {
    analytics.trackEvent('CV', 'Download', 'Neethish_S_Resume');
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'link') {
    return (
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => analytics.trackEvent('CV', 'Download', 'Neethish_S_Resume')}
        className={`inline-flex items-center gap-2 ${sizeClasses[size]} rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition-all duration-200 hover:scale-105 min-h-[44px] ${className}`}
        aria-label="View Resume"
        title="View Resume"
      >
        <Download size={iconSizes[size]} />
        Download CV
      </a>
    );
  }

  return (
    <button
      onClick={handleDownload}
      className={`inline-flex items-center justify-center gap-2 ${sizeClasses[size]} rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition-all duration-200 hover:scale-105 min-h-[44px] ${className}`}
      aria-label="View Resume"
      title="View Resume"
    >
      <Download size={iconSizes[size]} />
      Download CV
    </button>
  );
};

export default DownloadCV;
