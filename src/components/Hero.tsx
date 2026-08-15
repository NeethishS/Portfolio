import React from 'react';
import { ArrowRight, Download, Github, Zap, Database, Brain, Server, ArrowRightLeft } from 'lucide-react';
import { CurrentlyBuildingBanner } from './CurrentlyBuildingBanner';
import { StatBar } from './StatBar';
import { HeroBackground } from './HeroBackground';
import { ScrollIndicator } from './ScrollIndicator';

const Hero: React.FC = () => {
  const handleViewProjects = () => {
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-8 md:py-12 overflow-hidden"
    >
      <HeroBackground />

      {/* Static radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-[600px] h-[400px] rounded-full bg-blue-500/5 dark:bg-blue-500/8 blur-3xl" />
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .h-a-1 { animation: heroFadeUp 0.5s ease-out 0.05s both; }
        .h-a-2 { animation: heroFadeUp 0.5s ease-out 0.18s both; }
        .h-a-3 { animation: heroFadeUp 0.5s ease-out 0.30s both; }
        .h-a-4 { animation: heroFadeUp 0.5s ease-out 0.42s both; }
        .h-a-5 { animation: heroFadeUp 0.5s ease-out 0.54s both; }
        .h-a-6 { animation: heroFadeUp 0.5s ease-out 0.66s both; }
        .h-a-7 { animation: heroFadeUp 0.45s ease-out 0.78s both; }
        .h-a-8 { animation: heroFadeUp 0.45s ease-out 0.92s both; }
        @media (max-width: 768px) {
          .h-a-1 { animation: heroFadeUp 0.4s ease-out 0.05s both; }
          .h-a-2 { animation: heroFadeUp 0.4s ease-out 0.14s both; }
          .h-a-3 { animation: heroFadeUp 0.4s ease-out 0.23s both; }
          .h-a-4 { animation: heroFadeUp 0.4s ease-out 0.32s both; }
          .h-a-5 { animation: heroFadeUp 0.4s ease-out 0.41s both; }
          .h-a-6 { animation: heroFadeUp 0.4s ease-out 0.50s both; }
          .h-a-7 { animation: heroFadeUp 0.4s ease-out 0.59s both; }
          .h-a-8 { animation: heroFadeUp 0.4s ease-out 0.68s both; }
        }
        @media (prefers-reduced-motion: reduce) {
          .h-a-1,.h-a-2,.h-a-3,.h-a-4,.h-a-5,.h-a-6,.h-a-7,.h-a-8 {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
        }
        .cta-primary { transition: transform 0.2s ease-out, box-shadow 0.2s ease-out; }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,130,246,0.35); }
        .cta-primary:hover .cta-arrow { transform: translateX(3px); }
        .cta-arrow { transition: transform 0.2s ease-out; }
        .cta-secondary { transition: transform 0.2s ease-out; }
        .cta-secondary:hover { transform: translateY(-2px); }
        .cta-github { transition: transform 0.2s ease-out, background 0.2s, border-color 0.2s; }
        .cta-github:hover { transform: translateY(-2px); }
      `}</style>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="text-center space-y-4 md:space-y-5">

          {/* 1 — Banner */}
          <div className="h-a-1 flex justify-center">
            <CurrentlyBuildingBanner />
          </div>

          {/* 2 — Heading */}
          <div className="h-a-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Backend &amp; AI Engineer
            </h1>
          </div>

          {/* 3 — Subtitle */}
          <div className="h-a-3 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed m-0">
              Building backend systems and LLM applications with Python, FastAPI, RAG, and PostgreSQL.
            </p>
          </div>

          {/* 4 — Credibility */}
          <div className="h-a-4">
            <p className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 tracking-wide m-0">
              Published researcher · 3 AI systems · 5 LLMs benchmarked
            </p>
          </div>

          {/* 5 — Capability */}
          <div className="h-a-5">
            <p className="text-xs md:text-sm font-medium m-0">
              <span className="text-slate-700 dark:text-slate-200 font-semibold">Backend Engineering</span>
              {' · '}
              <span className="text-slate-700 dark:text-slate-200 font-semibold">Applied AI</span>
              {' · '}
              <span className="text-slate-500 dark:text-slate-400">QA Automation</span>
            </p>
          </div>

          {/* 6 — CTAs */}
          <div className="h-a-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 md:pt-3">
            <button
              onClick={handleViewProjects}
              className="cta-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl min-h-[44px] text-sm md:text-base shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label="View my projects"
            >
              View Projects
              <ArrowRight size={16} className="cta-arrow" />
            </button>

            <a
              href="https://drive.google.com/file/d/1Jh92ftzKVZHI5kmY8Q1xL7HqUj_QyC-W/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-semibold rounded-xl min-h-[44px] text-sm md:text-base border border-slate-200 dark:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              aria-label="Download my resume"
            >
              <Download size={16} />
              Download CV
            </a>

            <a
              href="https://github.com/NeethishS"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-github w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium text-sm min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          {/* 7 — Stats */}
          <div className="h-a-7 pt-4 md:pt-5">
            <StatBar
              stats={[
                { value: '3', label: 'AI Systems' },
                { value: '1', label: 'Published Paper' },
                { value: '5', label: 'LLMs Benchmarked' },
                { value: '200+', label: 'LeetCode Problems' },
              ]}
              animated={true}
            />
          </div>

          {/* 8 — Technical pipeline visual */}
          <div className="h-a-8 hidden sm:flex justify-center pt-1">
            <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 backdrop-blur-sm">
              {([
                { icon: <Server size={12} />, label: 'Python' },
                { icon: <Zap size={12} />, label: 'FastAPI' },
                { icon: <Database size={12} />, label: 'PostgreSQL' },
                { icon: <ArrowRightLeft size={12} />, label: 'RAG' },
                { icon: <Brain size={12} />, label: 'LLM' },
              ] as { icon: React.ReactNode; label: string }[]).map((node, i, arr) => (
                <React.Fragment key={node.label}>
                  <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <span className="text-blue-500 dark:text-blue-400">{node.icon}</span>
                    <span className="text-xs font-medium">{node.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-slate-300 dark:text-slate-600 text-xs select-none">&#8594;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
