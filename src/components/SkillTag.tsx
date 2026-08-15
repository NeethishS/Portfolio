import React, { useState } from 'react';
import { getSkillIcon } from './SkillIcons';

interface SkillTagProps {
  skill: string;
  context?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, context }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-0.5 cursor-default text-sm font-medium text-slate-700 dark:text-slate-300 min-h-[44px] select-none shadow-sm"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        tabIndex={0}
        role="complementary"
      >
        <span className="flex-shrink-0 text-slate-600 dark:text-slate-400">
          {getSkillIcon(skill)}
        </span>
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          {skill}
        </span>
      </div>

      {/* Tooltip */}
      {showTooltip && context && (
        <div className="absolute z-50 left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-slate-900 dark:bg-slate-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap pointer-events-none animate-fade-in shadow-lg">
          {context}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800"></div>
        </div>
      )}
    </div>
  );
};

export default SkillTag;
