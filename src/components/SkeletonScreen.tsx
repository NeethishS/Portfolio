/**
 * Skeleton Screen Components
 * For loading states matching final content
 */

import React from 'react';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

export const SkeletonPulse: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  className = '',
  count = 1,
}) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-slate-300 dark:bg-slate-700 rounded"
          style={{
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
            marginBottom: index < count - 1 ? '12px' : '0',
          }}
        />
      ))}
    </div>
  );
};

export const SkeletonCard: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <div className={`glassmorphism rounded-xl p-6 ${className}`}>
      {/* Image skeleton */}
      <SkeletonPulse height="200px" className="mb-4 rounded-lg" />

      {/* Title skeleton */}
      <SkeletonPulse width="80%" height="24px" className="mb-3" />

      {/* Description skeleton */}
      <SkeletonPulse height="16px" count={3} className="mb-4" />

      {/* Tag skeleton */}
      <div className="flex gap-2 mb-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonPulse
            key={index}
            width="60px"
            height="28px"
            className="rounded-full"
          />
        ))}
      </div>

      {/* Button skeleton */}
      <SkeletonPulse height="40px" className="rounded-lg" />
    </div>
  );
};

export const SkeletonProjectCard: React.FC = () => {
  return (
    <div className="glassmorphism rounded-xl p-6 animate-fade-in">
      <div className="space-y-4">
        {/* Badge skeleton */}
        <SkeletonPulse width="100px" height="24px" className="rounded-full" />

        {/* Title */}
        <SkeletonPulse width="70%" height="28px" />

        {/* Description */}
        <SkeletonPulse height="16px" count={4} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonPulse
              key={i}
              width="80px"
              height="28px"
              className="rounded-full"
            />
          ))}
        </div>

        {/* Metrics */}
        <SkeletonPulse height="16px" width="60%" />

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <SkeletonPulse width="50%" height="40px" className="rounded-lg" />
          <SkeletonPulse width="50%" height="40px" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTimelineItem: React.FC = () => {
  return (
    <div className="flex gap-4 mb-8 animate-fade-in">
      {/* Timeline dot */}
      <SkeletonPulse width="40px" height="40px" className="rounded-full flex-shrink-0" />

      <div className="flex-1">
        {/* Date */}
        <SkeletonPulse width="150px" height="16px" className="mb-2" />

        {/* Title */}
        <SkeletonPulse width="70%" height="24px" className="mb-2" />

        {/* Company */}
        <SkeletonPulse width="60%" height="16px" className="mb-3" />

        {/* Description */}
        <SkeletonPulse height="16px" count={3} />
      </div>
    </div>
  );
};

export const SkeletonAchievementCard: React.FC = () => {
  return (
    <div className="glassmorphism rounded-xl p-6 animate-fade-in">
      <div className="flex gap-4">
        {/* Icon */}
        <SkeletonPulse width="50px" height="50px" className="rounded-full flex-shrink-0" />

        <div className="flex-1 space-y-2">
          {/* Title */}
          <SkeletonPulse width="80%" height="20px" />

          {/* Issuer */}
          <SkeletonPulse width="60%" height="16px" />

          {/* Date */}
          <SkeletonPulse width="40%" height="14px" />

          {/* Description */}
          <SkeletonPulse height="14px" count={2} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export const ImageFallback: React.FC<{
  width?: number;
  height?: number;
  className?: string;
}> = ({ width = 300, height = 200, className = '' }) => {
  return (
    <div
      className={`bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center rounded-lg animate-pulse ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <svg
        className="w-1/4 h-1/4 text-slate-500 dark:text-slate-600"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default {
  SkeletonPulse,
  SkeletonCard,
  SkeletonProjectCard,
  SkeletonTimelineItem,
  SkeletonAchievementCard,
  ImageFallback,
};
