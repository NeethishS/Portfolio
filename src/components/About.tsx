import React from 'react';
import QuickFacts from './QuickFacts';
import ProfileLinks from './ProfileLinks';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-12 md:mb-16 opacity-0 animate-fade-in" style={{ animationDuration: '600ms', animationDelay: '0ms', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" aria-hidden="true"></div>
        </div>

        {/* Narrative */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          {/* Paragraph 1 */}
          <p
            className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDuration: '600ms', animationDelay: '100ms', animationFillMode: 'forwards', maxWidth: '800px', lineHeight: '1.6' }}
          >
            I'm a Computer Science and Engineering student at Sri Shakthi Institute of Engineering and Technology, focused on backend engineering and applied AI.
          </p>

          {/* Paragraph 2 */}
          <p
            className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDuration: '600ms', animationDelay: '200ms', animationFillMode: 'forwards', maxWidth: '800px', lineHeight: '1.6' }}
          >
            I build backend systems and LLM applications using Python, FastAPI, PostgreSQL, WebSockets, RAG pipelines, and vector search. My work includes an AI-assisted code review platform, a multi-source job intelligence system, and a real-time RAG conversation backend.
          </p>

          {/* Paragraph 3 */}
          <p
            className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDuration: '600ms', animationDelay: '300ms', animationFillMode: 'forwards', maxWidth: '800px', lineHeight: '1.6' }}
          >
            I've published research on AI-assisted code review and completed an internship focused on evaluating LLM prompting strategies across multiple models. I also work with QA automation and software testing, including API testing and browser automation.
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div
          className="mb-12 md:mb-16 opacity-0 animate-fade-in"
          style={{ animationDuration: '600ms', animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          <QuickFacts />
        </div>

        {/* Profile Links */}
        <div
          className="opacity-0 animate-fade-in"
          style={{ animationDuration: '600ms', animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <ProfileLinks />
        </div>
      </div>
    </section>
  );
};

export default About;
