import React from 'react';
import { Hammer } from 'lucide-react';

interface CurrentlyBuildingBannerProps {
  className?: string;
}

export const CurrentlyBuildingBanner: React.FC<CurrentlyBuildingBannerProps> = ({ className = '' }) => {
  return (
    <div
      id="currently-building"
      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 backdrop-blur-sm ${className}`}
    >
      <Hammer size={14} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-none whitespace-nowrap m-0 p-0">
        Currently building:{' '}
        <span className="font-bold text-slate-900 dark:text-white">
          AI-Powered Job Intelligence Platform
        </span>
        <span className="hidden sm:inline text-slate-500 dark:text-slate-500">
          {' '}— crawling, normalization, deduplication &amp; AI matching
        </span>
      </p>
    </div>
  );
};

export default CurrentlyBuildingBanner;
