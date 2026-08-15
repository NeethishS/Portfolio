import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, BookOpen, Layers, Settings2, X, ArrowDown } from 'lucide-react';
import GlassCard from './GlassCard';

export interface ArchitectureNode {
  label: string;
  subLabel?: string;
}

export interface EngineeringDecision {
  title: string;
  decision: string;
}

interface ProjectCardProps {
  id: string;
  title: string;
  badge?: string;
  description: string;
  technologies: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  researchUrl?: string;
  architectureNodes?: ArchitectureNode[];
  engineeringDecisions?: EngineeringDecision[];
  highlights?: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  badge,
  description,
  technologies,
  metrics,
  githubUrl,
  liveUrl,
  researchUrl,
  architectureNodes = [],
  engineeringDecisions = [],
  highlights = [],
  className = '',
}) => {
  const [isArchOpen, setIsArchOpen] = useState(false);
  const [isDecisionsOpen, setIsDecisionsOpen] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const archModalRef = useRef<HTMLDivElement>(null);
  const decisionsModalRef = useRef<HTMLDivElement>(null);
  const triggerArchRef = useRef<HTMLButtonElement>(null);
  const triggerDecisionsRef = useRef<HTMLButtonElement>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isArchOpen) {
          setIsArchOpen(false);
          triggerArchRef.current?.focus();
        }
        if (isDecisionsOpen) {
          setIsDecisionsOpen(false);
          triggerDecisionsRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isArchOpen, isDecisionsOpen]);

  // Focus trap for Architecture Modal
  useEffect(() => {
    if (!isArchOpen || !archModalRef.current) return;
    const focusable = archModalRef.current.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0] as HTMLElement;
    const last = focusable[focusable.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    // Set initial focus
    first.focus();

    window.addEventListener('keydown', handleTab);
    return () => window.removeEventListener('keydown', handleTab);
  }, [isArchOpen]);

  // Focus trap for Decisions Modal
  useEffect(() => {
    if (!isDecisionsOpen || !decisionsModalRef.current) return;
    const focusable = decisionsModalRef.current.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0] as HTMLElement;
    const last = focusable[focusable.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    // Set initial focus
    first.focus();

    window.addEventListener('keydown', handleTab);
    return () => window.removeEventListener('keydown', handleTab);
  }, [isDecisionsOpen]);

  return (
    <>
      <GlassCard className={`p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative focus-within:ring-2 focus-within:ring-blue-500 ${className}`}>
        {/* Project Number */}
        <div className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1 select-none font-bold uppercase tracking-widest">
          {id}
        </div>

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-600 dark:text-blue-400" aria-hidden="true">
            {badge}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 pr-28">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Metrics */}
        {metrics.length > 0 && (
          <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4 font-semibold border-l-2 border-blue-500 pl-3">
            {metrics.join(' · ')}
          </div>
        )}

        {/* Engineering Highlights Collapsible */}
        {highlights && highlights.length > 0 && (
          <div className="mb-4">
            {showDetails && (
              <div className="mb-3 mt-2 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/20 border border-slate-200/60 dark:border-slate-800/60 animate-in fade-in slide-in-from-top-1 duration-200">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">
                  Engineering Highlights
                </h4>
                <ul className="space-y-1.5">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-blue-500 flex-shrink-0 mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors focus:outline-none min-h-[32px] px-1"
              aria-label={showDetails ? "Collapse engineering highlights" : "Show engineering highlights"}
            >
              {showDetails ? (
                <span>Collapse details ↑</span>
              ) : (
                <span>Engineering highlights ↓</span>
              )}
            </button>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 items-center">
            {(showAllTech ? technologies : technologies.slice(0, 5)).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700/50"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <button
                onClick={() => setShowAllTech(!showAllTech)}
                className="px-2.5 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200/50 dark:border-blue-800/30 hover:bg-blue-100 dark:hover:bg-blue-950/60 transition-colors focus:outline-none min-h-[24px]"
                aria-label={showAllTech ? "Show fewer technologies" : `Show ${technologies.length - 5} more technologies`}
              >
                {showAllTech ? 'Collapse stack ↑' : `+${technologies.length - 5} more`}
              </button>
            )}
          </div>
        </div>

        {/* Main Links */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105 min-h-[44px] text-xs md:text-sm focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 shadow-sm"
              aria-label={`View ${title} live project (opens in new tab)`}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-slate-700 dark:bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-600 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 min-h-[44px] text-xs md:text-sm border border-slate-600 dark:border-slate-700 focus:outline-2 focus:outline-offset-2 focus:outline-slate-500 shadow-sm"
              aria-label={`View ${title} source code on GitHub (opens in new tab)`}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {researchUrl && (
            <a
              href={researchUrl}
              className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105 min-h-[44px] text-xs md:text-sm focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 shadow-sm"
              aria-label={`View ${title} research publication`}
            >
              <BookOpen size={16} />
              <span>Research</span>
            </a>
          )}
        </div>

        {/* Inline Architecture Flow Preview */}
        {architectureNodes.length > 0 && (
          <div className="mb-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Pipeline</p>
            <div className="flex items-center gap-1 overflow-x-auto flex-nowrap pb-0.5 scrollbar-none">
              {architectureNodes.map((node, index) => (
                <React.Fragment key={index}>
                  <span className="px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 rounded border border-slate-200/80 dark:border-slate-700/40 whitespace-nowrap flex-shrink-0 hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors duration-150 cursor-default">
                    {node.label}
                  </span>
                  {index < architectureNodes.length - 1 && (
                    <span className="text-slate-400 dark:text-slate-600 text-xs select-none flex-shrink-0">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Tech Panel Modals Links */}
        <div className="flex gap-3 pt-2 border-t border-slate-200 dark:border-slate-800/80">
          <button
            onClick={() => setIsArchOpen(true)}
            ref={triggerArchRef}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/40 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs md:text-sm font-semibold rounded-lg transition-all duration-200 min-h-[44px] border border-slate-200 dark:border-slate-700/30"
            aria-haspopup="dialog"
            aria-expanded={isArchOpen}
          >
            <Layers size={14} className="text-blue-500" />
            <span>Architecture</span>
          </button>
          <button
            onClick={() => setIsDecisionsOpen(true)}
            ref={triggerDecisionsRef}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/40 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs md:text-sm font-semibold rounded-lg transition-all duration-200 min-h-[44px] border border-slate-200 dark:border-slate-700/30"
            aria-haspopup="dialog"
            aria-expanded={isDecisionsOpen}
          >
            <Settings2 size={14} className="text-purple-500" />
            <span>Decisions</span>
          </button>
        </div>
      </GlassCard>

      {/* Architecture Diagram Modal */}
      {isArchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          style={{ animation: 'modalBackdropIn 0.2s ease-out both' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`arch-title-${id}`}
        >
          <style>{`
            @keyframes modalBackdropIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes modalPanelIn { from { opacity: 0; transform: scale(0.97) translateY(6px); } to { opacity: 1; transform: scale(1) translateY(0); } }
            @media (prefers-reduced-motion: reduce) {
              .modal-panel { animation: none !important; opacity: 1 !important; transform: none !important; }
            }
          `}</style>
          <div
            ref={archModalRef}
            className="modal-panel bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col p-6 shadow-2xl"
            style={{ animation: 'modalPanelIn 0.25s ease-out both' }}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <h4 id={`arch-title-${id}`} className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Layers size={18} className="text-blue-500" />
                {title} Architecture
              </h4>
              <button
                onClick={() => {
                  setIsArchOpen(false);
                  triggerArchRef.current?.focus();
                }}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-500 dark:text-slate-400"
                aria-label="Close architecture details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-1 flex flex-col items-center">
              <div className="w-full space-y-4">
                {architectureNodes.map((node, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <div className="flex justify-center my-1">
                        <ArrowDown size={20} className="text-slate-400 dark:text-slate-600 animate-pulse" />
                      </div>
                    )}
                    <div className="w-full max-w-md mx-auto p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl text-center shadow-sm relative overflow-hidden group hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-colors duration-300">
                      <div className="font-semibold text-slate-900 dark:text-slate-200 text-sm md:text-base">
                        {node.label}
                      </div>
                      {node.subLabel && (
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                          {node.subLabel}
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engineering Decisions Modal */}
      {isDecisionsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          style={{ animation: 'modalBackdropIn 0.2s ease-out both' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`decisions-title-${id}`}
        >
          <div
            ref={decisionsModalRef}
            className="modal-panel bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col p-6 shadow-2xl"
            style={{ animation: 'modalPanelIn 0.25s ease-out both' }}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <h4 id={`decisions-title-${id}`} className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Settings2 size={18} className="text-purple-500" />
                {title} Engineering Decisions
              </h4>
              <button
                onClick={() => {
                  setIsDecisionsOpen(false);
                  triggerDecisionsRef.current?.focus();
                }}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-500 dark:text-slate-400"
                aria-label="Close decisions details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 pr-2 space-y-6">
              {engineeringDecisions.map((decision, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/20 border border-slate-200/60 dark:border-slate-800/80">
                  <h5 className="font-bold text-blue-600 dark:text-blue-400 text-xs md:text-sm tracking-wider uppercase mb-2">
                    {decision.title}
                  </h5>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {decision.decision}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
