import React from 'react';
import { 
  Terminal, Brain, Cpu, Database, CheckSquare, 
  Code, Shield, Key, Network, RefreshCw, Layers, 
  Monitor, HardDrive, Compass, Settings
} from 'lucide-react';

// Brand SVGs
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M14.25.18c.9 0 1.66.76 1.66 1.66v2.91h-2.91c-.9 0-1.66.76-1.66 1.66v1.38h4.57c1.53 0 2.77 1.25 2.77 2.77v3.05c0 .76-.62 1.38-1.38 1.38h-1.38v-1.38c0-1.53-1.25-2.77-2.77-2.77h-3.05c-.76 0-1.38.62-1.38 1.38v2.77c0 .9.76 1.66 1.66 1.66h2.91v-2.91c0-.9.76-1.66 1.66-1.66h1.38V8.45H9.76c-1.53 0-2.77-1.25-2.77-2.77V2.63c0-.76.62-1.38 1.38-1.38h1.38v1.38c0 1.53 1.25 2.77 2.77 2.77H15.6c.76 0 1.38-.62 1.38-1.38V1.84c0-.9-.76-1.66-1.66-1.66h-1.07zm-7.61 9.55c.9 0 1.66.76 1.66 1.66v2.91h-2.91c-.9 0-1.66.76-1.66 1.66v1.38h4.57c1.53 0 2.77 1.25 2.77 2.77v3.05c0 .76-.62 1.38-1.38 1.38h-1.38V23.1c0-1.53-1.25-2.77-2.77-2.77H4.8c-.76 0-1.38-.62-1.38-1.38v-2.77c0-.9.76-1.66 1.66-1.66h2.91v2.91c0 .9-.76 1.66-1.66 1.66H4.95v1.38h4.57c1.53 0 2.77-1.25 2.77-2.77V13.7c0-.76-.62-1.38-1.38-1.38H7.53c-.76 0-1.38.62-1.38 1.38v-1.97h1.07c.9 0 1.66-.76 1.66-1.66v-1.07z"/>
  </svg>
);

const FastApiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" className="text-teal-500 fill-teal-500/20" />
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm.05-4.3l-.22 2.6c-.02.22-.2.38-.42.38h-.82c-.22 0-.4-.16-.42-.38l-.22-2.6c-.02-.28.2-.52.48-.52h1.12c.28 0 .5.24.48.52zm-1.05-3.2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" className="text-blue-500"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M21.36 11.11L12.38 2.12a.85.85 0 00-1.46.6v7.38H3.34a.85.85 0 00-.6 1.45l8.98 8.99a.85.85 0 001.46-.6v-7.38h7.58a.85.85 0 00.6-1.45z" className="text-emerald-500" />
  </svg>
);

const PlaywrightIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" className="text-emerald-500" />
    <polygon points="10 8 16 12 10 16 10 8" className="fill-emerald-500 text-emerald-500" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.983 8.877h2.29v-2.3h-2.29v2.3zm-.004 3.004h2.29v-2.29h-2.29v2.29zm-3.004-3.004h2.29v-2.3h-2.29v2.3zm-.004 3.004h2.29v-2.29h-2.29v2.29zm-3-3.004h2.29v-2.3H7.97v2.3zm-.003 3.004h2.29v-2.29H7.968v2.29zm-3.004-3.004h2.29v-2.3H4.964v2.3zm-.004 3.004h2.29v-2.29h-2.29v2.29zM23.99 11.23c-.312-.178-.718-.282-1.127-.282H21.56v-2.29h-2.29v2.29h-.6c-.504 0-.96.223-1.28.583-.348-.192-.756-.307-1.186-.307h-.68v2.29h-.6v-2.29h-2.29v2.29h-.6c-.504 0-.96.223-1.28.583-.348-.192-.756-.307-1.186-.307h-.68v2.29H8.72v-2.29H6.43v2.29h-.6c-.504 0-.96.223-1.28.583-.348-.192-.756-.307-1.186-.307H2.68v2.29h-.4c-.98 0-1.8 0-1.8.84 0 .42.12.83.33 1.18.52.88 1.48 1.42 2.5 1.42h16.5c1.47 0 2.66-1.19 2.66-2.66 0-.82-.37-1.57-.98-2.07z" className="text-blue-400" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" className="text-sky-400" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" className="text-sky-400" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" className="text-sky-400" />
    <circle cx="12" cy="12" r="2" className="fill-sky-400 text-sky-400" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <rect width="24" height="24" rx="3" className="text-blue-600" />
    <path d="M12.9 18.5c0-.9.2-1.7.7-2.3.5-.6 1.3-1 2.3-1 1 0 1.8.4 2.3 1.1.5.7.8 1.7.8 2.9h-1.7c0-.7-.1-1.3-.3-1.6-.2-.3-.6-.5-1-.5s-.7.2-1 .5c-.3.3-.4 1-.4 2.2 0 1.2.1 1.9.4 2.2.3.3.6.5 1 .5.5 0 .8-.2 1-.5.2-.3.3-.9.3-1.6h1.7c0 1.2-.3 2.1-.8 2.8-.5.7-1.3 1.1-2.3 1.1-1.1 0-1.9-.4-2.4-1.1-.4-.6-.7-1.5-.7-2.7zm-6.2.2c.2.4.6.6 1 .6.3 0 .6-.1.8-.3.2-.2.3-.5.3-.9 0-.4-.1-.7-.3-.9-.2-.2-.6-.4-1.2-.6-.9-.3-1.5-.7-1.9-1.1s-.6-1-.6-1.8c0-.7.2-1.3.7-1.8.5-.5 1.2-.8 2.1-.8s1.6.3 2 .8c.4.5.6 1.2.6 2h-1.6c0-.5-.1-.8-.3-1-.2-.2-.5-.3-.9-.3s-.6.1-.8.3c-.2.2-.3.4-.3.7 0 .3.1.5.3.7.2.2.6.4 1.2.6.9.3 1.5.7 1.9 1.1.4.4.6 1 .6 1.7 0 .8-.2 1.4-.7 1.9s-1.2.7-2.1.7c-1 0-1.7-.3-2.2-.8-.5-.5-.7-1.2-.7-2.1h1.6c.1.5.3.8.5 1.1z" fill="white" transform="scale(0.6) translate(8, 8)" />
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <rect width="24" height="24" rx="3" className="text-yellow-400" />
    <path d="M12.9 18.5c0-.9.2-1.7.7-2.3.5-.6 1.3-1 2.3-1 1 0 1.8.4 2.3 1.1.5.7.8 1.7.8 2.9h-1.7c0-.7-.1-1.3-.3-1.6-.2-.3-.6-.5-1-.5s-.7.2-1 .5c-.3.3-.4 1-.4 2.2 0 1.2.1 1.9.4 2.2.3.3.6.5 1 .5.5 0 .8-.2 1-.5.2-.3.3-.9.3-1.6h1.7c0 1.2-.3 2.1-.8 2.8-.5.7-1.3 1.1-2.3 1.1-1.1 0-1.9-.4-2.4-1.1-.4-.6-.7-1.5-.7-2.7zm-6.2.2c.2.4.6.6 1 .6.3 0 .6-.1.8-.3.2-.2.3-.5.3-.9 0-.4-.1-.7-.3-.9-.2-.2-.6-.4-1.2-.6-.9-.3-1.5-.7-1.9-1.1s-.6-1-.6-1.8c0-.7.2-1.3.7-1.8.5-.5 1.2-.8 2.1-.8s1.6.3 2 .8c.4.5.6 1.2.6 2h-1.6c0-.5-.1-.8-.3-1-.2-.2-.5-.3-.9-.3s-.6.1-.8.3c-.2.2-.3.4-.3.7 0 .3.1.5.3.7.2.2.6.4 1.2.6.9.3 1.5.7 1.9 1.1.4.4.6 1 .6 1.7 0 .8-.2 1.4-.7 1.9s-1.2.7-2.1.7c-1 0-1.7-.3-2.2-.8-.5-.5-.7-1.2-.7-2.1h1.6c.1.5.3.8.5 1.1z" fill="black" transform="scale(0.6) translate(8, 8)" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M23.384 11.238L12.758.612a1.083 1.083 0 00-1.532 0L9.423 2.415l3.208 3.209a2.716 2.716 0 013.845 0 2.723 2.723 0 010 3.846L13.264 12.68a2.715 2.715 0 01-3.642.15l-3.212 3.212a2.721 2.721 0 013.845 3.846l10.63-10.63a1.082 1.082 0 000-1.528z" className="text-orange-500" />
    <circle cx="5.5" cy="5.5" r="2.5" className="text-orange-500 fill-orange-500" />
  </svg>
);

const PostmanIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.111 12.8c0 .248-.024.49-.068.723-.179.957-.751 1.761-1.572 2.215-.823.457-1.802.483-2.646.069L7.42 12.3c-.636-.316-1.026-.957-1.026-1.674V7.5c0-.992.808-1.8 1.8-1.8h9.117c.992 0 1.8.808 1.8 1.8v5.3z" className="text-orange-500" />
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.28 15.65c-.15.22-.38.35-.64.35-.41 0-.75-.34-.75-.75v-1.6c0-.41.34-.75.75-.75.26 0 .49.13.64.35.32.48.51 1.05.51 1.66v.99z" className="text-emerald-600" />
  </svg>
);

const MySQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" className="text-blue-600" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 22.525H0L12 1.475L24 22.525Z" className="text-slate-900 dark:text-white" />
  </svg>
);

const FlaskIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 3h6M10 3v6l-4 8v2a2 2 0 002 2h8a2 2 0 002-2v-2l-4-8V3" className="text-slate-800 dark:text-slate-200" />
  </svg>
);

const NodeJsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" className="text-emerald-500" />
  </svg>
);

export const getSkillIcon = (name: string): React.ReactNode => {
  const norm = name.toLowerCase().trim();

  // Primary Brand Matching
  if (norm.includes('python')) return <PythonIcon />;
  if (norm.includes('fastapi')) return <FastApiIcon />;
  if (norm.includes('flask')) return <FlaskIcon />;
  if (norm.includes('node')) return <NodeJsIcon />;
  if (norm.includes('postgresql')) return <PostgreSQLIcon />;
  if (norm.includes('supabase')) return <SupabaseIcon />;
  if (norm.includes('playwright')) return <PlaywrightIcon />;
  if (norm.includes('docker')) return <DockerIcon />;
  if (norm.includes('react')) return <ReactIcon />;
  if (norm.includes('typescript')) return <TypeScriptIcon />;
  if (norm.includes('javascript')) return <JavaScriptIcon />;
  if (norm === 'git') return <GitIcon />;
  if (norm.includes('github')) return <GitHubIcon />;
  if (norm.includes('postman')) return <PostmanIcon />;
  if (norm.includes('mongodb')) return <MongoDBIcon />;
  if (norm.includes('mysql')) return <MySQLIcon />;
  if (norm.includes('vercel')) return <VercelIcon />;

  // Conceptual/Technical Matchings (Lucide)
  if (norm.includes('rest api') || norm === 'apis') return <Network size={18} className="text-indigo-400" />;
  if (norm.includes('websocket')) return <RefreshCw size={18} className="text-sky-400" />;
  if (norm.includes('async') || norm.includes('await')) return <Cpu size={18} className="text-teal-400" />;
  if (norm.includes('jwt')) return <Shield size={18} className="text-amber-400" />;
  if (norm.includes('oauth')) return <Key size={18} className="text-amber-500" />;

  // AI & RAG Concepts
  if (norm.includes('rag') || norm.includes('vector')) return <Layers size={18} className="text-blue-400 animate-pulse" />;
  if (norm.includes('inference')) return <Cpu size={18} className="text-indigo-400" />;
  if (norm.includes('embedding')) return <Database size={18} className="text-purple-400" />;
  if (norm.includes('search')) return <Compass size={18} className="text-emerald-400" />;
  if (norm.includes('prompt')) return <Terminal size={18} className="text-amber-400" />;
  if (norm.includes('groq') || norm.includes('claude') || norm.includes('generative ai')) return <Brain size={18} className="text-blue-500" />;

  // QA & Testing Concepts
  if (norm.includes('pytest')) return <CheckSquare size={18} className="text-emerald-500" />;
  if (norm.includes('test') || norm.includes('qa')) return <CheckSquare size={18} className="text-rose-400" />;

  // Core Concepts
  if (norm.includes('data structure') || norm.includes('algorithm')) return <Code size={18} className="text-sky-500" />;
  if (norm.includes('oop')) return <Settings size={18} className="text-purple-400" />;
  if (norm.includes('dbms')) return <Database size={18} className="text-blue-500" />;
  if (norm.includes('operating system') || norm === 'os') return <HardDrive size={18} className="text-slate-400" />;
  if (norm.includes('api design')) return <Monitor size={18} className="text-cyan-500" />;

  // Fallback
  return <Terminal size={18} className="text-slate-400" />;
};
