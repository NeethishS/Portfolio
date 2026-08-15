import React from 'react';
import { BookOpen, Award, Trophy, ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';

const Achievements: React.FC = () => {
  return (
    <section
      id="research"
      className="relative py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
          
          {/* Research Publication Column (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDuration: '600ms', animationDelay: '0ms', animationFillMode: 'forwards' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2.5">
                <BookOpen className="text-blue-500" size={24} />
                Research
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" aria-hidden="true"></div>
            </div>

            <div
              className="opacity-0 animate-fade-in"
              style={{
                animationDuration: '600ms',
                animationDelay: '100ms',
                animationFillMode: 'forwards',
              }}
            >
              <GlassCard className="p-6 md:p-8 border-l-4 border-l-blue-500 hover:border-l-blue-400 relative overflow-hidden group">
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  IJRPR Journal · Published
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 mt-2 pr-28">
                  Sign Language Detection System
                </h3>

                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Published research on real-time Sign Language Recognition and Computer Vision algorithms designed to bridge communication gaps for hearing and speech impaired individuals.
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                    Key Contributions
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                      <span>Real-time hand gesture tracking and feature extraction computer vision pipeline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                      <span>Deep Learning model optimized for gesture classification with high accuracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 flex-shrink-0 mt-1">•</span>
                      <span>Published in International Journal of Research Publication and Reviews (IJRPR)</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="https://ijrpr.com/uploads/V6ISSUE10/IJRPR54355.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-200 hover:scale-105 min-h-[44px] text-sm focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 shadow-sm"
                    aria-label="View published paper PDF for Sign Language Detection"
                  >
                    <ExternalLink size={16} />
                    <span>View Published Paper (PDF)</span>
                  </a>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Certifications & Stats Column (1/3 width on desktop) */}
          <div className="space-y-8">
            <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDuration: '600ms', animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2.5">
                <Award className="text-purple-500" size={24} />
                Certifications
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" aria-hidden="true"></div>
            </div>

            <div className="space-y-4">
              {/* Certification 1 */}
              <div
                className="opacity-0 animate-fade-in"
                style={{
                  animationDuration: '600ms',
                  animationDelay: '300ms',
                  animationFillMode: 'forwards',
                }}
              >
                <GlassCard className="p-4 border-l-2 border-l-purple-500 hover:border-l-purple-400">
                  <div className="flex items-start gap-3">
                    <Award className="text-purple-500 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm md:text-base leading-snug">
                        Building LLM Applications With Prompt Engineering
                      </h4>
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        NVIDIA · Feb 2026
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Certification 2 */}
              <div
                className="opacity-0 animate-fade-in"
                style={{
                  animationDuration: '600ms',
                  animationDelay: '400ms',
                  animationFillMode: 'forwards',
                }}
              >
                <GlassCard className="p-4 border-l-2 border-l-purple-500 hover:border-l-purple-400">
                  <div className="flex items-start gap-3">
                    <Award className="text-purple-500 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm md:text-base leading-snug">
                        Python for Data Science
                      </h4>
                      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        IIT Madras / NPTEL · Mar 2025
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Competitive Programming (LeetCode) */}
              <div
                className="opacity-0 animate-fade-in"
                style={{
                  animationDuration: '600ms',
                  animationDelay: '500ms',
                  animationFillMode: 'forwards',
                }}
              >
                <GlassCard className="p-4 border-l-2 border-l-yellow-500 hover:border-l-yellow-400">
                  <div className="flex items-start gap-3">
                    <Trophy className="text-yellow-500 flex-shrink-0 mt-0.5" size={18} />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm md:text-base leading-snug">
                        200+ LeetCode Problems Solved
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Algorithmic problem solving and data structures.
                      </p>
                      <a
                        href="https://leetcode.com/u/Neethish05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-2 transition-colors"
                        aria-label="View LeetCode Profile"
                      >
                        <span>View Profile</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
