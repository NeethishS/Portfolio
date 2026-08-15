import React from 'react';
import GlassCard from './GlassCard';

interface QuickFact {
  icon: string;
  label: string;
  text: string;
}

const QuickFacts: React.FC = () => {
  const facts: QuickFact[] = [
    {
      icon: '🎓',
      label: 'Education',
      text: 'B.E. CSE · graduating May 2027',
    },
    {
      icon: '📍',
      label: 'Location',
      text: 'Coimbatore, Tamil Nadu, India',
    },
    {
      icon: '💼',
      label: 'Availability',
      text: 'Open to internships now · Full-time after May 2027',
    },
    {
      icon: '📄',
      label: 'Publications',
      text: '2 Papers Published (IJRPR & IJCT)',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6">
      {facts.map((fact, index) => (
        <div
          key={index}
          className="opacity-0 animate-fade-in"
          style={{
            animationDelay: `${index * 100}ms`,
            animationDuration: '500ms',
            animationFillMode: 'forwards',
          }}
        >
          <GlassCard className="p-4 md:p-6 h-full flex flex-col items-start justify-center">
            <div className="text-3xl md:text-4xl mb-2" aria-hidden="true">{fact.icon}</div>
            <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
              {fact.label}
            </h3>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-snug">
              {fact.text}
            </p>
          </GlassCard>
        </div>
      ))}
    </div>
  );
};

export default QuickFacts;
