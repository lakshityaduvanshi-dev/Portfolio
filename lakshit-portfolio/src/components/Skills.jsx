import React from "react";
import { 
  FaHtml5, 
  FaReact, 
  FaNodeJs 
} from "react-icons/fa";
import { 
  BiLogoCss3, 
  BiLogoJavascript, 
  BiLogoMongodb, 
  BiLogoTailwindCss 
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
 
const SKILLS = [
  { name: "HTML5", icon: FaHtml5, note: "Semantic markup", color: "text-[#e34c26]" },
  { name: "CSS3", icon: BiLogoCss3, note: "Layout & animation", color: "text-[#264de4]" },
  { name: "JavaScript", icon: BiLogoJavascript, note: "ES6+", color: "text-[#f7df1e]" },
  { name: "React.js", icon: FaReact, note: "Component UIs", color: "text-[#61dafb]" },
  { name: "Node.js", icon: FaNodeJs, note: "Runtime", color: "text-[#3c873a]" },
  { name: "Express.js", icon: SiExpress, note: "REST APIs", color: "text-text-main" },
  { name: "MongoDB", icon: BiLogoMongodb, note: "NoSQL data", color: "text-[#4db33d]" },
  { name: "Tailwind CSS", icon: BiLogoTailwindCss, note: "Utility-first styling", color: "text-[#38bdf8]" },
];
 
export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Core stack" title="Tools I build with" />
 
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map(({ name, icon: Icon, note, color }) => (
            <div
              key={name}
              className="group relative rounded-2xl border border-border-main bg-bg-card p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
            >
             
              <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-border-main group-hover:border-accent/70 transition-colors" />
              <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-border-main group-hover:border-accent/70 transition-colors" />
 
            
              <div className="absolute -inset-6 bg-accent/0 group-hover:bg-accent/10 blur-2xl transition-all duration-500 pointer-events-none" />
 
              <Icon className={`relative w-8 h-8 ${color} group-hover:scale-110 transition-transform duration-300`} />
              <p className="relative mt-4 font-display font-medium text-text-main">
                {name}
              </p>
              <p className="relative mt-1 font-mono text-xs text-text-muted">
                {note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
/** Shared section heading used across sections for a consistent rhythm */
export function SectionHeading({ eyebrow, title, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="font-mono text-xs text-accent tracking-wide uppercase mb-3">
      
      </p>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text-main tracking-tight">
        {title}
      </h2>
    </div>
  );
}