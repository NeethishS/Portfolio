import React from 'react';
import { Briefcase, BookOpen, Calendar, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';

interface Internship {
  id: string;
  date: string;
  title: string;
  organization: string;
  location?: string;
  bullets: string[];
}

const Timeline: React.FC = () => {
  const experiences: Internship[] = [
    {
      id: 'exp-1',
      date: 'Feb 2026 – Mar 2026',
      title: 'Prompt Engineering Research Intern',
      organization: 'Excelerate',
      location: 'Remote',
      bullets: [
        'Benchmarked zero-shot, few-shot, and chain-of-thought prompting strategies across 5 LLM APIs using a 200-question educational Q&A dataset.',
        'Evaluated output quality and documented model-specific failure modes and integration recommendations.',
      ],
    },
    {
      id: 'exp-2',
      date: '2025',
      title: 'Frontend Development Intern',
      organization: 'IBM x AICTE x Edunet Foundation',
      bullets: [
        'Built responsive UI components and completed frontend training modules.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 lg:py-32 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
          
          {/* Experience Column (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDuration: '600ms', animationDelay: '0ms', animationFillMode: 'forwards' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <Briefcase className="text-blue-500" size={24} />
                Experience
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" aria-hidden="true"></div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="opacity-0 animate-fade-in"
                  style={{
                    animationDuration: '600ms',
                    animationDelay: `${100 + index * 100}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <GlassCard className="p-6 border-l-4 border-l-blue-500 hover:border-l-blue-400">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {exp.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                        <Calendar size={12} />
                        {exp.date}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                      <span>{exp.organization}</span>
                      {exp.location && (
                        <span className="text-slate-500 dark:text-slate-500 flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2.5 text-sm md:text-base text-slate-700 dark:text-slate-300">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column (1/3 width on desktop) */}
          <div className="space-y-8">
            <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDuration: '600ms', animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <BookOpen className="text-purple-500" size={24} />
                Education
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" aria-hidden="true"></div>
            </div>

            <div
              className="opacity-0 animate-fade-in"
              style={{
                animationDuration: '600ms',
                animationDelay: '300ms',
                animationFillMode: 'forwards',
              }}
            >
              <GlassCard className="p-6 border-l-4 border-l-purple-500 hover:border-l-purple-400">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full mb-3">
                  <Calendar size={12} />
                  2023 – May 2027
                </span>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                  B.E. Computer Science and Engineering
                </h3>
                
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  Sri Shakthi Institute of Engineering and Technology
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-1">
                  <MapPin size={12} />
                  Coimbatore, Tamil Nadu, India
                </p>
              </GlassCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
