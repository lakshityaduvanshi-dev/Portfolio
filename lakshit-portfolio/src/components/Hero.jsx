import { ArrowUpRight, FileDown } from "lucide-react";
import StackVisual from "./StackVisual";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black_10%,transparent_75%)]" />

      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/25 rounded-full blur-[110px] animate-float" />
      <div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-accent/15 rounded-full blur-[130px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center w-full">
  
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent bg-accent/10 border border-accent/25 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for new roles
          </div>

          <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink tracking-tight">
            Lakshit
            <br />
            Yaduvanshi
          </h1>

          <p className="mt-6 text-lg sm:text-l text-muted max-w-xl leading-relaxed">
            MERN Stack Developer building fast, end-to-end web products —
            from <span className="text-ink font-medium">MongoDB</span> schemas
            to <span className="text-ink font-medium">React</span> interfaces,
            with clean, production-ready code across the whole stack.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-accent text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-[0_8px_24px_-8px_rgb(var(--accent)/0.6)] hover:shadow-[0_10px_28px_-6px_rgb(var(--accent)/0.75)] hover:-translate-y-0.5 transition-all"
            >
              View my work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="c:\Users\user\Desktop\Lakshit yaduvanshi resume.pdf"
              download="c:\Users\user\Desktop\Lakshit yaduvanshi resume.pdf"
              className="inline-flex items-center gap-2 border border-line text-ink font-medium text-sm px-6 py-3.5 rounded-xl hover:border-accent/60 hover:text-accent transition-colors"
            >
              <FileDown size={16} />
              Download resume
            </a>
          </div>
        </div>

        {/* Signature stack visual */}
        <div className="hidden lg:block">
          <StackVisual />
        </div>
      </div>
    </section>
  );
}
