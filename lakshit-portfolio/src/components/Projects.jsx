import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi'; 
import { SectionHeading } from './Skills';

const PROJECTS = [
   {
    title: "E-Commerce Website(Essentials.in)",
    description: "A custom modular frontend and backend shopping architecture crafted natively without typical cloned templates. Features fluid cart lifecycles and state persistence.",
    tech: ["React.js", "Express.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://online-store-jade-psi.vercel.app/",
    githubUrl: "https://github.com/lakshityaduvanshi-dev/online-store",
    featured: false
  },
  {
    title: "QuizDeck",
    description: "QuizDeck — build categories, write questions, race the clock, climb the leaderboard.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
    liveUrl: "https://quiz-game-1-tc20.onrender.com/",
    githubUrl: "https://github.com/lakshityaduvanshi-dev/Quiz-game",
    featured: true
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="My Works" title="Featured Projects" />

        {/* Changed grid-cols-3 to grid-cols-2 for perfect equality */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border border-border-main bg-bg-card p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 ${
                project.featured ? "border-accent/20 shadow-xl shadow-accent/5" : ""
              }`}
            >
              <div className="absolute -inset-10 bg-accent/0 group-hover:bg-accent/5 blur-3xl transition-all duration-500 pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-text-main group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex gap-3 relative z-10 text-text-muted">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-text-main transition-colors text-xl">
                      <FiGithub />
                    </a>
                    {/* Added target="_blank" here too so it opens in a new tab */}
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-text-main transition-colors text-xl">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                <p className="text-text-muted font-sans text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="font-mono text-xs px-2.5 py-1 rounded-md bg-bg-main border border-border-main text-text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}