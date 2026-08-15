import React from 'react';
import { Mail, Linkedin, Github, Code2 } from 'lucide-react';

const ProfileLinks: React.FC = () => {
  const links = [
    {
      icon: Mail,
      href: 'mailto:neethish2005@gmail.com',
      label: 'Email',
      ariaLabel: 'Send email to neethish2005@gmail.com',
      external: false,
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/neethishs',
      label: 'LinkedIn',
      ariaLabel: 'Visit LinkedIn profile',
      external: true,
    },
    {
      icon: Github,
      href: 'https://github.com/NeethishS',
      label: 'GitHub',
      ariaLabel: 'Visit GitHub profile',
      external: true,
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/u/Neethish05',
      label: 'LeetCode',
      ariaLabel: 'Visit LeetCode profile',
      external: true,
    },
  ];

  return (
    <div className="flex justify-center items-center gap-6 md:gap-8 mt-8 md:mt-10 flex-wrap">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            aria-label={link.ariaLabel}
            title={link.label}
            className="group relative inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <Icon
              size={24}
              className="text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors duration-200"
            />
            <span className="sr-only">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default ProfileLinks;
