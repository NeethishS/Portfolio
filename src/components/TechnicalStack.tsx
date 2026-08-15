import React from 'react';
import SkillTag from './SkillTag';

interface SkillCategory {
  name: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    name: 'Backend Engineering',
    skills: [
      'Python',
      'FastAPI',
      'Flask',
      'Node.js',
      'REST APIs',
      'WebSockets',
      'async/await',
      'JWT',
      'OAuth2',
    ],
  },
  {
    name: 'AI / RAG',
    skills: [
      'RAG Pipelines',
      'LLM Inference',
      'Embeddings',
      'Semantic Search',
      'Prompt Engineering',
      'Groq API',
      'Claude API',
      'Generative AI',
      'pgvector',
    ],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'Supabase', 'pgvector', 'MongoDB', 'MySQL'],
  },
  {
    name: 'QA Automation & Testing',
    skills: [
      'Playwright',
      'Python Testing',
      'API Testing',
      'Test Automation',
      'Software Testing',
      'pytest',
      'Postman',
    ],
  },
  {
    name: 'Frontend / Supporting',
    skills: ['React', 'TypeScript', 'JavaScript'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel'],
  },
  {
    name: 'Core Concepts',
    skills: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'API Design',
      'Software Testing',
    ],
  },
];

const TechnicalStack: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-12 md:mb-16 opacity-0 animate-fade-in" style={{ animationDuration: '600ms', animationDelay: '0ms', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" aria-hidden="true"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {categories.map((category, catIndex) => {
            const isQACategory = category.name.includes('QA');
            const isPrimary = category.name === 'Backend Engineering' || category.name === 'AI / RAG';
            const colSpan = category.name === 'Core Concepts' ? 'md:col-span-2' : '';
            
            return (
              <div
                key={category.name}
                className={`opacity-0 animate-fade-in p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/50 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700/70 ${colSpan} ${
                  isPrimary 
                    ? 'ring-1 ring-blue-500/20 dark:ring-blue-400/20 bg-gradient-to-br from-blue-500/5 to-transparent dark:from-blue-500/5' 
                    : ''
                }`}
                style={{
                  animationDuration: '600ms',
                  animationDelay: `${100 + catIndex * 50}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                <h3 className={`font-semibold mb-4 ${
                  isPrimary 
                    ? 'text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-bold' 
                    : isQACategory
                    ? 'text-lg md:text-xl text-slate-700 dark:text-slate-300 font-semibold border-l-2 border-blue-500/30 pl-2'
                    : 'text-lg md:text-xl text-slate-800 dark:text-slate-200 font-semibold'
                }`}>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="opacity-0 animate-fade-in"
                      style={{
                        animationDuration: '400ms',
                        animationDelay: `${150 + catIndex * 50 + skillIndex * 20}ms`,
                        animationFillMode: 'forwards',
                      }}
                    >
                      <SkillTag
                        skill={skill}
                        context={`${category.name} Skill: ${skill}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalStack;
