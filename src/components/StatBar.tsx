import React from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

interface Stat {
  value: string;
  label: string;
}

interface StatBarProps {
  stats?: Stat[];
  animated?: boolean;
  layout?: 'horizontal' | 'responsive';
  className?: string;
}

const StatItem: React.FC<{ value: string; label: string; animated: boolean }> = ({
  value,
  label,
  animated,
}) => {
  const match = value.match(/^(.*?)(\d+)([^\d]*)$/);
  const targetValue = match ? parseInt(match[2], 10) : 0;

  const { ref, value: animatedVal } = useAnimatedCounter(targetValue, {
    start: 0,
    duration: 1500,
    disabled: !match || !animated,
  });

  const displayStr = match && animated
    ? `${match[1]}${animatedVal}${match[3]}`
    : value;

  return (
    <div ref={ref} className="flex flex-col items-center gap-0.5">
      <span className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-none tabular-nums">
        {displayStr}
      </span>
      <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  );
};

/**
 * Stat Bar Component
 * 4-column grid on desktop, 2x2 on mobile
 * Number dominant layout with staggered entrance animation
 */
export const StatBar: React.FC<StatBarProps> = ({
  stats,
  animated = true,
  layout: _layout = 'responsive',
  className = '',
}) => {
  const defaultStats: Stat[] = [
    { value: '3', label: 'AI Systems' },
    { value: '1', label: 'Published Paper' },
    { value: '5', label: 'LLMs Benchmarked' },
    { value: '200+', label: 'LeetCode Problems' },
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className={`relative ${className}`}>
      <style>{`
        @keyframes statRise {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-item { animation: statRise 0.45s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .stat-item { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-x-0">
        {displayStats.map((stat, index) => (
          <div
            key={index}
            className="stat-item flex flex-col items-center"
            style={animated ? { animationDelay: `${0.85 + index * 0.08}s` } : {}}
          >
            <StatItem value={stat.value} label={stat.label} animated={animated} />
          </div>
        ))}
      </div>

      <div className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 h-8 w-px bg-slate-200 dark:bg-slate-700"
            style={{ left: `${(i / 4) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default StatBar;
