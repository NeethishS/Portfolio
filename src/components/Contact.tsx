import React from 'react';
import { Mail, Linkedin, Github, Code2 } from 'lucide-react';
import { DownloadCV } from './DownloadCV';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:neethish2005@gmail.com',
      display: 'neethish2005@gmail.com',
      ariaLabel: 'Send email to neethish2005@gmail.com',
      external: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/neethishs',
      display: 'linkedin.com/in/neethishs',
      ariaLabel: 'Visit LinkedIn profile',
      external: true,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/NeethishS',
      display: 'github.com/NeethishS',
      ariaLabel: 'Visit GitHub profile',
      external: true,
    },
    {
      icon: Code2,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Neethish05',
      display: 'leetcode.com/u/Neethish05',
      ariaLabel: 'Visit LeetCode profile',
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div
          className="mb-8 md:mb-12 text-center opacity-0 animate-fade-in"
          style={{ animationDuration: '600ms', animationDelay: '0ms', animationFillMode: 'forwards' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Let's Build Something
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto" aria-hidden="true"></div>
        </div>

        {/* Subtext */}
        <div 
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4 opacity-0 animate-fade-in"
          style={{ animationDuration: '600ms', animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <p className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200">
            Open to backend and applied AI engineering opportunities.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 font-semibold">
            Internships now · Full-time after May 2027
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Remote roles in India · Open to relocation
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic mt-2">
            Also open to QA automation and software testing roles.
          </p>
        </div>

        {/* Contact Links */}
        <div
          className="flex flex-col gap-4 md:gap-3 mb-12 md:mb-16 opacity-0 animate-fade-in"
          style={{ animationDuration: '600ms', animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={link.ariaLabel}
                title={link.label}
                className="group flex items-center justify-center md:justify-start gap-3 px-6 py-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md min-h-[44px] text-base md:text-lg font-medium text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Icon
                  size={20}
                  className="flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
                />
                <span className="font-medium">{link.display}</span>
              </a>
            );
          })}
        </div>

        {/* Download CV Button */}
        <div
          className="flex justify-center mb-6 opacity-0 animate-fade-in"
          style={{ animationDuration: '600ms', animationDelay: '250ms', animationFillMode: 'forwards' }}
        >
          <DownloadCV size="lg" />
        </div>




      </div>
    </section>
  );
};

export default Contact;
