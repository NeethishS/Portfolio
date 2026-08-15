import React from 'react';

type HeadingSize = 'sm' | 'md' | 'lg';
type HeadingAlign = 'left' | 'center';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: HeadingAlign;
  size?: HeadingSize;
  animated?: boolean;
}

const sizeStyles: Record<HeadingSize, string> = {
  sm: 'text-2xl md:text-3xl',
  md: 'text-3xl md:text-4xl',
  lg: 'text-4xl md:text-5xl',
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'left',
  size = 'md',
  animated = true,
}) => {
  return (
    <div
      className={`
        mb-12 md:mb-16
        ${align === 'center' ? 'text-center' : 'text-left'}
        ${animated ? 'fade-in' : ''}
      `}
    >
      <h2 className={`font-bold tracking-tight mb-4 ${sizeStyles[size]}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
