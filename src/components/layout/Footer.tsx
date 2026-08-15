import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding & Copyright */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-bold text-slate-800 dark:text-slate-200">
              Neethish S.
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Backend & AI Engineer
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 pt-2">
              © 2026 Neethish S.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/NeethishS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 font-medium text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/neethishs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 font-medium text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:neethish2005@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200 font-medium text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
