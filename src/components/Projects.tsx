import React from 'react';
import ProjectCard, { ArchitectureNode, EngineeringDecision } from './ProjectCard';

interface Project {
  id: string;
  title: string;
  badge?: string;
  description: string;
  technologies: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  researchUrl?: string;
  architectureNodes: ArchitectureNode[];
  engineeringDecisions: EngineeringDecision[];
  highlights: string[];
}

const Projects: React.FC = () => {

  const projects: Project[] = [
    {
      id: '01',
      title: 'AI Code Review Bot',
      badge: 'Published Research',
      description:
        'AI-assisted code review platform that analyzes source code across security, performance, maintainability, and other quality dimensions using LLM inference and semantic retrieval.',
      technologies: [
        'FastAPI',
        'React',
        'TypeScript',
        'Groq',
        'Llama 3.3-70B',
        'PostgreSQL',
        'Supabase',
        'pgvector',
        'GitHub OAuth2',
        'Monaco Editor',
      ],
      metrics: ['1–3s analysis', '<100ms cached responses', '10 req/min rate limit'],
      highlights: [
        'GitHub OAuth2 Integration',
        'Semantic Retrieval of coding guidelines',
        'Strict Structured JSON Schema parsing',
        'Optimized Response Caching with Supabase',
        'FastAPI gateway level Rate Limiting',
        'Multi-file repository scan processing',
      ],
      githubUrl: 'https://github.com/NeethishS/code-review-bot',
      liveUrl: 'https://code-review-bot-green.vercel.app',
      researchUrl: '#research',
      architectureNodes: [
        { label: 'User / GitHub', subLabel: 'Web interface / Webhook triggers' },
        { label: 'Frontend / Monaco', subLabel: 'Interactive code editor with highlight markers' },
        { label: 'FastAPI', subLabel: 'Main gateway, routing, authentication, and validation' },
        { label: 'Code Processing', subLabel: 'Extracts changed files, lines, and AST tree' },
        { label: 'Semantic Retrieval', subLabel: 'Queries Supabase PostgreSQL pgvector for guidelines' },
        { label: 'LLM Analysis', subLabel: 'Submits prompt context to Llama 3.3-70B via Groq' },
        { label: 'Structured Review', subLabel: 'Receives structured JSON feedback corresponding to schema' },
        { label: 'Response Cache', subLabel: 'Persists results in Supabase to return cached results in <100ms' },
      ],
      engineeringDecisions: [
        {
          title: 'Why Semantic Retrieval?',
          decision: 'Allows the model to pull relevant coding guidelines, historical fixes, and documentation context dynamically into the prompt rather than relying solely on static system instructions.',
        },
        {
          title: 'Why pgvector?',
          decision: 'Kept semantic retrieval within PostgreSQL to combine relational application data and vector search without introducing a separate vector database, minimizing system complexity.',
        },
        {
          title: 'Why Structured JSON?',
          decision: 'Configured the LLM to output structured JSON matching a strict schema so the frontend can reliably parse, highlight, and filter review comments by severity and file line.',
        },
        {
          title: 'Why Response Caching?',
          decision: 'Cached analysis results of identical code files in Supabase PostgreSQL, reducing duplicate LLM API calls and delivering instant (<100ms) responses for repeated reviews.',
        },
        {
          title: 'Why Rate Limiting?',
          decision: 'Implemented a strict rate limiter (10 requests/minute) at the FastAPI gateway level to protect upstream LLM inference resources from abuse and control API costs.',
        },
        {
          title: 'Why GitHub OAuth2?',
          decision: 'Integrated GitHub OAuth2 to authenticate users securely and retrieve repository files directly, providing a frictionless workspace integration.',
        },
      ],
    },
    {
      id: '02',
      title: 'AI-Powered Job Intelligence Platform',
      badge: 'Featured System',
      description:
        'Backend-driven job intelligence platform that crawls, normalizes, deduplicates, and analyzes software engineering opportunities from multiple job sources.',
      technologies: [
        'Python',
        'FastAPI',
        'Playwright',
        'SQLAlchemy',
        'Alembic',
        'PostgreSQL',
        'Supabase',
      ],
      metrics: [], // No fabricated metrics as per requirement
      highlights: [
        'Playwright headless browser automation for SPA job boards',
        'Disparate schema normalization into a unified PostgreSQL model',
        'Text similarity hashing for cross-board deduplication',
        'Exponential backoff + jitter retry strategy per crawler',
        'Isolated crawler crash boundaries via queue listener',
        'Pydantic query models with cursor-based pagination',
        'Text embedding semantic resume-to-job matching',
        'Structured logging with centralized warning capture',
      ],
      githubUrl: 'https://github.com/NeethishS',
      architectureNodes: [
        { label: 'Job Sources', subLabel: 'Dynamic web pages & job board APIs' },
        { label: 'Crawler Layer', subLabel: 'Playwright headless browser automation' },
        { label: 'Source Normalization', subLabel: 'Mappers transform disparate schemas to a unified model' },
        { label: 'Deduplication', subLabel: 'Text similarity hashing on listings and companies' },
        { label: 'PostgreSQL', subLabel: 'Alembic-managed database holding normalized structures' },
        { label: 'AI Analysis / Matching', subLabel: 'Semantic matching of resume profiles against listings' },
        { label: 'FastAPI API', subLabel: 'REST endpoints with Pydantic query models & pagination' },
        { label: 'Frontend', subLabel: 'Search, filters, and matched job opportunities' },
      ],
      engineeringDecisions: [
        {
          title: 'Why Playwright?',
          decision: 'Used Playwright for headless browser automation to reliably crawl dynamic single-page application (SPA) job boards that require JavaScript execution and session hydration.',
        },
        {
          title: 'How Job Sources are Normalized?',
          decision: 'Engineered parsing rules to map diverse schema structures from LinkedIn, Indeed, and Glassdoor into a unified PostgreSQL schema representing salary ranges, tech stacks, and locations.',
        },
        {
          title: 'How Duplicate Listings are Identified?',
          decision: 'Implemented text similarity hashing on job titles and descriptions alongside company names to identify and merge duplicate listings across different boards.',
        },
        {
          title: 'How Crawler Failures are Handled?',
          decision: 'Integrated a robust queue listener that isolates crawler crashes, preventing single scraping errors from affecting the central server database.',
        },
        {
          title: 'How Retries/Backoff Work?',
          decision: 'Configured exponential backoff retries with randomized jitter to handle rate-limits and temporary network blockages from target domains gracefully.',
        },
        {
          title: 'How Jobs are Stored?',
          decision: 'Stored processed items in a relational schema on Supabase PostgreSQL, leveraging indexes on job titles, technologies, and post dates for sub-10ms query execution.',
        },
        {
          title: 'How AI Matching Works?',
          decision: 'Utilized text embeddings to rank job descriptions against resume profiles, providing semantic similarity scores instead of relying on fragile keyword matching.',
        },
        {
          title: 'How the API is Structured?',
          decision: 'Exposed structured REST endpoints in FastAPI utilizing Pydantic query models to support advanced search, filtering, and cursor-based pagination.',
        },
      ],
    },
    {
      id: '03',
      title: 'EchoSession',
      badge: 'Real-time RAG',
      description:
        'Real-time RAG conversation backend supporting context-aware multi-turn conversations over uploaded documents.',
      technologies: [
        'FastAPI',
        'WebSockets',
        'Groq API',
        'Llama 3.3-70B',
        'sentence-transformers',
        'all-MiniLM-L6-v2',
        'pgvector',
        'Supabase',
        'PostgreSQL',
      ],
      metrics: ['150–300ms TTFT', '~275 tokens/sec', '384-dim embeddings'],
      highlights: [
        'Bi-directional WebSocket streaming',
        'pgvector semantic document retrieval',
        'all-MiniLM-L6-v2 384-dim embedding extraction',
        'Top-K relevant chunk retrieval routing',
        'Supabase PostgreSQL vector integration',
        'Multi-turn context session tracking',
      ],
      githubUrl: 'https://github.com/NeethishS/echo-buddy',
      architectureNodes: [
        { label: 'Client', subLabel: 'Frontend WebSocket connection' },
        { label: 'WebSocket', subLabel: 'Persistent bi-directional connection' },
        { label: 'FastAPI', subLabel: 'Socket router, handler, and session manager' },
        { label: 'Embedding Model', subLabel: 'Extracts 384-dim vector using all-MiniLM-L6-v2' },
        { label: 'pgvector Retrieval', subLabel: 'Cosine similarity query on Supabase PostgreSQL' },
        { label: 'Top-K Context', subLabel: 'Pulls top-3 most similar document chunks' },
        { label: 'Groq LLM', subLabel: 'Submits query and context chunks to Llama 3.3-70B' },
        { label: 'Streaming Response', subLabel: 'Streams text response tokens back via WebSocket' },
      ],
      engineeringDecisions: [
        {
          title: 'Why WebSockets?',
          decision: 'Used WebSockets for persistent bidirectional communication and token streaming instead of creating a new HTTP request for every interaction, minimizing latency.',
        },
        {
          title: 'Why pgvector?',
          decision: 'Used pgvector to execute cosine similarity searches on Supabase PostgreSQL directly, keeping user documents and embedding vectors in a single database.',
        },
        {
          title: 'Why Semantic Retrieval?',
          decision: 'Implemented RAG to retrieve only the top-K relevant chunks per document query, preventing token limit exhaustion and maintaining context accuracy.',
        },
        {
          title: 'Why Streaming?',
          decision: 'Configured streaming responses using chunks from the Groq API to display text immediately to the user, reducing perceived latency to a 150-300ms TTFT.',
        },
        {
          title: 'Why Chunking?',
          decision: 'Segmented uploaded documents into 500-word overlapping chunks using sentence splitting to preserve semantic context and boundary integrity.',
        },
        {
          title: 'Why Top-K Retrieval?',
          decision: 'Retrieved the top-3 most similar document chunks based on embedding distance, balancing background context density with prompt efficiency.',
        },
      ],
    },
  ];  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 lg:py-32 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-12 md:mb-16 opacity-0 animate-fade-in" style={{ animationDuration: '600ms', animationDelay: '0ms', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" aria-hidden="true"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in"
              style={{
                animationDuration: '600ms',
                animationDelay: `${200 + index * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                metrics={project.metrics}
                badge={project.badge}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                researchUrl={project.researchUrl}
                architectureNodes={project.architectureNodes}
                engineeringDecisions={project.engineeringDecisions}
                highlights={project.highlights}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
